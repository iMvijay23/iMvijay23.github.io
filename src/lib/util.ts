import fs from 'node:fs';
import { getCollection } from 'astro:content';
import { site } from '../config';

/** Tiny inline markdown for one-liners (news): **bold**, *em*, `code`, [text](url). */
export function inlineMd(s: string): string {
  const esc = s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return esc
    .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, '<a href="$2">$1</a>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\*([^*]+)\*/g, '<em>$1</em>')
    .replace(/`([^`]+)`/g, '<code>$1</code>');
}

export const isSelf = (name: string) => site.selfNames.includes(name);

/** Menu = fixed items from config + any page with `menu: n`, sorted by order. */
export async function getNav() {
  const pages = await getCollection('pages', (p) => p.id !== 'home' && p.data.menu !== undefined);
  return [
    ...site.nav,
    ...pages.map((p) => ({ title: p.data.title.toLowerCase(), href: `/${p.id}`, order: p.data.menu! })),
  ].sort((a, b) => a.order - b.order);
}

export async function getPublications() {
  const order = { published: 0, accepted: 0, review: 1, preprint: 1 };
  // keep the order papers are written in publications.yaml (newest first)
  const ids = [...fs.readFileSync('content/publications.yaml', 'utf8').matchAll(/^- id:\s*(\S+)/gm)].map((m) => m[1]);
  const pubs = (await getCollection('publications')).map((p) => ({ id: p.id, ...p.data }));
  return pubs.sort((a, b) => order[a.status] - order[b.status] || ids.indexOf(a.id) - ids.indexOf(b.id));
}

export const fmtDate = (d: Date) => d.toISOString().slice(0, 10);
