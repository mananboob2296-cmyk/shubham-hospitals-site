import type { Lang } from './ui';

// English-root paths that have Hindi/Marathi versions. Keeps nav + switcher 404-safe.
const translated: Record<Exclude<Lang, 'en'>, Set<string>> = {
  hi: new Set(['/', '/faq/', '/departments/', '/doctors/', '/about-us/', '/contact-us/']),
  mr: new Set(['/', '/faq/', '/departments/', '/doctors/', '/about-us/', '/contact-us/']),
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
