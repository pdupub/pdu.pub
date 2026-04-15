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
					label: 'Introduction',
					link: '/content/docs/index',
				},
				{
					label: 'Philosophy',
					autogenerate: { directory: 'philosophy' },
				},
				{
					label: 'Protocol',
					autogenerate: { directory: 'protocol' },
				},
				{
					label: 'Whitepapers',
					items: [
						{ label: 'Whitepaper V5', link: '/whitepapers/v5' },
					],
				},
			],
		}),
	],
});