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

## ERNET logo correction verification

The shared header and footer now use the original 300×132 ERNET PNG. A targeted browser check verified both images load, preserve their original aspect ratio, and replace the manually typeset logo. The homepage fits all eight requested viewport widths. Generated HTML includes content-versioned JavaScript and CSS URLs. Header, footer and mobile screenshots are in `test-results/official-logo-*.png`. The existing Safari localhost tab was navigated to the updated page. This targeted check does not represent a new full-suite run.

## Top strip removal

Removed the entire visible utility strip from the shared header. Reading preference controls are available on the Accessibility page, and the keyboard skip link remains available on focus. Updated the preference test to use that page. Re-ran the complete suite: 57 routes, eight viewport widths, nine functional groups, and zero automated accessibility violations on the 12 representative pages. The local Safari tab was refreshed to the current version.

## Header search removal

Removed the header search form and its event listener. Kept the desktop ERNET logo centered and checked all eight viewport widths. Verified homepage, services, contact and standalone search render without browser errors, and checked mobile menu opening and Escape closing. Captured desktop and mobile header screenshots in `test-results/no-header-search-*.png`. This was a targeted regression check.

### Header alignment — 2026-10-24
Moved ERNET artwork to the left and the government emblem/ministry block to the right edge of the shared header container. Rebuilt all routes and checked JavaScript syntax. A focused Chrome check passed at 320, 375, 430, 768, 1024, 1366, 1440 and 1920px: correct alignment, no horizontal overflow and no browser errors. Mobile navigation was exercised at 375px; desktop and mobile header screenshots captured for visual review.

### Domain registration workspace — 24 October 2026

Implemented `/domain-registration` and connected the existing service-portal card. Verified official requirements and documented source/schema boundaries in `research/DOMAIN-SOURCES.md` and `docs/DOMAIN-REGISTRATION.md`.

- `npm run build`: 58 routes plus the 404 page.
- `npm run test:domain`: passed. ASCII and IDN prechecks, file-size boundaries, renamed/empty/non-PDF rejection, step gating, preliminary eligibility refusal, DNS hostname/duplicate checks, three-document government-school path and ten-document conditional research/translation/parent-GST path.
- Full preparation journey: institution contacts, remove/replace files, review escaping, mandatory unchecked declarations, explicit JSON download, official handoff URL and tracking link. Re-selecting a category invalidates later steps and files. No official steps marked complete.
- Responsive checks: all seven workflow screens at 320, 375, 430, 768, 1024, 1366 and 1440 px, 49 combinations, no horizontal overflow.
- Axe: all seven workflow screens passed WCAG 2 A/AA and 2.1 AA automated checks after correcting breadcrumb contrast and an inline support link.
- Existing `npm test`: all 58 routes × eight widths passed; nine existing functional checks and existing accessibility suite passed with zero violations.
- Browser errors: none. Application/file network submissions: none. Private preparation details did not appear in localStorage; refresh cleared the draft.
- Desktop initial, focused review and mobile viewport screenshots inspected. A full-page capture during viewport changes produced a stitching artifact; focused reduced-motion screenshots confirmed a single shared header and correct review layout. Test capture context now uses reduced motion.

Official public sources and destinations were inspected. The test stubs the external handoff page; actual ERNET availability, registration, authenticated tracking, payments, approval and DNS actions were not executed or claimed. PDF checks are local signature/size checks, not server validation or malware scanning. No backend exists in this documented preparation mode.

### Service Portals visual update — 24 October 2026

Reworked `/portals` to follow the supplied compact service-directory reference: illustrated institutional banner, four service cards with category labels and secondary guidance links, a help strip, active Service Portals navigation and a compact footer. Retained the existing official logo, ERNET-left/ministry-right arrangement, removed header utility/search controls, verified contact information and local registration preparation route. All page-specific header/footer changes are scoped to `.portal-view`.

Build and JavaScript syntax checks passed. Focused browser verification covered 320, 375, 430, 768, 1024, 1366, 1440 and 1586px without horizontal overflow. Every internal portal-page link returned HTTP 200. The Domain Registration card opened the existing preparation workflow and page-specific portal styling cleared on navigation. Desktop axe checks reported zero WCAG A/AA violations; no browser errors occurred. Desktop/mobile screenshots were visually inspected. The full registration suite was not rerun because its form implementation did not change.

### News & Events visual update — 24 October 2026

Updated `/news` to match the supplied notice-directory composition: illustrated blue institutional banner with tricolour accents, category tabs, search control, snapshot information strip, bordered notice cards, category icons, dates and document links. The existing verified notice dataset remains the content source; the reference image's example event was not inserted as an unsupported record. Styling is scoped to `.news-view` and the news directory. Careers/tenders collections retain their existing layouts.

Build, syntax and whitespace checks passed. Focused Chrome QA covered 320, 375, 430, 768, 1024, 1366, 1440 and 1536px without horizontal overflow. Careers/Tender filters, search, no-results state, Events empty state and reset worked. All notice-detail links returned 200 and the first card opened its official-documents section. Separate careers/tenders pages still displayed both relevant records. Desktop axe reported zero WCAG A/AA violations; browser errors were absent. Desktop/mobile screenshots were visually inspected.

### Tenders & Procurement visual update — 24 October 2026

Updated `/tenders` from the supplied reference: compact institutional banner, bordered tender cards with date/status badges, search, sidebar status/year form, Apply/Reset controls, procurement-guidance dialog and quick links. The existing verified notice dataset and official-document destinations remain the content source. The year list comes from actual records. Status is the published snapshot status, not a live procurement decision.

The Corrigenda & Amendments link filters notices with documented amendment/extension files and provides a clear-filter action. Procurement Guidelines opens guidance with the original tender-document links. The new GeM homepage destination was verified at https://gem.gov.in/. No bids, account actions or procurement submissions were made. Contact enquiries use the existing contact page.

Build, syntax and whitespace checks passed. Focused Chrome QA passed at 320, 375, 430, 768, 1024, 1366, 1440 and 1536px without overflow. Verified pending sidebar choices apply only on Apply, status-tab synchronization, year selection, reference-number search, empty results/reset, amendment subset/clear, dialog Escape/focus restoration, internal HTTP 200 links and tender-detail navigation. News category filters and the Service Portals route were regression-checked. Page and open-dialog axe checks returned zero WCAG A/AA violations; no browser errors. Desktop/mobile screenshots were visually inspected. Compact footer rules are shared with the existing portals layout; other layouts remain scoped.

### Contact Us visual update — 24 October 2026

Updated `/contact` from the supplied reference with an illustrated banner, two-column enquiry/head-office layout, input icons, required institutional details, a 1,000-character message counter, directions card and other contact information. Kept verified Shastri Park contact details. Hours are explicitly labelled as domain-helpdesk hours; no unverified general-office hours were added. The map graphic is labelled a location illustration and opens the real Google Maps search destination.

The existing explicit draft/review/email-app/download flow remains. The UI does not claim direct submission. Editing a field now clears an outdated preview so an old message cannot be mistaken for the updated draft. The institution field is required in the redesigned form.

Build, syntax and whitespace checks passed. Chrome checked 320, 375, 430, 768, 1024, 1366, 1440 and 1536px without overflow. Tested missing fields, invalid email, safe text escaping, message counter, all six enquiry recipient mappings, download contents, stale-preview clearing and refresh clearing. No enquiry network submissions occurred. Initial and draft-preview axe checks returned zero WCAG A/AA violations; no browser errors. Directions URL and regional-centre route were verified. Clean desktop/mobile screenshots were inspected separately from accessibility-test focus states.

### Homepage key services visual update — 24 October 2026

Replaced the existing generic homepage services section with the supplied four-card composition: centred label/title/subtitle, pale architectural backdrop, globe and tricolour decoration, satellite/server/education/campus photographs, overlapping circular icons and a prominent Explore all services button. Existing credited photographs and service-detail destinations are retained; the campus card now uses the existing campus photograph. Each card has one descriptive, keyboard-accessible link. Styles are scoped to the new section and respect reduced-motion preferences.

Build, JavaScript syntax and whitespace checks passed. Focused Chrome verification covered 320, 375, 430, 768, 1024, 1366, 1440 and 1920px without horizontal overflow, with the expected one/two/four-column layouts. All four images decoded successfully; all five service links returned HTTP 200 and the connectivity link navigated correctly. Section axe WCAG A/AA checks returned zero violations and no browser errors occurred. Desktop/mobile section screenshots were visually inspected.
