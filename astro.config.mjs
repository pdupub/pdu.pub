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
			title: 'ParaDigi Universe',
			description: 'A peer-to-peer social network shaped by ordered identity, local trust, and public transparency.',

			components: {},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/pdupub' }],

			sidebar: [
				{
					label: 'Home',
					link: '/',
				},
				{
					label: 'Whitepapers',
					items: [
						{ label: 'Whitepaper Overview', link: '/whitepapers/' },
						{ label: 'Whitepaper V5', link: '/whitepapers/v5' },
					],
				},
				{
					label: 'Protocol',
					autogenerate: { directory: 'protocol' },
				},
				{
					label: 'Philosophy',
					autogenerate: { directory: 'philosophy' },
				},
			],
		}),
	],
});
