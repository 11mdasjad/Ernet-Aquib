# Official source research audit

Verified 24 October 2026 (Asia/Kolkata). This is a content and HTML audit, not a claim of visual equivalence or real service integration.

## Deliverables

- `clean-content.json`: display-ready, independently authored English factual summaries: 14 service categories, 12 documented projects, 4 dated notices, 15 curated document references, institutional history, contact details and limitations.
- `source-map.json`: accessible official URLs for main information-architecture concepts. Use these instead of guessed English paths.
- `verification-register.json`: all 170 fetched page URLs and inspected/unavailable outcomes.
- `crawl.json`, `depth.json`, `pages/`: audit evidence from public responses; some page extracts contain shared navigation/footer. These are research inputs, not text to republish verbatim.
- `document-link-checks.json`: HTTP HEAD responses for the 15 curated documents. All resolved to HTTP 200 and PDF content type. This checks availability, not the contents or accessibility of each PDF.

## Reference availability and navigation

The supplied IDN address `https://xn--m1bd4e9a1b9i.xn--h2brj9c/` is accessible and renders the Hindi ERNET website. `https://ernet.in/` redirects to it, and the apparent English toggle does not produce an English homepage in this environment. Several formerly indexed English detail pages now return the site's “Page not found” template. Many `/hi/` links and some malformed PHP-containing links are broken. Retain those failures in the audit; do not label them inspected content.

The institution is under the Ministry of Electronics and Information Technology. The user's visual mockup's Education Ministry attribution, commercial connectivity price plans, uptime statistics, backbone figures and institutional counts were not verified and should not be treated as content sources.

The real navigation groups are Home; About (history, citizen charter, objectives, corporate highlights, organization chart, centres, acts/rules); Who's Who (minister, secretary, director general, governing council, executive committee, directory); Events (Har Ghar Tiranga, MoUs, current/past events); Services (domain registration, web hosting, campus networking, eduroam); Projects (work-based learning, ongoing/completed); RTI/disclosures; Notifications/tenders; Helpdesk; Careers/archive; Contact.

The homepage order is: accessibility/language/search controls; institutional identity; navigation; banner carousel; hosting memorandum link; six content tabs (welcome, network, services, R&D, training, projects); latest-news list; related government/technical portal links; footer columns (categories, policies, other links, contact); visitor count and last-updated line.

HTML indicates Drupal with Open Sans, Bootstrap, Font Awesome, a Jssor carousel and Quicktabs. CSS references are the `sites/all/themes/ernet/` asset paths. Mobile navigation is represented by `#show-menu` and `#navigation`. This HTML evidence does not establish actual viewport behaviour; visual screenshots and responsive testing are the implementation team's responsibility.

Detail pages use the shared header, a title and breadcrumb, main text/table/image/document content, contextual navigation in relevant sections, and the common footer. The footer includes privacy, hyperlinks, copyright, disclaimer, accessibility, terms, security, sitemap, feedback, help and web-information-manager links.

## Services and portal findings

The production registry is `https://registry.ernet.in/`. Its published guidelines are effective 25 August 2025. They authorize all eight listed categories: ac.in, edu.in, res.in, school.in, alumni.in, विद्या.भारत, शिक्षा.भारत and शोध.भारत. Use these guidelines rather than the older main-site domain description or the older `/download-documents` checklist.

The public workflow is domain availability search; application and institution documentation; online payment; official authenticated panel for supported management. At least two valid nameservers are required. The guidelines include separate requirements for government schools, research proof for research domains, attested PDFs limited to 2 MB, fresh renewal documents, and physical undertaking-copy submission. Current guidelines require an admin-contact appointment letter, while the older downloadable-document list describes an optional head-of-institution appointment letter: do not merge these conflicting rules.

The tariff lists a one-year ac.in/edu.in/res.in registration at ₹1,000 + 18% GST = ₹1,180. Do not assume this table explicitly prices every newer category. DNS is ₹500 + GST for the first year and ₹200 + GST for subsequent years. The DNS modification row contains an arithmetic inconsistency and is excluded from clean content. The tariff shows a ten-year renewal option while guidelines limit renewals to nine years at once: users must resolve the applicable transaction in the real portal.

The dedicated `/tariff_vas` page lists WaaS at ₹3,800 + ₹684 GST (₹4,484/year), and LMaaS at ₹4,300 + ₹774 GST (₹5,074/year). The generic `/tariff` page also has an older-looking generic VAS row; prefer the dedicated service tariff and direct users to the real invoice. WaaS and LMaaS descriptions cover institutional templates, branding, responsive design, content tools, 2 GB storage, chargeable expansion up to 5 GB, and SSL/HTTPS hosting. They are services for registered-domain users. No credentials, private records or production workflows were accessed.

The campus page supports core/distribution/access architecture, fibre/copper networks and centrally authenticated wireless. Network pages support MPLS and dual-stack IPv4/IPv6 descriptions, but do not establish current measured speeds, physical routes, counts or uptime. Hosting pages contain old software versions and should be treated as legacy technical descriptions. eduroam is an official linked JavaScript portal; its current participant list was not verified by this text crawl. IPv6 is an official linked portal; a current detailed consultancy package was not established.

## Projects, notices and publication currency

The project directory mixes old programme descriptions with “ongoing” and “completed” labels. Display historical periods and source-reported status, not a newly inferred live status. Examples include medical e-classrooms commissioned in December 2018; LiFi work in 2017–2019; optical wireless work in 2019–2022; ISEA Phase II in 2015–2020; North East smart classrooms in Assam/Sikkim; accessible state websites; and IoT innovation support.

The main latest-news page currently says no results. The homepage contains 2023 items despite its October 2026 last-update line. Do not invent newer news. The clean notice collection instead uses four actual dated entries from official tenders and careers, clearly categorized.

Two tender detail pages provide real references and dates: CAMC GEM/2026/B/7941685 (published 24 August, original end 10 September 2026) and KGBV ICT supply GEM/2026/B/7732547 (published 3 July, first extended end 3 August 2026). Both published closing dates have passed as of this audit. Procurement status is not otherwise inferred.

Careers lists Project Manager Level 02 published 23 October 2026 and Project Engineer Level 02 published 2 September 2026. The CMS field “Unpublish_date” is not necessarily an application deadline. Do not relabel it. PDF application terms have not been fully extracted in this bounded audit.

Annual reports available on the index include 2024–25, 2022–23, 2020–21 and older years. The 15 curated PDFs all resolve successfully; detailed PDF content and accessible tagging remain unaudited.

## Contact and institutional history

The current Hindi contact page lists headquarters at 5th Floor, Block-I, A Wing, DMRC IT Park, Shastri Park, New Delhi 110053; +91 11-22170578; support@eis.ernet.in. Bengaluru and Chennai addresses and phone numbers are in clean content. Registry support uses helpdesk@domain.ernet.in, 011-22170580 and 011-22170594, Monday–Friday 9:30 AM–5:00 PM; email a ticket before calling.

The historical page records the original Department of Electronics/UNDP-supported ERNET programme in 1986. The institutional overview records the autonomous scientific society in 1998. The domain page records designation under the 2005 .IN registration framework. These are separate milestones, not conflicting establishment dates.

## Copyright and integration limits

The official copyright policy requires prior permission by email before republishing website information and appropriate source acknowledgement; third-party material requires its own authorization. Use factual authored summaries and references. The raw research extracts are evidence, not publication-ready copy. No publication permission was requested and no government endorsement is implied.

No production form, registration API, DNS management API, payment gateway, CMS, email delivery, login, hosting deployment or LMS integration is authorized or connected. Link users to the real services. Local form validation or enquiry drafting must not claim that an official message was sent or a ticket/domain was created.
