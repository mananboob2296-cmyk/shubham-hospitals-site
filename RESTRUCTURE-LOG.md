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
- [x] **S1 — Preview smoke test** (done 2026-07-17 via local build, 117 pages green): en/hi/mr articles OK (correct `lang`, hreflang trio + x-default); double-marker, ivf-process, male-infertility each have exactly one FAQ section in all 3 langs; fetal-medicine treatment, dr-manan, best-ivf landing exist in hi/mr with structure identical to en; en content matches live (live is still WP/Elementor — Astro replicates it). Owner may still eyeball a Cloudflare Pages branch preview before merging.
- [ ] **S2 — Merge to `main`** (in progress): **PR #4 opened 2026-07-17** (`claude/md-restructure` → `main`). Remaining, owner actions: merge PR #4; point Cloudflare Pages at `main`; confirm live `/hi/blogs/...` URLs resolve (fixes 404s). Close PR #3 unmerged; delete stale branches.
- [ ] **S3 — Post-merge live check**: spot-check ~8 live URLs (home en/hi/mr, treatment, doctor, landing, blog listing + article hi). Update this log; mark project complete.
- [x] **S-opt — wording grep** (done 2026-07-17): grepped full built output for "led by / नेतृत्व"; found 2 hi posts (laparoscopy-vs-open-surgery, when-should-you-see-a-fertility-specialist) — fixed to team-focused wording, rebuild green. `home.ts`/`pages.ts` remain TS (UI structure, fine to keep).

## Session log
- 2026-07-16 a: blogs → .md collections (85 pages green).
- 2026-07-16 b: treatments/landing/doctors → .md, TS modules deleted, wording + src/src cleanup (95 pages green).
- 2026-07-16 c: all 17 posts × hi + mr added, FAQ dedupe, fresh build 117 pages green.
- 2026-07-17: log compressed to next-steps-only.
- 2026-07-17 b: S1 smoke test passed (local build 117 green, all checks above); fixed नेतृत्व wording in 2 hi posts; S-opt grep clean.
- 2026-07-17 c: PR #4 opened → main. Waiting on owner: merge, point Cloudflare at main, close PR #3, delete stale branches. Then S3.
