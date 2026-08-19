import type { Lang } from '../ui';
import { en } from './en';
import { hi } from './hi';
import { mr } from './mr';
import { calcSlugs, type CalcSlug, type CalcLangPack, type CalcCopy, type CalcShared } from './types';

export { calcSlugs };
export type { CalcSlug, CalcCopy, CalcShared };

const packs: Record<Lang, CalcLangPack> = { en, hi, mr };

/** Display order on the hub + in the sitemap, and the icon each card uses. */
export const calcRegistry: { slug: CalcSlug; icon: string }[] = [
  { slug: 'ovulation-calculator', icon: 'target' },
  { slug: 'pregnancy-due-date-calculator', icon: 'calendar' },
  { slug: 'ivf-due-date-calculator', icon: 'flask' },
  { slug: 'period-calculator', icon: 'droplet' },
  { slug: 'pregnancy-week-calculator', icon: 'clock' },
  { slug: 'pregnancy-weight-gain-calculator', icon: 'scale' },
  { slug: 'hcg-doubling-calculator', icon: 'chart' },
  { slug: 'kick-counter', icon: 'foot' },
];

export function calcShared(lang: Lang): CalcShared {
  return packs[lang].shared;
}

export function calcCopy(lang: Lang, slug: CalcSlug): CalcCopy {
  return packs[lang].calculators[slug] ?? packs.en.calculators[slug];
}

/** Every calculator in display order, with its copy for `lang`. */
export function allCalculators(lang: Lang) {
  return calcRegistry.map((c) => ({ ...c, copy: calcCopy(lang, c.slug) }));
}

/** The three calculators shown in the "Other calculators" strip. */
export function relatedCalculators(lang: Lang, current: CalcSlug, count = 3) {
  const i = calcRegistry.findIndex((c) => c.slug === current);
  const out: { slug: CalcSlug; icon: string; copy: CalcCopy }[] = [];
  for (let n = 1; out.length < count && n < calcRegistry.length; n++) {
    const c = calcRegistry[(i + n) % calcRegistry.length];
    out.push({ ...c, copy: calcCopy(lang, c.slug) });
  }
  return out;
}

/** Root-relative URL for a calculator (or the hub) in a given language. */
export function calcPath(lang: Lang, slug?: CalcSlug): string {
  const base = slug ? `/calculators/${slug}/` : '/calculators/';
  return lang === 'en' ? base : `/${lang}${base}`;
}

/** English base paths for every calculator page — used for hreflang wiring. */
export const calcBasePaths: string[] = ['/calculators/', ...calcSlugs.map((s) => `/calculators/${s}/`)];
