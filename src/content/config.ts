import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
    tags: z.array(z.string()).default([]),
    category: z.string().optional(),
    draft: z.boolean().default(false),
    cover: z.string().optional(), // relative path to image
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    image: z.string(),
    gallery: z.array(z.string()).optional(),
    tags: z.array(z.string()).default([]),
    links: z.array(z.object({
      icon: z.string(),
      href: z.string(),
    })).default([]),
    icon: z.string(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, projects };
