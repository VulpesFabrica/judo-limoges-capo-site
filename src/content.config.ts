import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const actualites = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        date: z.coerce.date(),
        excerpt: z.string(),
        image: z.string().optional(),
        featured: z.boolean().default(false)
    })
});

export const collections = {
    actualites
};