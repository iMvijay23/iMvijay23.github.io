# imvijay23.github.io

My personal site. Built with [Astro](https://astro.build) and deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `master`.

## Everything you edit lives in `content/`

Open `content/` as an Obsidian vault and write normally. Math (`$…$`, `$$…$$`), `[[wikilinks]]`, `![[image.png]]` embeds, `> [!note]` callouts and code blocks all render.

| I want to…              | Do this                                                                                     |
| ----------------------- | ------------------------------------------------------------------------------------------- |
| add a page              | create `content/pages/<name>.md` with `title:`. It goes live at `/<name>`                   |
| put a page in the menu  | add `menu: <number>` to its frontmatter (about = 0, publications = 1, notes = 2)            |
| write a note / post     | create `content/notes/<name>.md` with `title:` and `date:`. Add `draft: true` to hide it   |
| add a paper             | copy a block in `content/publications.yaml`. `selected: true` also shows it on the home page |
| add news                | add a line at the top of `content/news.yaml`                                                |
| add an image            | drop it into `content/attachments/` and write `![[name.png]]`                               |
| edit the home page text | `content/pages/home.md`                                                                     |
| edit the steering demo  | `content/steering.yaml` (5 outputs per concept for α = −4…+4; `{word}` = highlighted token)  |
| visitor map             | `src/components/VisitorMap.astro` (MapMyVisitors token; stats carry over from the old site) |
| edit the logit lens / now playing | `lens` and `nowPlaying` in `src/config.ts`                                        |

Name, tagline, social links and the fixed menu items are in `src/config.ts`. The photo is `public/profile.jpg` and the CV is `public/cv.pdf` (link it from the menu in `src/config.ts`).

## Run locally

```sh
nvm use          # Node 22 (see .nvmrc)
npm install
npm run dev      # http://localhost:4321
```
