import type { CalcLangPack, CalcSlug, CalcCopy } from './types';
import { shared } from './mr/shared';
import { part as a } from './mr/ovulation';
import { part as b } from './mr/due-date';
import { part as c } from './mr/ivf';
import { part as d } from './mr/period';
import { part as e } from './mr/preg-week';
import { part as f } from './mr/weight';
import { part as g } from './mr/part-c';

// Marathi copy is split across mr/*.ts purely to keep each file a reviewable
// size; the shape is identical to en.ts and hi.ts.
export const mr: CalcLangPack = {
  shared,
  calculators: { ...a, ...b, ...c, ...d, ...e, ...f, ...g } as Record<CalcSlug, CalcCopy>,
};
