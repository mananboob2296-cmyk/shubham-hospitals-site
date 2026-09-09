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

/** The English calculators that survive consolidation, in hub order.
 *
 *  Three tools were merged into two: dating by LMP, scan, IVF/FET and a known
 *  due date is one question asked four ways, and period projection and fertile
 *  window share one set of cycle inputs. The retired slugs still resolve — see
 *  `legacyEnRoutes` and public/_redirects — and their unique teaching content
 *  moved into the surviving page rather than being dropped.
 *
 *  Hindi and Marathi deliberately still run the original eight-calculator
 *  structure: consolidating them means rewriting merged clinical copy in both
 *  languages, which needs a reviewer rather than a translation guess. Until
 *  then `calcSlugsFor` keeps each language on the set it actually has copy for.
 */
export const enSlugs: CalcSlug[] = [
  'pregnancy-due-date-calculator',
  'ovulation-calculator',
  'pregnancy-weight-gain-calculator',
  'hcg-doubling-calculator',
  'kick-counter',
];

/** English slugs that are built as pages, per language. */
export function calcSlugsFor(lang: Lang): CalcSlug[] {
  return lang === 'en' ? enSlugs : [...calcSlugs];
}

/** Retired English routes → the surviving route and the state it opens in.
 *  Mirrored as 301s in public/_redirects; kept here so the sitemap, the
 *  language switcher and the hi/mr hreflang wiring all agree with them. */
export const legacyEnRoutes: Record<string, { slug: CalcSlug; query: string }> = {
  'ivf-due-date-calculator': { slug: 'pregnancy-due-date-calculator', query: 'method=ivf' },
  'pregnancy-week-calculator': { slug: 'pregnancy-due-date-calculator', query: 'method=edd' },
  'period-calculator': { slug: 'ovulation-calculator', query: 'view=period' },
};

/** Where an English visitor should land for a slug, following consolidation.
 *  Retired slugs resolve to the surviving page in the right state. */
export function enDestination(slug: CalcSlug): string {
  const moved = legacyEnRoutes[slug];
  return moved ? `/calculators/${moved.slug}/?${moved.query}` : `/calculators/${slug}/`;
}

/** Cards shown on the hub, grouped by the question the visitor is asking.
 *  Movement guidance is deliberately absent: it is an information resource,
 *  linked as text below the cards rather than styled as a calculator. */
export const enHubGroups: { group: 'pregnancy' | 'cycle' | 'lab'; slug: CalcSlug; icon: string; href?: string }[] = [
  { group: 'pregnancy', slug: 'pregnancy-due-date-calculator', icon: 'calendar' },
  { group: 'cycle', slug: 'ovulation-calculator', icon: 'target', href: '/calculators/ovulation-calculator/?view=period' },
  { group: 'pregnancy', slug: 'pregnancy-weight-gain-calculator', icon: 'scale' },
  { group: 'lab', slug: 'hcg-doubling-calculator', icon: 'chart' },
];

/** Curated next steps: at most two per tool, chosen for the care stage the
 *  visitor is actually in. The old strip was positional — it walked the
 *  registry — so an hCG result offered a kick counter and IVF dating offered a
 *  period calculator, crossing unrelated stages of care. */
const enRelated: Partial<Record<CalcSlug, CalcSlug[]>> = {
  'pregnancy-due-date-calculator': ['pregnancy-weight-gain-calculator'],
  'ovulation-calculator': ['pregnancy-due-date-calculator'],
  'pregnancy-weight-gain-calculator': ['pregnancy-due-date-calculator'],
  'hcg-doubling-calculator': ['pregnancy-due-date-calculator'],
  'kick-counter': ['pregnancy-due-date-calculator'],
};

export function calcShared(lang: Lang): CalcShared {
  const s = packs[lang].shared;
  if (lang === 'en') return s;
  // A locale pack written before a shared string was added hands the runtime
  // `undefined`, which throws the first time that string is used — adding
  // `errors` broke the hi/mr calculators exactly this way until the packs
  // caught up. Per-calculator copy already falls back to English (see
  // calcCopy); shared chrome now does the same, so a missing key degrades to
  // English text instead of crashing the page.
  //
  // `hub` and `resultUi` are deliberately not inherited: they are opt-in
  // configuration for the consolidated English directory, not text every
  // locale should silently pick up.
  const { hub, resultUi, ...enText } = packs.en.shared;
  return {
    ...enText,
    ...s,
    errors: { ...enText.errors, ...(s.errors ?? {}) },
    units: { ...enText.units, ...(s.units ?? {}) },
  };
}

export function calcCopy(lang: Lang, slug: CalcSlug): CalcCopy {
  return packs[lang].calculators[slug] ?? packs.en.calculators[slug];
}

/** Every calculator in display order, with its copy for `lang`. */
export function allCalculators(lang: Lang) {
  const slugs = calcSlugsFor(lang);
  return calcRegistry
    .filter((c) => slugs.includes(c.slug))
    .map((c) => ({ ...c, copy: calcCopy(lang, c.slug) }));
}

/** Related tools for the strip under a calculator. English uses the curated
 *  map above; hi/mr keep the original rotation until they are consolidated. */
export function relatedCalculators(lang: Lang, current: CalcSlug, count = 3) {
  if (lang === 'en') {
    return (enRelated[current] ?? []).map((slug) => ({
      slug,
      icon: calcRegistry.find((c) => c.slug === slug)?.icon ?? 'calendar',
      copy: calcCopy(lang, slug),
    }));
  }
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

/** English base paths that hi/mr mirror, used for hreflang wiring. Only the
 *  surviving English routes appear: a retired slug has no English page, so
 *  claiming one would point hreflang at a redirect. */
export const calcBasePaths: string[] = ['/calculators/', ...enSlugs.map((s) => `/calculators/${s}/`)];
