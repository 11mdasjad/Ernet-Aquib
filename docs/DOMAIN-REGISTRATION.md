# Domain registration preparation workspace

## Run and navigate

Requires Node.js 22+. From the project root:

```sh
npm ci
npm run build
npm run dev
```

Open `http://127.0.0.1:4173/domain-registration`. The Domain Registration card on `/portals` now opens this route; the service detail page also links to it. Existing document-based routing is retained. The shared header keeps ERNET left and the ministry block right.

## Implemented flow

1. Read category requirements, select one of eight verified categories, answer the preliminary eligibility questions.
2. Check domain format, acknowledge institutional naming restrictions, open official live availability search.
3. Prepare institutional and head/admin/technical/billing contacts; choose DNS and applicable document conditions.
4. Select required PDFs for browser-local size, MIME, signature and EOF checks. Remove/replace files as needed. Maximum 2 MB per document. Government-school, research, translation and parent-GST variants are conditional.
5. Review all sections and explicitly acknowledge the preparation declarations. Edit actions invalidate subsequent checks when data changes.
6. Download a preparation JSON file if desired, then open the verified official portal to complete actual registration. Draft data/files are not automatically transferred.
7. Open the official login for actual status and corrections. Neither official submission nor tracking is marked completed by this frontend.

FAQ search, category search, keyboard-operable dialogs/accordions, official support, renewal guidance, tariff and DNS guide links are included. The progress indicator only completes validated local preparation steps. It never marks submission or approval complete.

## Privacy and security boundary

The application is static and has no submission endpoint. Form values and file metadata exist only in page memory. Document bytes are read locally for basic validation, never uploaded, retained in persistent storage or rendered as PDF content. Refreshing/leaving clears the draft. Explicit draft download includes entered contact data and file names, but excludes PDF contents. Users control the resulting local download; clearing the page cannot delete a downloaded copy.

PDF marker checks are not malware scanning, authenticity validation or a complete PDF parser. They are a convenience for local preparation only. No claim of secure server upload/storage is made because those functions do not exist. No third-party document service, analytics, authentication, database or payment library is used. Browser CSP disallows inline scripts and third-party connections; all dynamic user strings are escaped or rendered with textContent.

The backend, authorization, rate limits, server-side validation, CSRF, signed file downloads, audit/retention and payment callbacks requested for an integrated service are intentionally inapplicable to this no-upload/no-submission mode. They must be implemented and independently verified before adding any authorized integration. Do not add API secrets to browser JS or pretend a local status is an official status.

## Secure static configuration

`npm run build` emits `dist/_headers` with the actual configuration:

```text
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
X-Frame-Options: DENY
Permissions-Policy: camera=(), microphone=(), geolocation=()
Content-Security-Policy: default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; font-src 'self'; img-src 'self' data:; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self'; object-src 'none'
```

Use HTTPS and equivalent host configuration if `_headers` is unsupported. The localhost preview is a development server, not a production security boundary. No `.env` or runtime credentials are required. External portal links use `noopener noreferrer`. Static source control provides recovery; there are no user records to back up or restore.

## Build, test and publish

```sh
npm run build
npm run test:domain
npm test
```

Tests use Playwright, axe-core and an installed Chromium browser. `CHROME_PATH` and `TEST_ORIGIN` can override defaults. The domain test covers validation failures, conditional documents, private draft behavior, step gating/invalidation, escaping, handoff and all seven required viewport widths. It stubs the external portal for handoff verification; it never registers a real domain or tests an authenticated ERNET transaction.

Deploy only built `dist/` with `.openai/hosting.json` via the existing Sites workflow. Preserve the existing private audience. The build versions both entry assets and registration-module imports to avoid stale cached code. The reference image guides composition; the network/laptop illustrations are code-native and make no geographic or official network-map claims.

## Limitations

No live availability, registry submission, application reference, payment, receipt, approval, DNS mutation or authenticated tracking is implemented locally. Original declarations and final fees remain on the official portal. See `research/DOMAIN-SOURCES.md` for field/source decisions and conflicting older documentation.
