import { defineCollection, z } from "astro:content";

export const collections = {
    actualites: defineCollection({
        schema: z.object({
            title: z.string(),
            date: z.string(),
            excerpt: z.string()
        })
    })
};