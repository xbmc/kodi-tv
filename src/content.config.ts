import { defineCollection, z } from "astro:content";
import { file, glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/content/article" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).optional().nullable(),
    author: z.string().optional(),
    featured_image: z
      .object({
        src: z.string(),
        title: z.string().optional().default(""),
        alt: z.string().optional().default(""),
      })
      .optional()
      .nullable(),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/content/pages" }),
  schema: z.object({
    title: z.string(),
    breadcrumbs: z.string().optional(),
    description: z.string().optional(),
  }),
});

const omegaAddons = defineCollection({
  loader: file("src/data/addons/omega/addons.json"),
  schema: z.object({
    id: z.string(),
    addonid: z.string(),
    name: z.string(),
    slug: z.string(),
    version: z.string(),
    authors: z.array(z.any()),
    platforms: z.array(z.any()),
    categories: z.array(z.any()),
    firstseen: z.string().optional(),
    agetype: z.string().optional(),
    license: z.string().optional(),
    source: z.string().optional(),
    icons: z.array(z.any()).optional(),
    screenshots: z.array(z.any()).optional().nullable(),
    banners: z.array(z.any()).optional().nullable(),
    clearlogos: z.array(z.any()).optional().nullable(),
    fanarts: z.array(z.any()).optional().nullable(),
    thumbs: z.array(z.any()).optional().nullable(),
    summary: z.string().optional().nullable(),
    description: z.string().optional().nullable(),
    disclaimer: z.string().optional().nullable(),
    size: z.string().optional(),
    lastupdate: z.string().optional(),
    downloads: z.number().optional(),
    icon: z.string().optional(),
    snippet: z.string().optional().nullable(),
    featured: z.string().optional(),
    forum: z.string().optional(),
    website: z.string().optional(),
    news: z.string().optional().nullable(),
    prevyeardl: z.number().optional(),
  }).passthrough(),
});

const omegaAuthors = defineCollection({
  loader: file("src/data/addons/omega/authors.json", {
    generateId: ({ data }) =>
      data.slug || data.id || `author-${Math.random().toString(36).slice(2)}`,
  }),
  schema: z.object({
    id: z.string().optional().default(""),
    name: z.string(),
    slug: z.string(),
    icon: z.string().optional(),
    addons: z.array(z.any()).optional(),
    totaladdons: z.number().optional(),
    totaldownloads: z.number().optional(),
  }),
});

const omegaCategories = defineCollection({
  loader: file("src/data/addons/omega/categories.json"),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    slug: z.string(),
    icon: z.string().optional(),
    grouping: z.string().optional(),
    addons: z.array(z.any()).optional(),
    totaladdons: z.number().optional(),
    totaldownloads: z.number().optional(),
  }),
});

const distributions = defineCollection({
  loader: glob({ pattern: "*.yaml", base: "src/data/yaml/distribution" }),
  schema: z.object({
    name: z.string(),
    icon: z.string(),
    version: z.number().optional(),
    sort_order: z.number().optional(),
    howto: z.string().optional(),
    releases: z
      .array(
        z.object({
          name: z.string(),
          title: z.string(),
          description: z.string().optional(),
          downloads: z
            .array(
              z.object({
                name: z.string(),
                url: z.string(),
              }),
            )
            .optional(),
        }),
      )
      .optional(),
  }),
});

const sponsors = defineCollection({
  loader: glob({ pattern: "*.yaml", base: "src/data/yaml/sponsor" }),
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    sponsor_type: z.enum(["Financial", "Infrastructure"]),
    sort_order: z.number().optional(),
    image: z.object({
      src: z.string(),
      title: z.string(),
      alt: z.string(),
    }),
    body: z.string(),
  }),
});

const store = defineCollection({
  loader: glob({ pattern: "*.yaml", base: "src/data/yaml/store" }),
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    icon: z.string(),
    group_number: z.number().optional(),
  }),
});

const stats = defineCollection({
  loader: glob({ pattern: "*.yaml", base: "src/data/yaml/stats" }),
  schema: z.object({
    gitcommits: z.string(),
    forumthreads: z.string(),
    addons: z.string(),
  }),
});

export const collections = {
  blog,
  pages,
  omegaAddons,
  omegaAuthors,
  omegaCategories,
  distributions,
  sponsors,
  store,
  stats,
};
