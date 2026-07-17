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
- **Active branch: `claude/md-restructure`.** `main` is stale; `claude/i18n-and-faq` (PR #3) is obsolete — close without merging once md-restructure lands.
- Live 404s on `/hi/...` exist until Cloudflare deploys the merged `main`.

## DONE (verified 2026-07-16, head `74fc4e2`)
Restructure complete. All content is .md collections under `src/content/{blog,treatments,landing,doctors}/{en,hi,mr}/` with `lang` + YAML `faqs` frontmatter; routes/hreflang/switcher are collection-driven; old TS modules (`treatments*.ts`, `landing.ts`, `doctors.ts`, `translated.ts`, `blog.ts`) deleted; `src/src/` cleaned; team-wording fixes applied. **All 17 blog posts translated: 17 en + 17 hi + 17 mr, matching slugs, exactly one FAQ section each.** Fresh build green: 117 pages. Blog template for owner uploads: `src/content/blog/_README.md`.

## NEXT STEPS (each ≈ one small session)
- [ ] **S1 — Preview smoke test**: deploy preview of `claude/md-restructure`; check 1 en + 1 hi + 1 mr article, the 2 newest posts (double-marker, ivf-process), and male-infertility (exactly one FAQ section). Also 1 treatment + 1 doctor + 1 landing page in hi/mr — appearance must match live site.
- [ ] **S2 — Merge to `main`**: open PR `claude/md-restructure` → `main`; owner merges; point Cloudflare Pages at `main`; confirm live `/hi/blogs/...` URLs resolve (fixes 404s). Close PR #3 unmerged; delete stale branches.
- [ ] **S3 — Post-merge live check**: spot-check ~8 live URLs (home en/hi/mr, treatment, doctor, landing, blog listing + article hi). Update this log; mark project complete.
- [ ] **S-opt — home.ts / pages.ts**: still TS (UI structure, fine to keep). One-time grep for any leftover "led by / नेतृत्व" wording; fix if found.

## Session log
- 2026-07-16 a: blogs → .md collections (85 pages green).
- 2026-07-16 b: treatments/landing/doctors → .md, TS modules deleted, wording + src/src cleanup (95 pages green).
- 2026-07-16 c: all 17 posts × hi + mr added, FAQ dedupe, fresh build 117 pages green.
- 2026-07-17: log compressed to next-steps-only (this commit).
