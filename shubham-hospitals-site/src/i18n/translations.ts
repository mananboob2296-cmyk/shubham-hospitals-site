import { getCollection } from 'astro:content';
import type { Lang } from './ui';

// Translation availability, derived from the content collections at build time:
// a hi/mr version of a page exists iff its .md file exists under the locale
// subfolder (src/content/<type>/hi/... or mr/...). No hand-maintained manifest.
//
// CORE lists the hand-built static pages that exist for every locale as
// physical .astro files under src/pages/hi/ and src/pages/mr/.
//
// NOTE: blog articles are intentionally NOT in these sets — their hi/mr URLs
// live under /hi/blogs/<slug>/ (a different shape than /<slug>/), so the blog
// routes pass explicit altPaths to BaseLayout/LangSwitcher instead.
const CORE = ['/', '/faq/', '/departments/', '/doctors/', '/about-us/', '/contact-us/', '/blogs/'];

const cache: Partial<Record<'hi' | 'mr', Promise<Set<string>>>> = {};

async function build(lang: 'hi' | 'mr'): Promise<Set<string>> {
  const set = new Set(CORE);
  const prefix = `${lang}/`;
  for (const e of await getCollection('treatments')) {
    if (e.slug.startsWith(prefix)) set.add(`/treatments/${e.slug.slice(prefix.length)}/`);
  }
  // Landing pages and doctor profiles both live at the root URL level
  // (/hi/<slug>/), matching their existing live URLs.
  for (const e of await getCollection('landing')) {
    if (e.slug.startsWith(prefix)) set.add(`/${e.slug.slice(prefix.length)}/`);
  }
  for (const e of await getCollection('doctors')) {
    if (e.slug.startsWith(prefix)) set.add(`/${e.slug.slice(prefix.length)}/`);
  }
  return set;
}

// The set of English base paths (leading + trailing slash) translated into `lang`.
export function translatedPaths(lang: 'hi' | 'mr'): Promise<Set<string>> {
  return (cache[lang] ??= build(lang));
}

export async function isTranslated(lang: Lang, basePath: string): Promise<boolean> {
  if (lang === 'en') return true;
  return (await translatedPaths(lang)).has(basePath);
}
