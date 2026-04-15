// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({

  site: 'https://pdu.pub', // 临时测试用 github.io 地址也行
  base: '/',
  	// output: 'static',
	integrations: [
		starlight({
			title: 'ParaDigi University',
			description: 'Philosophical Path of MiniMeta',

			components: {},

			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/pdupub' }],
			sidebar: [
				{
					label: 'WhitePapers',
					// autogenerate: { directory: 'whitepapers' },
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Version 5', slug: 'whitepapers/whitepaperv5' },
					],
				},
				// {
				// 	label: 'Reference',
				// 	autogenerate: { directory: 'reference' },
				// },
			],
		}),
	],
});
