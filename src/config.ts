// Site-wide settings. Edit this file for name, links and the menu.
export const site = {
  url: 'https://imvijay23.github.io',
  name: 'Vijay Murari Tiyyala',
  handle: 'vijay',          // shown in the prompt: vijay@bu:~$
  host: 'bu',
  tagline: 'PhD student · Boston University',
  // Hover/tap on this phrase in the tagline shows a (hand-written) logit lens
  lens: {
    phrase: 'interpretability & alignment',
    prompt: 'Vijay works on',
    rows: [
      // [layer, top-1 next token, probability]
      [0, ' the', 0.04],
      [4, ' a', 0.06],
      [8, ' language', 0.11],
      [12, ' models', 0.19],
      [16, ' interpret', 0.37],
      [20, ' interpretability', 0.68],
      [24, ' interpretability', 0.91],
    ] as [number, string, number][],
  },
  description: 'Vijay Murari Tiyyala — PhD student at Boston University working on interpretability of language models.',
  avatar: '/profile.jpg',
  ogImage: '/og.png',       // link-preview card; regenerate with python3 scripts/make-og.py
  // How your name appears in author lists (all variants get bolded)
  selfNames: ['Vijay Murari Tiyyala', 'Vijay M. Tiyyala', 'V. M. Tiyyala', 'Tiyyala VM'],
  links: [
    { label: 'email', href: 'mailto:vtiyyal1@bu.edu', text: 'vtiyyal1@bu.edu' },
    { label: 'github', href: 'https://github.com/iMvijay23' },
    { label: 'scholar', href: 'https://scholar.google.com/citations?user=oVeXfi0AAAAJ' },
    { label: 'linkedin', href: 'https://www.linkedin.com/in/vijaymuraritiyyala/' },
    { label: 'x', href: 'https://x.com/VijayTiyyala' },
    { label: 'orcid', href: 'https://orcid.org/0009-0006-0008-6926' },
    { label: 'soundcloud', href: 'https://soundcloud.com/vijay-murari-tiyyala' },
  ],
  // footer; set text to '' to hide
  nowPlaying: { text: "don't stop believin' — journey", href: 'https://www.youtube.com/watch?v=nrXVYGZewd4' },
  // Fixed menu items. Any page in content/pages with `menu: <number>` is merged in by that number.
  nav: [
    { title: 'about', href: '/', order: 0 },
    { title: 'publications', href: '/publications', order: 1 },
    { title: 'notes', href: '/notes', order: 2 },
    // { title: 'cv', href: '/cv.pdf', order: 9 },  // uncomment once public/cv.pdf is up to date
  ],
};
