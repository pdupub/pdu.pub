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
			description: 'A peer-to-peer social networking service shaped by ordered identity, local trust, and public transparency.',
			customCss: ['./src/styles/pdu-theme.css'],

			components: {
				Footer: './src/components/Footer.astro',
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/pdupub' }],

			sidebar: [
				{
					label: 'Home',
					link: '/',
				},
				{
					label: 'Whitepapers',
					items: [
						{ label: 'Overview', link: '/whitepapers/' },
						{ label: 'PDU Protocol', link: '/whitepapers/v5' },
						{ label: 'Slide of PDU', slug: 'whitepapers/slide',},

					],
				},
				{
					label: 'Protocol',
					autogenerate: { directory: 'protocol' },
				},
				{
					label: 'Matrix',
					autogenerate: { directory: 'matrix' },
				},
				{
					label: 'Philosophy',
					autogenerate: { directory: 'philosophy' },
				},
			],
		}),
	],
});
