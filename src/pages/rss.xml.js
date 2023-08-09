import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function get() {
	const blog = await getCollection('blog');
	return rss({
		title: 'Chris Moles | Blog',
		description: 'My wonderful, personal website.',
		site: 'https://chris-moles.netlify.app',
		items: blog.map((post) => ({
			title: post.data.title,
			pubDate: post.data.pubDate,
			description: post.data.description,
			url: `https://chris-moles.netlify.app/blog/${post.slug}`,
			link: `/blog/${post.slug}`,
		})),
		customData: `<language>en-us</language>`,
	});
}
