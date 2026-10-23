# ERNET India — independent reference website

A responsive, source-backed implementation of the supplied ERNET India website brief and visual reference. This is an independent replica, not an official government service. Institutional facts follow verified official sources; the blue-and-white visual composition follows the supplied image.

## Run locally

Requires Node.js 22 or later. No runtime packages, database or secrets are required.

```sh
npm ci
npm run build
npm run dev
```

Open http://127.0.0.1:4173. Stop with Ctrl+C. To use another port: `PORT=4174 npm run dev`.

## What is implemented

- 57 static routes plus a 404 page, with shared navigation, breadcrumbs, search and footer.
- 15 detailed service pages: domain registration, DNS, WaaS, LMaaS, terrestrial/satellite connectivity, campus networking, eduroam, hosting/email, consultancy, IPv6, smart classrooms, training, collaboration, research and institutional infrastructure.
- About, history, objectives, governance, centres, Citizen’s Charter and Acts & Rules.
- 12 documented projects with individual detail pages, published status and source links.
- News/notices, tender and recruitment collections with official documents and historical closing-date labels.
- 15 curated official PDF resources with category, year, keyword filtering and pagination.
- Service and project filters, site-wide search, mobile navigation, FAQ accordions, text size and high-contrast controls.
- Validated contact form that prepares an email draft and supports downloading it. It does not send or store enquiries.
- Official service portal links; no replica login or payment collection.

## Source structure

- `dist/app.js`: shared page rendering and browser interactions.
- `dist/data.js`: presentation metadata, service definitions and primary navigation.
- `dist/verified.js`: generated factual content from the research register.
- `dist/style.css`, `dist/icons.js`: responsive design and local SVG icons.
- `dist/assets/`: licensed photographs and attribution register.
- `research/clean-content.json`: editable verified institutional content.
- `research/institutional.json`: institutional pages and source links.
- `research/source-map.json`: verified official page URLs.
- `scripts/prepare-content.mjs`: creates browser content data.
- `scripts/build.mjs`: creates route entry files, metadata, sitemap, robots and headers.
- `scripts/serve.mjs`: local-only static preview server.
- `tests/`: functional, responsive, accessibility and reference-capture scripts.

Run `npm run build` after changing research data or routes. Deploy only `dist/`, preserving paths and the 404 handler. The source repository includes `research/` for traceability; official reference-only artwork is not in `dist/`.

## Verification

```sh
# Start npm run dev in another terminal first
npm test
```

The test suite uses the installed Google Chrome app on macOS. Set `CHROME_PATH` to a Chromium executable on other systems and `TEST_ORIGIN` to another local preview origin if needed. Development dependencies are Playwright and axe-core; they are not served to users.

See [QA report](docs/QA.md), [visual comparison](docs/VISUAL-COMPARISON.md), [source audit](research/OFFICIAL-SOURCE-AUDIT.md), [route inventory](research/route-inventory.json), and [integration requirements](docs/INTEGRATIONS.md).

## Content and media

Information was verified on **24 October 2026**. Date-specific notices are a snapshot, not a live feed. Official guidelines, invoices and notices take precedence. The registry’s August 2025 guidelines were preferred over older download checklists. Conflicting tariff pages are documented in the source audit.

All institutional copy is an authored factual summary. Official emblems, restricted artwork and certification badges are not reproduced. The ERNET name is independently typeset. Licensed photography is illustrative; it does not imply that depicted facilities or students belong to ERNET. Detailed credits are in `research/assets.json` and the website Policies & Credits page.

## Publication

The Site is private. `.openai/hosting.json` retains its Site identity and declares `dist` as the static directory. Robots deliberately disallow indexing and pages use `noindex,nofollow` to distinguish the replica from the official site. To deploy under a different hostname, update the origin in `scripts/build.mjs` and rebuild.
