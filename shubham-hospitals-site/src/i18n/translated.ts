import type { Lang } from './ui';

// English-root paths (leading + trailing slash) that have Hindi/Marathi versions.
// Grow these sets as more pages are translated. This keeps the nav and language
// switcher 404-safe: links to not-yet-translated pages stay on the English URL,
// and the switcher sends you to the language homepage instead of a dead path.
const translated: Record<Exclude<Lang, 'en'>, Set<string>> = {
  // Batch 1: homepage + FAQ. Extend as more pages are translated.
  hi: new Set(['/', '/faq/']),
  mr: new Set(['/', '/faq/']),
};

export function isTranslated(lang: Lang, basePath: string): boolean {
  if (lang === 'en') return true;
  return translated[lang].has(basePath);
}

export function availableLocales(basePath: string): Lang[] {
  const out: Lang[] = ['en'];
  (['hi', 'mr'] as const).forEach((l) => {
    if (translated[l].has(basePath)) out.push(l);
  });
  return out;
}
