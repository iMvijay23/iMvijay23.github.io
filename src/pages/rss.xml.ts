import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { site } from '../config';

export async function GET(context: APIContext) {
  const notes = await getCollection('notes', (n) => !n.data.draft);
  return rss({
    title: `${site.name} · notes`,
    description: site.description,
    site: context.site!,
    items: notes.map((n) => ({
      title: n.data.title,
      pubDate: n.data.date,
      description: n.data.description,
      link: `/notes/${n.id}/`,
    })),
  });
}
