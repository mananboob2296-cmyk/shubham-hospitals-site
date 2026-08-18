import type { CalcLangPack, CalcSlug, CalcCopy } from './types';
import { shared } from './mr/shared';
import { part as a } from './mr/part-a';
import { part as b } from './mr/part-b';
import { part as c } from './mr/part-c';

// Marathi copy is split across mr/part-*.ts purely to keep each file a
// reviewable size; the shape is identical to en.ts and hi.ts.
export const mr: CalcLangPack = {
  shared,
  calculators: { ...a, ...b, ...c } as Record<CalcSlug, CalcCopy>,
};
