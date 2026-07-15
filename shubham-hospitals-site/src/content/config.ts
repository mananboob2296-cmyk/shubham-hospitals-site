import { defineCollection, z } from 'astro:content';

const faq = z.object({ q: z.string(), a: z.string() });

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    author: z.string(),
    excerpt: z.string(),
    lang: z.enum(['en', 'hi', 'mr']).optional(), // informational; the folder (en/ hi/ mr/) is authoritative
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    faqs: z.array(faq).default([]), // rendered as an FAQ section + FAQPage schema on hi/mr posts
  }),
});

const treatments = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    metaTitle: z.string(),
    metaDescription: z.string(),
    order: z.number(),
    excerpt: z.string(),
    faqs: z.array(faq).default([]),
  }),
});

const doctors = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    qualifications: z.string(),
    role: z.string(),
    photo: z.string(),
    order: z.number(),
    metaTitle: z.string(),
    metaDescription: z.string(),
    expertise: z.array(z.string()).default([]),
    honors: z.array(z.string()).default([]),
    youtube: z.string().optional(),
  }),
});

const landing = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    metaTitle: z.string(),
    metaDescription: z.string(),
    ogTitle: z.string().optional(),
    ogDescription: z.string().optional(),
    focusKeyword: z.string().optional(),
    heroImage: z.string().optional(),
    heroImageAlt: z.string().optional(),
    ctaTreatment: z.string().optional(),
    ctaTreatmentLabel: z.string().optional(),
    stats: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
    whyChoose: z.array(z.string()).default([]),
    faqs: z.array(faq).default([]),
  }),
});

export const collections = { blog, treatments, doctors, landing };
