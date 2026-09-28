import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

// content/pages/*.md → /<file-name>   (home.md → /)
const pages = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './content/pages' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    menu: z.number().optional(), // position in the top menu; omit to keep the page out of it
  }),
});

// content/notes/*.md → /notes/<file-name>
const notes = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './content/notes' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const publications = defineCollection({
  loader: file('./content/publications.yaml'),
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    venue: z.string(),              // full venue name
    short: z.string(),              // tag shown as [short]
    year: z.number(),
    status: z.enum(['published', 'accepted', 'review', 'preprint']).default('published'),
    selected: z.boolean().default(false),
    equal: z.array(z.string()).default([]), // authors with equal contribution
    links: z.record(z.string(), z.string()).default({}), // label → url
    note: z.string().optional(),
  }),
});

const news = defineCollection({
  loader: file('./content/news.yaml'),
  schema: z.object({
    date: z.string(), // "2026-07" or "2026-07-27"
    text: z.string(), // markdown allowed: **bold**, [links](...)
  }),
});

// content/press.yaml → press cards on / and /press
const press = defineCollection({
  loader: file('./content/press.yaml'),
  schema: z.object({
    date: z.string(),               // "2026-04"
    pub: z.string(),                // publication id
    headline: z.string(),
    quote: z.string().optional(),
    outlets: z.array(z.object({ name: z.string(), url: z.string() })).min(1), // first = lead
  }),
});

// The steering playground on the home page (hand-written, illustrative outputs)
const steering = defineCollection({
  loader: file('./content/steering.yaml'),
  schema: z.object({
    label: z.string(),
    layer: z.number(),
    prompt: z.string(),
    outputs: z.array(z.string()).length(5), // α = -4, -2, 0, +2, +4
  }),
});

export const collections = { pages, notes, publications, news, press, steering };
