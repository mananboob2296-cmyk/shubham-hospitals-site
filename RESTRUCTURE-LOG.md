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
- Cloudflare Pages project: `shubham-hospitals-site` — production deploys from `main`, verified live at `shubham-hospitals-site.pages.dev`.
- **BLOCKER (owner action): `shubham-hospitals.com` still serves the old WordPress/Elementor site.** DNS facts (checked 2026-07-17): nameservers `ns1/ns2.dns-parking.com` (Hostinger), apex A → `145.223.108.39` (Hostinger WP), **MX → `mx1/mx2.hostinger.com` (email on Hostinger — MUST be copied to Cloudflare DNS during cutover or email breaks)**. Apex custom domains on Pages require the zone on Cloudflare DNS → cutover = move nameservers to Cloudflare, then attach domain to Pages project.

## DONE (verified 2026-07-16, head `74fc4e2`)
Restructure complete. All content is .md collections under `src/content/{blog,treatments,landing,doctors}/{en,hi,mr}/` with `lang` + YAML `faqs` frontmatter; routes/hreflang/switcher are collection-driven; old TS modules (`treatments*.ts`, `landing.ts`, `doctors.ts`, `translated.ts`, `blog.ts`) deleted; `src/src/` cleaned; team-wording fixes applied. **All 17 blog posts translated: 17 en + 17 hi + 17 mr, matching slugs, exactly one FAQ section each.** Fresh build green: 117 pages. Blog template for owner uploads: `src/content/blog/_README.md`.

## NEXT STEPS (each ≈ one small session)
- [x] **S1 — Preview smoke test** (done 2026-07-17 via local build, 117 pages green): en/hi/mr articles OK (correct `lang`, hreflang trio + x-default); double-marker, ivf-process, male-infertility each have exactly one FAQ section in all 3 langs; fetal-medicine treatment, dr-manan, best-ivf landing exist in hi/mr with structure identical to en; en content matches live WP content.
- [x] **S2 — Merge to `main`** (done 2026-07-17): PR #4 merged by owner; PR #3 closed unmerged. Production deploy from `main` verified on pages.dev (hi/mr home, hi article incl. wording fix all render correctly).
- [ ] **S2b — Custom domain (OWNER, in progress 2026-07-17)**: move zone to Cloudflare DNS (import records incl. Hostinger MX), switch nameservers at Hostinger, attach `shubham-hospitals.com` + `www` to the Pages project, redirect www→apex. WP backup before decommissioning Hostinger hosting (keep domain registration + email at Hostinger). Optionally delete stale branches (`claude/md-restructure`, `claude/i18n-and-faq`).
- [ ] **S3 — Post-domain live check**: once domain points at Pages, spot-check ~8 live URLs on shubham-hospitals.com (home en/hi/mr, treatment, doctor, landing, blog listing + article hi). Update this log.
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
