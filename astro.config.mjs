// @ts-check
import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import sitemap from '@astrojs/sitemap';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeCallouts from 'rehype-callouts';
import wikiLink from '@flowershow/remark-wiki-link';
import { site } from './src/config.ts';
import { vaultFiles, vaultPermalinks, resolveUrl, rehypeSlugWikiAnchors, attachments } from './src/lib/vault.mjs';

export default defineConfig({
  site: site.url,
  integrations: [sitemap(), attachments()],
  markdown: {
    // remark/rehype pipeline so Obsidian-flavoured markdown renders
    processor: unified({
      remarkPlugins: [
        remarkMath,                                   // $inline$ and $$display$$ LaTeX
        [wikiLink, {                                  // [[links]] and ![[embeds]], resolved against content/
          format: 'shortestPossible',
          files: vaultFiles(),
          permalinks: vaultPermalinks(),
          urlResolver: resolveUrl,
        }],
      ],
      rehypePlugins: [
        rehypeSlugWikiAnchors,
        rehypeKatex,
        [rehypeCallouts, { theme: 'obsidian' }],     // > [!note] callouts
      ],
    }),
    shikiConfig: { themes: { light: 'github-light', dark: 'github-dark-dimmed' } },
  },
});
