// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://microcontrollersig.github.io',
	base: 'ring-calendar',
	image: {
		service: passthroughImageService()
	},

	integrations: [
		starlight({
			title: 'Ring calendar',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/microcontrollersig/ring-calendar' },
				{ icon: 'pencil', label: 'GitHub', href: 'https://github.com/microcontrollersig/ring-calendar/content/docs/' },
			],
			sidebar: [
				{
					label: 'Introduction',
					link: '/',
				},
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
			tableOfContents: false,
		}),
	],
});
