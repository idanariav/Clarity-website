# Clarity website

Landing page, docs, pricing, and legal pages for [Clarity](https://github.com/idanariav/Clarity), built with
[Docusaurus](https://docusaurus.io/). Deployed to `clarity.idanariav.com` via GitHub Pages.

## Local development

```bash
npm install
npm start
```

## Build

```bash
npm run build
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and publishes it to the `gh-pages`
branch (see `static/CNAME` for the custom domain). GitHub Pages itself needs to be pointed at the `gh-pages` branch
once, in this repo's Settings → Pages.

## Content

- `docs/` — the user guide, mirrored from `Clarity/docs/user-guide/`. Update there first, then re-copy here.
- `src/pages/index.js` — landing page.
- `src/pages/pricing.js` — pricing (currently the beta/early-bird rates).
- `src/pages/download.js` — download page, links out to the `idanariav/Clarity-releases` GitHub releases.
- `src/pages/terms.md`, `src/pages/refund-policy.md` — legal pages.
