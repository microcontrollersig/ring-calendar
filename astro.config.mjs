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
					label: 'Previous designs',
					items: [
						{ label: 'Automated Perpetual Calendar', slug: 'previous-designs/tomaskins' },
						{ label: 'Cryptic Calendar', slug: 'previous-designs/cryptic-calendar' },
						{ label: '3D Printed Calendar', slug: 'previous-designs/3d-calendar' },
					],
				},
				{
					label: 'Brainstorming',
					items: [
						{ label: 'Initial ideas', slug: 'brainstorming/ideas' },
					],
				},
			],
			tableOfContents: false,
		}),
	],
});
