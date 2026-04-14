import { defineCollection, z } from 'astro:content';

const works = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    year: z.number(),
    description: z.string().optional(),
    images: z.array(z.object({
      image: z.string(),
      alt: z.string().optional(),
    })),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { works };
