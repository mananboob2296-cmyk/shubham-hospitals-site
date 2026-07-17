# Restructure Log — shubham-hospitals-site
Single source of truth. New session: read ONLY this file, then do the next unchecked step. Update this file after every session.

## Owner working style (apply always)
- Token-frugal: small steps, small commits, no echoing file contents in chat, brief replies.
- Owner uploads via GitHub web UI and supplies translations himself — never bulk-translate.
- Wording rule: never "led by Dr. [name]" (en/hi/mr) — always team-focused.
- Zero visual change on live site unless explicitly asked.
- Break work into one-session chunks; log here before ending a session.

## Repo facts
- `mananboob2296-cmyk/shubham-hospitals-site`, project under `shubham-hospitals-site/`. Astro + Cloudflare Pages.
- **Active branch: `main`** (md-restructure merged via PR #4 on 2026-07-17). PR #3 closed unmerged.
- Cloudflare Pages project: `shubham-hospitals-site` — production deploys from `main`.
- **Domain LIVE on Pages (2026-07-17): `shubham-hospitals.com` serves the Astro site.** Zone on Cloudflare DNS (`kay/hasslo.ns.cloudflare.com`); Hostinger MX + SPF/DMARC preserved (email intact); mail/ftp records set to DNS-only. WP still exists on Hostinger hosting (`145.223.108.39`) but is detached from the domain — take full WP backup before cancelling that hosting; keep domain registration + email at Hostinger.
- **Disclaimer rule (since S4): every blog post carries the one-line medical disclaimer as the last line of its body, in its own language. Templates do NOT append it** (removed from hi/mr blog templates 2026-07-17). Exact wording: copy from any sibling post; rules in `src/content/blog/_README.md`.
- **SEO head is template-driven (BaseLayout.astro): per-page canonical, hreflang en/hi/mr + x-default, OG + twitter, MedicalClinic JSON-LD sitewide. Blog=BlogPosting + FAQPage schema, doctor=Physician schema (all in `[...slug].astro` / `FaqSection.astro`).** `robots.txt` + `sitemap-index.xml` + `llms.txt` all served from `public/`. Security headers in `public/_headers` (HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy).
- **AI crawlers ALLOWED (2026-07-17): owner turned OFF Cloudflare's AI-bot block. Live `robots.txt` is now the clean repo allow-all + sitemap line — ClaudeBot/GPTBot/Google-Extended/etc. no longer disallowed. Good for AEO/AIO.**

## DONE (verified 2026-07-16, head `74fc4e2`)
Restructure complete. All content is .md collections under `src/content/{blog,treatments,landing,doctors}/{en,hi,mr}/` with `lang` + YAML `faqs` frontmatter; routes/hreflang/switcher are collection-driven; old TS modules deleted; team-wording fixes applied. **All 17 blog posts translated: 17 en + 17 hi + 17 mr, matching slugs, exactly one FAQ section each.** Fresh build green: 117 pages. Blog template for owner uploads: `src/content/blog/_README.md`.

## NEXT STEPS (each ≈ one small session)
- [x] **S1 — Preview smoke test** (done 2026-07-17 via local build, 117 pages green).
- [x] **S2 — Merge to `main`** (done 2026-07-17): PR #4 merged; production verified on pages.dev.
- [x] **S2b — Custom domain** (done 2026-07-17): zone moved to Cloudflare DNS with MX/SPF/DMARC intact, domain attached to Pages project; apex verified serving Astro site. Optionally delete stale branches (`claude/md-restructure`, `claude/i18n-and-faq`).
- [x] **S2c — Localize wp-content images** (done 2026-07-17): owner uploaded 11 files to `public/wp-content/uploads/<original paths>`; references are absolute URLs on same domain. Full WP image dump kept on owner's computer.
- [x] **S3 — Post-domain live check** (done 2026-07-17). Cache note: owner should Purge Everything once in Cloudflare + hard-refresh.
- [x] **S4 — Update scheduled blog tasks** (done 2026-07-17): `shubham-blog-autodraft` (Tue & Fri) rewritten tri-lingual/.md; 6 stale WP publish tasks disabled + topics queued; disclaimer standardised in-body.
- [x] **S5 — SEO/GEO/AEO/AIO audit + security check** (done 2026-07-17). Head/canonical/hreflang/OG/JSON-LD all correct on live pages; MedicalClinic sitewide + BlogPosting/FAQPage/Physician; all 5 security headers live over Cloudflare TLS; `llms.txt` + sitemap correct. **BUG FOUND + FIXED (commit `62163fe`):** S4 upload (`86d4ef9`) had overwritten 4 hi posts (high-risk-pregnancy, laparoscopy-vs-open, AMH-level, fertility-specialist-7-signs) with English bodies + `lang: en`; restored Hindi from history + added hi in-body disclaimer. **AEO: owner then turned OFF Cloudflare AI-bot blocking — robots.txt now allows AI crawlers (verified live).** Optional leftovers: add YouTube/Google to CLINIC_SCHEMA `sameAs`, `aggregateRating` when reviews available, optional CSP header.
- [x] **S6 — Performance + Search Console** (done 2026-07-17). PageSpeed done; GSC is owner-side (checklist below).
  - **PageSpeed Insights (home, PSI run `nly5xwa4uo`, Lighthouse 13.4.0):**
    - **Mobile:** Performance **93**, Accessibility **95**, Best Practices **100**, SEO **100**, Agentic Browsing 3/3. FCP 1.1s · LCP 3.2s · TBT 0ms · CLS 0.028 · SI 1.1s.
    - **Desktop:** Performance **99**, Accessibility **95**, Best Practices **100**, SEO **100**, Agentic Browsing 3/3. FCP 0.6s · LCP 0.8s · TBT 0ms · CLS 0.011 · SI 0.6s.
    - All Core Web Vitals in the green. Only minor opportunities: (1) images lack explicit width/height (small CLS win — mobile LCP 3.2s is the main lever); (2) "improve image delivery" ~9 KiB; (3) "efficient cache lifetimes" ~5 KiB; (4) a couple of low-contrast text spots (A11y 95). All optional — no action required for launch.
  - **GSC — OWNER ACTIONS (needs your Google login; Claude has no Search Console access):**
    1. In Search Console, confirm/add a property for `https://shubham-hospitals.com` — prefer a **Domain property** (DNS TXT via Cloudflare) so it covers en/hi/mr and www/non-www in one.
    2. **Sitemaps → submit `sitemap-index.xml`.** Remove any old WP sitemap entry.
    3. **Indexing → Pages (Coverage):** watch for the cutover — old WP URLs will drop, new Astro URLs get indexed. Use **URL Inspection → Request indexing** on home + a few key pages (a treatment, a doctor, one blog) to prime it.
    4. **Old WP URLs:** most kept the same slugs so they carry over; for any that 404, add a redirect in `public/_redirects` (Cloudflare Pages). Watch the 404 report a couple of weeks.
    5. **Hreflang:** GSC no longer has a dedicated hreflang report, but check International Targeting / the URL Inspection "referring page" for the en/hi/mr trio; tags are emitted correctly by BaseLayout so this is monitoring, not a fix.
- [x] **S-opt — wording grep** (done 2026-07-17): grep clean; 2 hi posts fixed to team-focused wording.

## Session log
- 2026-07-16 a: blogs → .md collections (85 pages green).
- 2026-07-16 b: treatments/landing/doctors → .md, TS modules deleted, wording + src/src cleanup (95 pages green).
- 2026-07-16 c: all 17 posts × hi + mr added, FAQ dedupe, fresh build 117 pages green.
- 2026-07-17: log compressed to next-steps-only.
- 2026-07-17 b: S1 smoke test passed; fixed नेतृत्व wording in 2 hi posts; S-opt grep clean.
- 2026-07-17 c: PR #4 opened; PR #3 closed unmerged.
- 2026-07-17 d: PR #4 merged (owner). pages.dev production verified.
- 2026-07-17 e: DNS recon for cutover; S2b guide given; added S4–S6.
- 2026-07-17 f: S2b DONE — apex serving Astro, email intact. Diagnosed 9 broken wp-content images → S2c plan.
- 2026-07-17 g: S2c DONE — 11 images uploaded. S3 DONE — live checks pass. Site fully live.
- 2026-07-17 h: S4 DONE — autodraft rewritten tri-lingual/.md; WP tasks disabled; disclaimer standardised in-body; 13 fix files handed to owner.
- 2026-07-17 i: S5 DONE — SEO/AEO/security audit; fixed 4 hi posts overwritten with English (commit `62163fe`); owner turned OFF Cloudflare AI-bot block (robots.txt now allows AI crawlers, verified live).
- 2026-07-17 j: S6 DONE — PageSpeed mobile 93 / desktop 99, SEO 100 / BP 100 both, CWV green (owner supplied PSI run `nly5xwa4uo`). GSC checklist handed to owner (submit sitemap-index.xml, request-index key pages, watch 404s/redirects). **Restructure project effectively complete — remaining items are owner GSC actions + optional polish.**
