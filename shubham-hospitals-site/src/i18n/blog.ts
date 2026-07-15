import type { Lang } from './ui';
import type { Block } from './treatments';

// Contextual hi/mr translations of the blog posts.
// Each batch lives in ./blog/*.ts and is auto-discovered here via import.meta.glob,
// so adding a new batch file needs NO change to the routes.

export interface BlogEntry {
  title: string;
  date: string;        // ISO yyyy-mm-dd (English publish date)
  author: string;      // localized author name
  excerpt: string;
  image?: string;
  imageAlt?: string;
  blocks: Block[];     // full article body (headings + paragraphs, closing CTA)
  faqs?: { q: string; a: string }[];
}

export type BlogTL = Record<string, BlogEntry>;

const modules = import.meta.glob('./blog/*.ts', { eager: true }) as Record<
  string,
  { blogBatch?: Partial<Record<Lang, BlogTL>> }
>;

function collect(lang: Lang): BlogTL {
  const out: BlogTL = {};
  for (const m of Object.values(modules)) {
    const batch = m.blogBatch?.[lang];
    if (batch) Object.assign(out, batch);
  }
  return out;
}

export const blogContent: Partial<Record<Lang, BlogTL>> = {
  hi: collect('hi'),
  mr: collect('mr'),
};
