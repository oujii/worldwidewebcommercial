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
  }),
});

const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    photo: z.string().optional(),
    instagram: z.string().optional(),
  }),
});

export const collections = { works, pages };
