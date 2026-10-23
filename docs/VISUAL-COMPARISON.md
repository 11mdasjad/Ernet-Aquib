# Visual comparison and reference decisions

Checked 24 October 2026.

## Two supplied references

The supplied composite image shows a modern English blue-and-white government-style site, a Delhi architecture hero, feature strips, image service cards, institutional links, news, and multiple interior layouts. The accessible exact reference URL is a materially different Hindi Drupal site with a cyan/blue gradient navigation, bilingual ERNET logo, campaign slideshow, left-side home section tabs, notice list and related-link carousel.

The implementation uses the supplied image’s visual composition and the official site’s verified information architecture and factual content. It does not claim pixel-perfect replication of the live Drupal website. Official images were not republished without permission. Independently typeset identification and licensed photographs are used.

## Reference evidence

`research/reference-screenshots.json` records actual browser responses and captures for home, About, services, contact and registry. All five returned HTTP 200. Each was captured at 1440×1000 and 375×900 viewport sizes, with full-page output in `research/screenshots/`. The original user image was reviewed in conversation; it was not represented as a newly captured official screenshot.

The crawl and source audit cover many more content pages, but screenshots were not captured for all 170 inspected URLs. Authenticated portal interfaces were not inspected.

## Reproduced visual elements

- Three-part institutional masthead with centered ERNET identification and a right search field.
- Navy primary navigation and blue active state.
- Architectural Delhi hero with a left reading gradient, blue heading, tricolour accent and two actions.
- Four-column benefit strip and dark-blue institutional summary band.
- Four image service cards on desktop, two on mobile.
- Academic-community links, project feature, notices, documents and a multi-column navy footer.
- Interior pale-blue title areas, breadcrumbs, pill filters, bordered service cards, readable document lists and contact panels.
- Mobile navigation, reflowing content grids and single-column forms.

## Intentional factual differences

The ministry is MeitY. Unverified sample uptime, backbone bandwidth, client counts, partner logos, connectivity pricing and fictional account balances were removed. The national network is described with a clearly labeled conceptual diagram rather than an invented physical route map. The institutional portal screen links to real services instead of copying an unconnected login or dashboard.

## Local verification evidence

`test-results/` contains local screenshots and the machine-readable test report. Desktop home and mobile home were visually inspected. Additional interior screenshots are generated for service, About, network, projects, resources, news, contact, portal, policy and event pages. Responsive geometry checks cover all routes at 320, 375, 430, 768, 1024, 1366, 1440 and 1920 pixels.

No automated image-difference score is reported because the official live design and supplied target image differ, and an exact common source composition is unavailable.
