import { glob } from "astro/loaders";
import { z, defineCollection } from "astro:content";

const blog = defineCollection({
    loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/blog" }),
    schema: z.object({
      title: z.string(),
      pubDate: z.date(),
      image: z.object({
        url: z.string(),
        alt: z.string(),
        attributionText: z.string(),
        attributionLink: z.string()
      }).optional(),
      categories: z.array(z.string()),
      tags: z.array(z.string()),
      series: z.string()
    })
});

const pages = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/pages" }),
  schema: z.object({
    title: z.string()
  })
})

export const collections = { blog, pages };