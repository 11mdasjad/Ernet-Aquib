# Integration and production requirements

The requested information website is implemented without a backend because no authorized ERNET service credentials or submission API were provided. Official functionality remains with the linked official services.

## Implemented boundary

| Action | Actual behavior |
| --- | --- |
| Domain availability, registration, renewal, status and DNS management | Opens official ERNET registry; no local results or approvals are fabricated |
| Website/LMS templates, publishing and subscriptions | Opens official registry VAS portal |
| eduroam participation and configuration | Opens official eduroam portal |
| Service login | Portal selection with external links; no credential capture |
| Contact message | Browser validation, displayed review, mailto link and text download; nothing sent by the site |
| RTI, feedback and grievances | Links to official information and submission/contact channels |
| PDFs | Opens original official documents; no counterfeit or modified documents |
| News, notices and project status | Curated dated snapshot; no claimed live feed |
| Network architecture | Explicit conceptual diagram; no physical map, monitoring or live availability claims |

## Requirements for authorized operational integrations

Actual registration, authenticated records, account recovery, payments, document uploads, CMS access or contact submission would require an agreed service contract and authorized API specifications. Implement those only with real institutional authorization and appropriate endpoint credentials.

A future backend must provide authenticated server sessions, institutional authorization, schema validation, CSRF protection where applicable, upload MIME/size validation and malware scanning, rate limiting, audit logs, retention controls and verified delivery/error handling. These controls are not claimed to exist in this static site. Do not replace external portal links with simulated transaction success.

## Security and privacy

No secrets, personal records or production credentials are included. User-entered text is escaped before display. The enquiry form makes no network submission. Browser storage holds only contrast and text-size preferences. Security response headers are supplied in `dist/_headers`; confirm equivalent headers when deploying to a host that does not support that file format. The local preview server is for development, binds to loopback, and is not a production server.

All scripts, images and font files are served locally. Open Font License texts accompany the fonts. External links use `noopener noreferrer`. Production hosting must provide HTTPS. Source control is the recovery mechanism for the static content; no application database requires backup. Host-level request logging and private access are provided by the hosting service, not application code.

## Known limits

- The supplied visual image and the accessible official Hindi Drupal site have different designs. The implementation follows the image’s composition with the official site’s verified institutional content; it is not a pixel-identical clone of the live Drupal pages.
- The header uses public-domain State Emblem artwork at the user’s request for the private reference. Public-domain copyright status does not establish permission for official or endorsement-implying use. The original ERNET logo is included at the user’s explicit request, with source attribution and no claim of official authorization.
- The site is an English interpretation with an explicit link to the official Hindi site, not a fully localized Hindi replica.
- Archive coverage consists of curated verified entries plus links to complete official archives; it does not mirror every historical notice and PDF.
- Annual-report PDF links were tested, but full PDF contents and accessibility were not audited.
- Portal account-only workflows were not inspected or tested. No authorized production account was used.
- Automated accessibility checks do not constitute full WCAG/GIGW certification or manual screen-reader testing.
- Current officer names, live network metrics, procurement awards and service availability are not inferred from old records.
