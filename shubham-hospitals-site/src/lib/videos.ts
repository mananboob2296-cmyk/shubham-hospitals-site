// Typed access to the YouTube video data in src/data/videos.json.
// That JSON is refreshed by scripts/fetch-youtube-videos.mjs (run from the
// videos-refresh GitHub Action) — the site only ever reads the committed file,
// so the build never depends on YouTube being reachable.

import data from '../data/videos.json';

export interface Video {
  id: string;
  title: string;
  published: string | null;
  description?: string;
  thumb: string;
}

export interface Channel {
  key: 'hospital' | 'drManan';
  name: string;
  handle: string;
  url: string;
  channelId: string;
  videos: Video[];
}

const channels = data.channels as Record<string, Channel>;

export function getChannel(key: 'hospital' | 'drManan'): Channel {
  return channels[key];
}

// Latest N videos from a channel (already newest-first in the feed).
export function latest(key: 'hospital' | 'drManan', n = 3): Video[] {
  return (channels[key]?.videos ?? []).slice(0, n);
}

// Total number of videos across all channels — used to decide whether to
// render a videos section at all (nothing shows before the first feed sync).
export function totalVideos(): number {
  return Object.values(channels).reduce((sum, c) => sum + (c.videos?.length ?? 0), 0);
}

export const fetchedAt = data.fetchedAt as string | null;
