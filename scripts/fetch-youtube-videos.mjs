#!/usr/bin/env node
// Fetch latest videos from the two hospital YouTube channels via their public
// RSS feeds (no API key, no quota) and write src/data/videos.json.
//
// Run by .github/workflows/videos-refresh.yml on a weekly cron (and on demand).
// The Astro build reads the committed JSON — it never touches YouTube itself,
// so a deploy can never be broken by YouTube being slow/unreachable.
//
// Resilience: if a channel's feed fails to fetch/parse, its previously-saved
// videos are kept (we never wipe good data on a transient error).

import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = resolve(__dirname, '../shubham-hospitals-site/src/data/videos.json');
const MAX_PER_CHANNEL = 12;

// Channel registry — keys are stable and referenced by the site code.
const CHANNELS = [
  {
    key: 'hospital',
    name: 'Shubham Hi-Tech Hospital',
    handle: '@shubhamhitechhospital',
    url: 'https://youtube.com/@shubhamhitechhospital',
    channelId: 'UC6p4jRKKnO3ZyqaQvcCfh_Q',
  },
  {
    key: 'drManan',
    name: 'Dr Manan Boob — Advanced Gyne Endoscopy',
    handle: '@drmananboob.gynendoscopy',
    url: 'https://youtube.com/@drmananboob.gynendoscopy',
    channelId: 'UCI4P9DW1UnqAQFlV4pFaIDw',
  },
];

function decodeEntities(s) {
  return s
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#x27;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&amp;/g, '&')
    .trim();
}

function parseFeed(xml) {
  const videos = [];
  const entries = xml.split('<entry>').slice(1);
  for (const e of entries) {
    const id = (e.match(/<yt:videoId>([^<]+)<\/yt:videoId>/) || [])[1];
    const rawTitle = (e.match(/<title>([\s\S]*?)<\/title>/) || [])[1];
    const published = (e.match(/<published>([^<]+)<\/published>/) || [])[1];
    const rawDesc = (e.match(/<media:description>([\s\S]*?)<\/media:description>/) || [])[1] || '';
    if (!id || !rawTitle) continue;
    const desc = decodeEntities(rawDesc).replace(/\s+/g, ' ').slice(0, 300);
    videos.push({
      id,
      title: decodeEntities(rawTitle),
      published: published || null,
      description: desc,
      thumb: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
    });
  }
  return videos;
}

async function loadExisting() {
  try {
    return JSON.parse(await readFile(OUT, 'utf8'));
  } catch {
    return { channels: {} };
  }
}

async function fetchChannel(ch) {
  const feed = `https://www.youtube.com/feeds/videos.xml?channel_id=${ch.channelId}`;
  const res = await fetch(feed, {
    headers: { 'User-Agent': 'Mozilla/5.0 (compatible; ShubhamHospitalsBot/1.0)' },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${ch.key}`);
  const xml = await res.text();
  const videos = parseFeed(xml).slice(0, MAX_PER_CHANNEL);
  if (videos.length === 0) throw new Error(`No videos parsed for ${ch.key}`);
  return videos;
}

async function main() {
  const prev = await loadExisting();
  const out = { fetchedAt: new Date().toISOString(), channels: {} };
  let failures = 0;

  for (const ch of CHANNELS) {
    const base = {
      key: ch.key,
      name: ch.name,
      handle: ch.handle,
      url: ch.url,
      channelId: ch.channelId,
    };
    try {
      const videos = await fetchChannel(ch);
      out.channels[ch.key] = { ...base, videos };
      console.log(`✓ ${ch.key}: ${videos.length} videos`);
    } catch (err) {
      failures++;
      const kept = prev.channels?.[ch.key]?.videos ?? [];
      out.channels[ch.key] = { ...base, videos: kept };
      console.error(`✗ ${ch.key}: ${err.message} — kept ${kept.length} previous`);
    }
  }

  await mkdir(dirname(OUT), { recursive: true });
  await writeFile(OUT, JSON.stringify(out, null, 2) + '\n', 'utf8');
  console.log(`Wrote ${OUT}`);
  // Exit non-zero only if BOTH channels failed AND we have no data at all,
  // so a single flaky feed doesn't fail the whole workflow.
  const total = Object.values(out.channels).reduce((n, c) => n + c.videos.length, 0);
  if (failures === CHANNELS.length && total === 0) {
    console.error('All channels failed and no cached data — failing.');
    process.exit(1);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
