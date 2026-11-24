# arcsecond-io.github.io

The documentation repository for **Arcsecond.local** — the self-hosted observatory
platform — and its ecosystem.

Structure under `docs/`:

- `start/` — installing Arcsecond.local.
- `guides/` — operating it, observing with it (the four apps and their tools), data, team.
- `reference/` — the `arcsecond` tool, the installation files, the interfaces. Mostly generated.

The screenshots of the app pages come from the sibling repositories `arcsecond-homes` (which shots, which captions) and
`arcsecond-screenshots` (the newest version of each, older images otherwise). Refresh them, then commit, with:

```bash
npm run screenshots
```

Based on [VitePress](https://vitepress.vuejs.org).

## Development

```bash
npm install
npm run docs:dev      # local dev server on http://localhost:5174
npm run docs:build    # static build into docs/.vitepress/dist
```
