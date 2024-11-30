// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import mdx from '@astrojs/mdx';

import netlify from '@astrojs/netlify';

export default defineConfig({
  integrations: [tailwind(), icon(), mdx()],
  output: 'server',
  adapter: netlify()
});