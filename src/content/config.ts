import { defineCollection, z } from 'astro:content';

const ImageSchema = z.object({
  image: z.string(),
  alt: z.string().optional(),
});

const works = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    year: z.coerce.number(),
    description: z.string().optional(),
    images: z.array(ImageSchema),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { works };
