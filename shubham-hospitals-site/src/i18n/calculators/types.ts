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
  /** Superseded by `urgentHelp` in the registry, which decides this per tool
   *  rather than per language. Still present in the hi/mr packs; delete it
   *  there when those packs are next edited. Reading it here would let one
   *  language quietly drop an emergency panel the others show. */
  helpUrgent?: boolean;
  /** Short strings shown beside a result: the method used, the limitation that
   *  applies, and the one next step. Keyed by the id the component asks for. */
  notes?: Record<string, string>;
  /** "Clinical details & calculation method" disclosure: formula, assumptions,
   *  rounding and the population a reference applies to. Rendered collapsed. */
  clinical?: Block;
  /** Audience hint on the hub card, e.g. "Use with your clinician". */
  audience?: string;
  /** Method choices for a calculator that offers more than one route to the
   *  same answer. `advanced` methods sit inside a disclosure rather than the
   *  main radio group, so the common choices stay uncluttered. */
  methods?: MethodChoice[];
  faqs: FaqItem[];
}

/** One selectable calculation method, rendered as a radio styled like a card. */
export interface MethodChoice {
  /** Value used in the `?method=` query and the component's branch logic. */
  id: string;
  label: string;
  /** One line under the label saying when to pick this one. */
  hint?: string;
  /** Show inside the "Other known dates" disclosure instead of the main group. */
  advanced?: boolean;
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
  /** Label on the telephone action inside an urgent-care panel. */
  callNow: string;
  /** Hub grouping labels and the movement-information link. Present only where
   *  the consolidated four-card directory has shipped for that language. */
  hub?: {
    groupPregnancy: string;
    groupCycle: string;
    groupLab: string;
    infoH: string;
    infoLead: string;
    infoLink: string;
    methodNote: string;
  };
  /** Labels for the shared result chrome on a consolidated calculator. */
  resultUi?: {
    method: string;
    asOf: string;
    limitation: string;
    nextStep: string;
    stale: string;
    copy: string;
    copied: string;
    clinicalH: string;
    advancedH: string;
    asOfH: string;
  };
  /** Field-level validation messages, shared by every calculator. */
  errors: {
    /** A date for something that has already happened cannot be in the future. */
    futureDate: string;
    /** hCG: the later sample must be collected after the earlier one. */
    notLater: string;
  };
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
