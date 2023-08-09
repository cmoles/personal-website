import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function get() {
	return rss({
		title: 'Chris Moles | Blog',
		description: 'My journey learning Astro',
		site: 'https://chris-moles.netlify.app',
		items: await pagesGlobToRssItems(import.meta.glob('./posts/*.md')),
		customData: `<language>en-us</language>`,
	});
}
