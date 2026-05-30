import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const reports = defineCollection({
  type: 'content_layer',
  loader: glob({
    base: new URL('./content/reports/', import.meta.url),
    pattern: '**/*.mdx',
  }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.string(),
    abstract: z.string(),
    authors: z.array(z.string()),
    chartImage: z.string().optional(),
  }),
});

export const collections = {
  reports,
};