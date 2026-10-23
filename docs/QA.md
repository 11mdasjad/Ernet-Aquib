# Quality assurance report

Verified 24 October 2026 against the final local source using the installed Google Chrome browser, Playwright and axe-core.

| Check | Result |
| --- | --- |
| Route loading | 57 / 57 routes returned HTTP 200 and rendered one main heading |
| Responsive geometry | 57 routes × 8 widths = 456 checks; no horizontal overflow |
| Viewport widths | 320, 375, 430, 768, 1024, 1366, 1440 and 1920 pixels |
| Internal links | No missing route or local file destinations |
| Browser JavaScript errors | None observed |
| Broken loaded images | None observed |
| Service filters | Category, keyword, empty state and reset passed |
| Resource filters | Category, year and pagination passed |
| Project filters | Category and pagination passed |
| Site search | Query results, URL update, empty state and escaped input passed |
| Enquiry form | Required validation, local review, official mailto recipient and draft download passed |
| FAQ | Expand/collapse behavior passed |
| Mobile navigation | Open, close, Escape and route navigation passed |
| Reading preferences | Text size persistence and contrast toggle passed |
| Error handling | Unknown route rendered the 404 page |
| Automated accessibility | Zero violations in the selected WCAG 2 A/AA and 2.1 AA axe rules on 12 representative pages |
| Dependency installation audit | Zero reported vulnerabilities; runtime has no third-party packages |
| Official PDF links | 15 curated PDF URLs returned HTTP 200 and application/pdf during source research |
| Build | 57 route entry files, 404, sitemap, robots and security-header configuration generated successfully |

## Evidence

- `docs/test-results.json`: final automated route, functional and accessibility results.
- `test-results/`: desktop and mobile screenshots available in the local workspace.
- `research/document-link-checks.json`: direct official PDF URL checks.
- `research/reference-screenshots.json`: five official pages captured at desktop and mobile viewport sizes.
- `research/content-implementation-register.json`: per-content source, status and remaining uncertainty.

## Corrections made during QA

Fixed the missing domain enquiry option, adjusted identification and source-note text contrast, added underlines to links within prose, and self-hosted the font files. Corrected the test harness to use an explicit browser context for axe and to recognize local license files as valid internal destinations.

## Verification boundaries

The automated suite tests the public reference implementation, not official external portal transactions. No real email, domain application, payment, tender submission or recruitment application was sent. No manual screen-reader audit or formal government accessibility certification is claimed. All route widths were checked for overflow; screenshots and visual review cover representative pages, not every route at every width. External institutional content can change after the recorded verification date.
