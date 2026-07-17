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

## DONE (verified 2026-07-16, head `74fc4e2`)
Restructure complete. All content is .md collections under `src/content/{blog,treatments,landing,doctors}/{en,hi,mr}/` with `lang` + YAML `faqs` frontmatter; routes/hreflang/switcher are collection-driven; old TS modules (`treatments*.ts`, `landing.ts`, `doctors.ts`, `translated.ts`, `blog.ts`) deleted; `src/src/` cleaned; team-wording fixes applied. **All 17 blog posts translated: 17 en + 17 hi + 17 mr, matching slugs, exactly one FAQ section each.** Fresh build green: 117 pages. Blog template for owner uploads: `src/content/blog/_README.md`.

## NEXT STEPS (each ≈ one small session)
- [x] **S1 — Preview smoke test** (done 2026-07-17 via local build, 117 pages green).
- [x] **S2 — Merge to `main`** (done 2026-07-17): PR #4 merged; production verified on pages.dev.
- [x] **S2b — Custom domain** (done 2026-07-17): zone moved to Cloudflare DNS with MX/SPF/DMARC intact, mail/ftp records DNS-only, domain attached to Pages project; apex verified serving Astro site. Optionally delete stale branches (`claude/md-restructure`, `claude/i18n-and-faq`).
- [x] **S2c — Localize wp-content images** (done 2026-07-17): owner uploaded 11 files (9 site images + 2 contact-card images `Dr-Manjushree-Final-1.jpg` / `Dr-Manan-Boob-Card-v2.jpg`) to `public/wp-content/uploads/<original paths>`; no code change needed since references are absolute URLs on the same domain. Full WP image dump kept on owner's computer (`Desktop/wp-content`), curated set in `Desktop/wp-content/github-upload`.
- [x] **S3 — Post-domain live check** (done 2026-07-17): live spot-checks passed on shubham-hospitals.com (see session log 2026-07-17 g). Cache note: owner should do Cloudflare → Caching → Purge Everything once, and hard-refresh browser.
- [x] **S4 — Update scheduled blog tasks** (done 2026-07-17): `shubham-blog-autodraft` (Tue & Fri) rewritten — one topic per run published as en+hi+mr `.md` trio (matching slugs, `lang` + YAML `faqs` frontmatter, plain Markdown, no JSON-LD, in-body disclaimer, team wording), single 3-file commit to main via connector. Owner chose Claude drafts all 3 languages. All 6 stale WP `publish-*` tasks disabled; their 6 topics (piles, IUI vs IVF, ovarian cyst, delivery vs C-section, appendicitis, IVF success by age/AMH) moved to top of the autodraft queue. Old `weekly-shubham-blog-draft` WP task remains disabled/obsolete — can be deleted anytime. Duplicate-disclaimer resolved as **in-body only**: auto-append removed from hi/mr templates (2 commits), `_README.md` rule updated. **Owner action pending: upload the 13 provided disclaimer-fix files** (4 en, 4 hi, 5 mr — the posts that lacked an in-body disclaimer: high-risk-pregnancy, laparoscopy-vs-open, AMH-level, fertility-specialist-7-signs in all 3 langs + mr ivf-cost) via GitHub web UI into `src/content/blog/{en,hi,mr}/` (replaces existing files). Until uploaded, those 13 live pages show no disclaimer.
- [ ] **S5 — SEO/GEO/AEO/AIO audit + security check** of live shubham-hospitals.com: technical SEO (meta, canonicals, hreflang, sitemap, robots), structured data (FAQ/medical schema), AI-search readiness (llms.txt, answer-friendly content), security headers/TLS.
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
- 2026-07-17 e: DNS recon for cutover (Hostinger NS/A/MX); S2b guide given to owner; added S4–S6.
- 2026-07-17 f: S2b DONE — apex serving Astro, email intact. Diagnosed 9 broken wp-content images → S2c plan.
- 2026-07-17 g: S2c DONE — curated 11 images from owner's WP dump, owner uploaded to `public/wp-content/uploads/`. S3 DONE — live checks pass. Site fully live on shubham-hospitals.com.
- 2026-07-17 h: S4 DONE — autodraft task rewritten tri-lingual/.md; 6 WP publish tasks disabled, topics queued; disclaimer standardised in-body (hi/mr template append removed, README updated); 13 fix files handed to owner for upload. Disclaimer audit basis: 13/17 hi + 12/17 mr had duplicates, 4 en had none. **Next: owner uploads 13 files, then S5.**
