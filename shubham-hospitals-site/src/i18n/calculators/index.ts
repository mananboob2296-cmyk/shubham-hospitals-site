import type { Lang } from '../ui';
import { en } from './en';
import { hi } from './hi';
import { mr } from './mr';
import { type CalcSlug, type CalcLangPack, type CalcCopy, type CalcShared, type Block } from './types';

export type { CalcSlug, CalcCopy, CalcShared, Block };

const packs: Record<Lang, CalcLangPack> = { en, hi, mr };

/** Display order on the hub + in the sitemap, and the icon each card uses.
 *  Module-local: callers should go through `allCalculators` or `liveSlugs` so
 *  they cannot accidentally offer a retired slug. */
const calcRegistry: { slug: CalcSlug; icon: string }[] = [
  { slug: 'ovulation-calculator', icon: 'target' },
  { slug: 'pregnancy-due-date-calculator', icon: 'calendar' },
  { slug: 'ivf-due-date-calculator', icon: 'flask' },
  { slug: 'period-calculator', icon: 'droplet' },
  { slug: 'pregnancy-week-calculator', icon: 'clock' },
  { slug: 'pregnancy-weight-gain-calculator', icon: 'scale' },
  { slug: 'hcg-doubling-calculator', icon: 'chart' },
  { slug: 'kick-counter', icon: 'foot' },
];

/** The calculators that survive consolidation, in hub order, for every
 *  language.
 *
 *  Three tools were merged into two: dating by LMP, scan, IVF/FET and a known
 *  due date is one question asked four ways, and period projection and fertile
 *  window share one set of cycle inputs. The retired slugs still resolve — see
 *  public/_redirects — and their unique teaching content moved into the
 *  surviving page rather than being dropped.
 *
 *  The retired slugs stay in `calcSlugs` and in every language pack because the
 *  pack type requires all eight keys; they are simply no longer built as pages.
 *  Their 301s live in public/_redirects, which is the only place that mapping
 *  is written down — a second copy here would drift from it unnoticed.
 */
export const liveSlugs: CalcSlug[] = [
  'pregnancy-due-date-calculator',
  'ovulation-calculator',
  'pregnancy-weight-gain-calculator',
  'hcg-doubling-calculator',
  'kick-counter',
];

/** Cards shown on the hub, grouped by the question the visitor is asking.
 *
 *  The movement counter is listed here as a tool rather than as separate
 *  information: the hospital's decision, taken knowing the argument against it.
 *  What made the old counter unsafe was the verdict it printed on reaching ten,
 *  and that is gone — it now reports the count and says it is not a check on
 *  the baby, with the call-now panel above the tool rather than after it. */
export const hubGroups: { group: 'pregnancy' | 'cycle' | 'lab'; slug: CalcSlug; icon: string; query?: string }[] = [
  { group: 'pregnancy', slug: 'pregnancy-due-date-calculator', icon: 'calendar' },
  { group: 'cycle', slug: 'ovulation-calculator', icon: 'target', query: 'view=period' },
  { group: 'pregnancy', slug: 'pregnancy-weight-gain-calculator', icon: 'scale' },
  { group: 'lab', slug: 'hcg-doubling-calculator', icon: 'chart' },
  { group: 'pregnancy', slug: 'kick-counter', icon: 'foot' },
];

/** Curated next steps: at most two per tool, chosen for the care stage the
 *  visitor is actually in. The old strip was positional — it walked the
 *  registry — so an hCG result offered a kick counter and IVF dating offered a
 *  period calculator, crossing unrelated stages of care. */
const relatedMap: Partial<Record<CalcSlug, CalcSlug[]>> = {
  'pregnancy-due-date-calculator': ['pregnancy-weight-gain-calculator'],
  'ovulation-calculator': ['pregnancy-due-date-calculator'],
  'pregnancy-weight-gain-calculator': ['pregnancy-due-date-calculator'],
  'hcg-doubling-calculator': ['pregnancy-due-date-calculator'],
  'kick-counter': ['pregnancy-due-date-calculator'],
};

/** Calculators whose `help` block describes symptoms needing assessment today.
 *  It renders as a panel with a telephone action instead of plain editorial
 *  text, and routine booking stays visually separate.
 *
 *  This lives with the tool rather than in each language pack: whether a block
 *  is urgent is a property of the calculator, not of a translation, and a
 *  per-locale flag can silently disagree between languages. */
export const urgentHelp: CalcSlug[] = ['hcg-doubling-calculator', 'kick-counter'];

/** Urgent advice sits above the tool where the tool itself is the thing that
 *  can delay a call — someone worried about movements must not have to finish
 *  a timer before they see the number. Elsewhere it sits directly beneath the
 *  result, next to the number it applies to. */
export const urgentHelpFirst: CalcSlug[] = ['kick-counter'];

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
  return calcRegistry
    .filter((c) => liveSlugs.includes(c.slug))
    .map((c) => ({ ...c, copy: calcCopy(lang, c.slug) }));
}

/** Related tools for the strip under a calculator, curated per care stage. */
export function relatedCalculators(lang: Lang, current: CalcSlug) {
  return (relatedMap[current] ?? []).map((slug) => ({
    slug,
    icon: calcRegistry.find((c) => c.slug === slug)?.icon ?? 'calendar',
    copy: calcCopy(lang, slug),
  }));
}

/** Root-relative URL for a calculator (or the hub) in a given language. */
export function calcPath(lang: Lang, slug?: CalcSlug): string {
  const base = slug ? `/calculators/${slug}/` : '/calculators/';
  return lang === 'en' ? base : `/${lang}${base}`;
}

/** English base paths that hi/mr mirror, used for hreflang wiring. Only the
 *  surviving routes appear: a retired slug has no page in any language, so
 *  claiming one would point hreflang at a redirect. */
export const calcBasePaths: string[] = ['/calculators/', ...liveSlugs.map((s) => `/calculators/${s}/`)];
