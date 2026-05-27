import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    tag: z.enum(['toast', '24h', 'terrace', 'coffee', 'bar']),
    coverImage: z.string(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
