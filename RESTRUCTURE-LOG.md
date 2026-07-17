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

## DONE (verified 2026-07-16, head `74fc4e2`)
Restructure complete. All content is .md collections under `src/content/{blog,treatments,landing,doctors}/{en,hi,mr}/` with `lang` + YAML `faqs` frontmatter; routes/hreflang/switcher are collection-driven; old TS modules deleted; team-wording fixes applied. **All 17 blog posts translated: 17 en + 17 hi + 17 mr, matching slugs, exactly one FAQ section each.** Fresh build green: 117 pages. Blog template for owner uploads: `src/content/blog/_README.md`.

## NEXT STEPS (each ≈ one small session)
- [x] **S1 — Preview smoke test** (done 2026-07-17 via local build, 117 pages green).
- [x] **S2 — Merge to `main`** (done 2026-07-17): PR #4 merged; production verified on pages.dev.
- [x] **S2b — Custom domain** (done 2026-07-17): zone moved to Cloudflare DNS with MX/SPF/DMARC intact, domain attached to Pages project; apex verified serving Astro site. Optionally delete stale branches (`claude/md-restructure`, `claude/i18n-and-faq`).
- [x] **S2c — Localize wp-content images** (done 2026-07-17): owner uploaded 11 files to `public/wp-content/uploads/<original paths>`; references are absolute URLs on same domain. Full WP image dump kept on owner's computer.
- [x] **S3 — Post-domain live check** (done 2026-07-17). Cache note: owner should Purge Everything once in Cloudflare + hard-refresh.
- [x] **S4 — Update scheduled blog tasks** (done 2026-07-17): `shubham-blog-autodraft` (Tue & Fri) rewritten tri-lingual/.md; 6 stale WP publish tasks disabled + topics queued; disclaimer standardised in-body.
- [x] **S5 — SEO/GEO/AEO/AIO audit + security check** (done 2026-07-17). Findings below.
  - **Good / no action:** per-page canonical, hreflang trio + x-default, OG/twitter, and JSON-LD all present and correct on live pages (verified en AMH post + hi high-risk post). MedicalClinic schema sitewide; BlogPosting+FAQPage on posts; Physician on doctors. `sitemap-index.xml` live, `robots.txt` points to it. `llms.txt` present at `public/llms.txt` and correct (Shubham content). Security headers all present via `_headers` (HSTS 1yr+includeSubDomains, X-Frame-Options SAMEORIGIN, nosniff, Referrer-Policy, Permissions-Policy); TLS via Cloudflare. Emails obfuscated by Cloudflare (cdn-cgi/l/email-protection) — fine.
  - **BUG FOUND + FIXED (commit `62163fe`, 2026-07-17):** the S4 disclaimer-fix upload (commit `86d4ef9`) overwrote the 4 **hi** posts (high-risk-pregnancy, laparoscopy-vs-open, AMH-level, fertility-specialist-7-signs) with the **English** bodies + `lang: en` — so those 4 hi URLs were serving English text with wrong lang/hreflang. Restored Hindi bodies from git history (`362e53c` parent), set `lang: hi`, added the Hindi in-body disclaimer to each. en (4) and mr (5) files from the same S4 batch were correct.
  - **`llms.txt` served content is STALE/WRONG at the live URL:** `https://shubham-hospitals.com/llms.txt` returns an old **Hostinger-plugin-generated** file pointing to `staging.codingwithakash.com` (hello-world/home), NOT the correct `public/llms.txt` in the repo. Likely a Cloudflare cache or a stray root `llms.txt`. **Owner action: Purge Everything in Cloudflare; if still wrong, a stale `llms.txt` is being served ahead of the Pages asset — check for a redirect/edge rule.** (Repo file is correct; only the served copy is stale.)
  - **Minor / optional:** `robots.txt` served copy shows Cloudflare "Managed Content" AI-bot blocks (ClaudeBot, GPTBot, Google-Extended, CCBot, etc. Disallow) prepended ahead of the repo's simple allow-all — this is the Cloudflare AI-crawler setting, not the repo file. **Decision for owner: for AEO/AIO you generally WANT AI crawlers allowed. If you want ChatGPT/Claude/Perplexity to cite the site, turn OFF the Cloudflare "block AI bots" toggle (Security → Bots / robots.txt manager).** CLINIC_SCHEMA `sameAs` could add YouTube + Google profile; consider adding aggregateRating once real review data available.
- [ ] **S6 — Performance + Search Console**: PageSpeed Insights on key pages (mobile+desktop); GSC — verify property still valid post-cutover, submit new sitemap, check hreflang/index coverage, monitor old WP URLs (404s/redirects).
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
- 2026-07-17 i: S5 DONE — SEO/AEO/security audit (head OK, schema OK, headers OK). Found + fixed the 4 hi posts that S4 upload had overwritten with English (commit `62163fe`). Flagged 2 owner actions: (1) purge Cloudflare cache — live `/llms.txt` still serving stale Hostinger staging file; (2) decide on Cloudflare AI-bot blocking (currently ON, blocks ClaudeBot/GPTBot etc. — turn OFF for AEO/AIO citations). Next: S6.
