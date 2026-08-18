// Shape of the calculators section. English (en) is the source of truth;
// hi/mr mirror the same keys. Every calculator ships identical structure so the
// hub, the [slug] route and the sitemap page can all render generically.

export const calcSlugs = [
  'ovulation-calculator',
  'pregnancy-due-date-calculator',
  'ivf-due-date-calculator',
  'period-calculator',
  'pregnancy-week-calculator',
  'pregnancy-weight-gain-calculator',
  'hcg-doubling-calculator',
  'kick-counter',
] as const;

export type CalcSlug = (typeof calcSlugs)[number];

export interface FaqItem {
  q: string;
  a: string;
}

/** A titled block of editorial copy below the calculator. */
export interface Block {
  h: string;
  /** Rendered as <p> when a string, as an ordered/unordered list when an array. */
  body: string | string[];
}

export interface CalcCopy {
  /** Card title on the hub, label in nav lists and the sitemap. */
  name: string;
  /** One-line description on the hub card. */
  card: string;
  eyebrow: string;
  h1: string;
  lead: string;
  metaTitle: string;
  metaDescription: string;
  /** Input labels, keyed by the field id used in the component. */
  fields: Record<string, string>;
  /** Optional helper text under an input, keyed the same way. */
  hints?: Record<string, string>;
  /** Option labels for <select> inputs, keyed by "<field>.<value>". */
  options?: Record<string, string>;
  /** Result row labels, keyed by the result id used in the component. */
  results: Record<string, string>;
  /** Placeholder shown before the visitor has entered enough to calculate. */
  empty: string;
  howTo: Block;
  limits: Block;
  help: Block;
  faqs: FaqItem[];
}

/** Strings shared by every calculator page + the hub, per language. */
export interface CalcShared {
  hubEyebrow: string;
  hubH1: string;
  hubLead: string;
  hubMetaTitle: string;
  hubMetaDescription: string;
  hubName: string;
  crumbHome: string;
  crumbCalculators: string;
  open: string;
  yourResult: string;
  calculate: string;
  clear: string;
  privacy: string;
  disclaimerH: string;
  disclaimer: string;
  relatedH: string;
  allCalculators: string;
  bookCta: string;
  faqH: string;
  /** Units and small words reused inside result strings. */
  units: {
    days: string;
    weeks: string;
    hours: string;
    kg: string;
    cm: string;
    weeksDays: string; // e.g. "{w} weeks {d} days"
    to: string;        // range separator word, e.g. "to"
  };
  trimesters: [string, string, string];
}

export interface CalcLangPack {
  shared: CalcShared;
  calculators: Record<CalcSlug, CalcCopy>;
}
