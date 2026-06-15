# arcsecond-io.github.io

The documentation repository for **Arcsecond.local** — the self-hosted observatory
platform — and its ecosystem.

Structure under `docs/`:

- `local/` — Arcsecond.local: what it is, installation, updates, and self-hosting ops.
- `apps/` — the four apps (Night Studio, Control Room, Data Grand Central, Observatory Headquarters).
- `cli/` — the `arcsecond` command-line tool and Python module.
- `ecosystem/` — developer references (REST APIs, aa-js).

The Oort Uploader still has its documentation integrated into its own repository.

Based on [VitePress](https://vitepress.vuejs.org).

## Development

```bash
npm install
npm run docs:dev      # local dev server on http://localhost:5174
npm run docs:build    # static build into docs/.vitepress/dist
```
