import { defineCollection, z } from 'astro:content';

const ai = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		draft: z.boolean().optional(),
		// Transform string to Date object
		pubDate: z
			.string()
			.or(z.date())
			.transform((val) => typeof val === 'string'
				? new Date(val+'PST')
				: new Date(val)),
		updatedDate: z
			.string()
			.optional()
			.transform((str) => (str ? new Date(str+'PST') : undefined)),
		heroImage: z.string().optional(),
		tags: z.array(z.string()).optional(),
	}),
});

const blog = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		draft: z.boolean().optional(),
		// Transform string to Date object
		pubDate: z
			.string()
			.or(z.date())
			.transform((val) => typeof val === 'string'
				? new Date(val+'PST')
				: new Date(val)),
		updatedDate: z
			.string()
			.optional()
			.transform((str) => (str ? new Date(str+'PST') : undefined)),
		heroImage: z.string().optional(),
		tags: z.array(z.string()).optional(),
	}),
});

const games = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		cart: z.string(),
		// Transform string to Date object
		pubDate: z
			.string()
			.or(z.date())
			.transform((val) => typeof val === 'string'
				? new Date(val+'PST')
				: new Date(val)),
		updatedDate: z
			.string()
			.optional()
			.transform((str) => (str ? new Date(str+'PST') : undefined)),
		placeholder: z.string().optional(),
		link: z.string().optional(),
	}),
});

const web = defineCollection({
	schema: z.object({	
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z
			.string()
			.or(z.date())
			.transform((val) => typeof val === 'string'
				? new Date(val+'PST')
				: new Date(val)),
		updatedDate: z
			.string()
			.optional()
			.transform((str) => (str ? new Date(str+'PST') : undefined)),
	}),
});

export const collections = { ai, blog, games, web };
