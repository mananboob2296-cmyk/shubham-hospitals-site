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

## DONE (verified 2026-07-16, head `74fc4e2`)
Restructure complete. All content is .md collections under `src/content/{blog,treatments,landing,doctors}/{en,hi,mr}/` with `lang` + YAML `faqs` frontmatter; routes/hreflang/switcher are collection-driven; old TS modules (`treatments*.ts`, `landing.ts`, `doctors.ts`, `translated.ts`, `blog.ts`) deleted; `src/src/` cleaned; team-wording fixes applied. **All 17 blog posts translated: 17 en + 17 hi + 17 mr, matching slugs, exactly one FAQ section each.** Fresh build green: 117 pages. Blog template for owner uploads: `src/content/blog/_README.md`.

## NEXT STEPS (each ≈ one small session)
- [x] **S1 — Preview smoke test** (done 2026-07-17 via local build, 117 pages green): en/hi/mr articles OK (correct `lang`, hreflang trio + x-default); double-marker, ivf-process, male-infertility each have exactly one FAQ section in all 3 langs; fetal-medicine treatment, dr-manan, best-ivf landing exist in hi/mr with structure identical to en; en content matches live WP content.
- [x] **S2 — Merge to `main`** (done 2026-07-17): PR #4 merged by owner; PR #3 closed unmerged. Production deploy from `main` verified on pages.dev (hi/mr home, hi article incl. wording fix all render correctly).
- [x] **S2b — Custom domain** (done 2026-07-17): zone moved to Cloudflare DNS with MX/SPF/DMARC intact, mail/ftp records DNS-only, domain attached to Pages project; apex verified serving Astro site. Optionally delete stale branches (`claude/md-restructure`, `claude/i18n-and-faq`).
- [ ] **S2c — Localize wp-content images (OWNER)**: 9 images still reference `https://shubham-hospitals.com/wp-content/uploads/...` → 404 since cutover (4 doctor photos, white footer logo, main logo/ogImage, favicon, IVF-Fertility-Treatments.webp, male-infertility blog image). Fix WITHOUT code changes: download the 9 files from Hostinger File Manager (`public_html/wp-content/uploads/{2025/09,2025/10,2026/06,2026/07}/`) and upload to repo at `shubham-hospitals-site/public/wp-content/uploads/<same paths>` via GitHub web UI. Exact list: Dr-Murlidhar-1024x1024.jpg, Dr-Manjushree-Final-1-1024x1024.jpg, Dr-Manan-1024x1024.jpg, Dr-Darshana-1024x1024.jpg, cropped-Shubham-Hospital-Favicon-New-270x270.png (2025/09); IVF-Fertility-Treatments.webp (2025/10); Shubham-Final-Logo-scaled.png, Shubham-White-Logo.png (2026/06); male-infertility-semen-analysis-amravati.jpeg (2026/07). Optional later cleanup: rewrite refs to relative paths (see `scripts/download-images.sh`).
- [ ] **S3 — Post-domain live check**: after S2c deploys, spot-check ~8 live URLs on shubham-hospitals.com (home en/hi/mr, treatment, doctor, landing, blog listing + article hi) incl. images/favicon. Update this log.
- [ ] **S4 — Update scheduled blog tasks**: blog-upload automation must now produce en + hi + mr versions (`src/content/blog/{en,hi,mr}/`, matching slugs) and use the new .md format — `lang` + YAML `faqs` frontmatter per `src/content/blog/_README.md`, exactly one FAQ section. Owner supplies translations.
- [ ] **S5 — SEO/GEO/AEO/AIO audit + security check** of live shubham-hospitals.com: technical SEO (meta, canonicals, hreflang, sitemap, robots), structured data (FAQ/medical schema), AI-search readiness (llms.txt, answer-friendly content), security headers/TLS.
- [ ] **S6 — Performance + Search Console**: PageSpeed Insights on key pages (mobile+desktop); GSC — verify property still valid post-cutover, submit new sitemap, check hreflang/index coverage, monitor old WP URLs (404s/redirects).
- [x] **S-opt — wording grep** (done 2026-07-17): grepped full built output for "led by / नेतृत्व"; fixed 2 hi posts to team-focused wording. `home.ts`/`pages.ts` remain TS (UI structure, fine to keep).

## Session log
- 2026-07-16 a: blogs → .md collections (85 pages green).
- 2026-07-16 b: treatments/landing/doctors → .md, TS modules deleted, wording + src/src cleanup (95 pages green).
- 2026-07-16 c: all 17 posts × hi + mr added, FAQ dedupe, fresh build 117 pages green.
- 2026-07-17: log compressed to next-steps-only.
- 2026-07-17 b: S1 smoke test passed (local build 117 green); fixed नेतृत्व wording in 2 hi posts; S-opt grep clean.
- 2026-07-17 c: PR #4 opened; PR #3 closed unmerged.
- 2026-07-17 d: PR #4 merged (owner). pages.dev production verified: hi + mr home, hi fertility article (fixed wording live), correct canonicals/hreflang. Remaining: S2b custom domain (owner, see BLOCKER), then S3.
- 2026-07-17 e: DNS recon for cutover (Hostinger NS/A/MX noted above); S2b guide given to owner; added S4 (scheduled tasks, hi/mr + new FAQ format), S5 (SEO/GEO/AEO/AIO + security), S6 (PageSpeed + GSC).
- 2026-07-17 f: S2b DONE — apex verified serving Astro site, email records intact. Diagnosed broken images: 9 wp-content URLs now 404 → added S2c (owner uploads files to `public/wp-content/uploads/`, no code change). S3 pending after S2c.
