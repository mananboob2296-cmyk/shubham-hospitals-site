# Restructure Log — shubham-hospitals-site
Single source of truth. New session: read ONLY this file first, then do the next unchecked step. Update this file (in repo root, branch `claude/md-restructure`) after every session.

## Owner working style (apply always)
- Token-frugal: small steps, small commits, no echoing file contents in chat, no re-reading, brief replies.
- Owner uploads via GitHub web UI; will supply blog translations as .md himself — never bulk-translate.
- Wording rule: never "led by Dr. [name]" (en/hi/mr) — always team-focused.
- Zero visual change on live site unless explicitly asked.
- Break work into one-session chunks; log everything here before ending a session.

## Repo facts
- `mananboob2296-cmyk/shubham-hospitals-site`, project under `shubham-hospitals-site/`. Astro + Cloudflare Pages.
- Branches: `main` (stale), `claude/i18n-and-faq` (PR #3, old TS-module i18n), **`claude/md-restructure` (active work)**.
- Live 404 cause: Cloudflare deploys from feature branch; consolidation to `main` pending.

## Done (as of 2026-07-16, branch head `166d2b0`)
- [x] Blogs → `src/content/blog/{en,hi,mr}/` .md collections; `blog.ts`/`batch-a.ts` deleted; collection-driven routes `/hi|mr/blogs/[slug]`, listings, hreflang/switcher auto-derived; template in `src/content/blog/_README.md`. EN URLs unchanged.
- [x] Treatments → `src/content/treatments/{hi,mr}/` (7×2), landing → `content/landing/{hi,mr}/` (3×2), doctors → `content/doctors/{hi,mr}/` (4×2). `landing.ts`, `doctors.ts` deleted. Doctor/landing URLs unchanged (`/hi/<slug>/` catch-all kept).
- [x] Wording fixes: team-focused doctors FAQ + home laparoscopy lead (en/hi/mr) — commits `9063285`, `9a89af4`.
- [x] `src/src/` stray dir removed (9 commits). Blog hi mangled-tag repairs (`bb9b185`, `166d2b0`).
- [x] Build verified green mid-session: 95 pages, control-char + wording scans clean.

## Next steps (each ≈ one small session)
- [ ] **S1 — Verify branch end-state** (cheap): confirm `treatments*.ts` and `translated.ts` deleted (or delete if leftover); confirm the agent's final "5 reconciled blog files" all landed; fresh build; grep control chars + "led by/नेतृत्व". Update this log.
- [ ] **S2 — HTML parity check**: build `claude/i18n-and-faq` vs `claude/md-restructure`; diff rendered HTML of 1 treatment + 1 landing + 1 doctor (en/hi/mr each). Only allowed diffs: wording fixes, removed control chars. Fix template mismatches if any.
- [ ] **S3 — PR + merge to `main`**: open PR from `claude/md-restructure` → `main`, owner merges; point Cloudflare Pages at `main`; verify live URLs incl. `/hi/blogs/...` (fixes 404s); close/delete PR #3 + stale branches.
- [ ] **S4 — Post-merge live smoke test**: spot-check ~8 live URLs (home en/hi/mr, 1 treatment, 1 doctor, 1 landing, blog listing + article hi). Confirm appearance unchanged.
- [ ] **S5+ — Blog translations (owner-driven)**: owner drops .md per `_README.md` template into `blog/hi|mr/`; Claude only validates frontmatter/slug/Devanagari per batch. 15 of 17 posts pending; next: PCOS signs, male infertility.
- [ ] **S-opt — home.ts/pages.ts**: still TS (UI-structure); optional later migration. Re-scan them for any remaining named-lead wording.

## Session log
- 2026-07-16 a: Phase 1 blogs migrated (agents ada2b97/ab803fa), head `48f3448`, 85 pages green.
- 2026-07-16 b: Steps 4–5 migration (agent a8487f1), cut off at spend limit AFTER most pushes; head `166d2b0`, 95 pages green mid-run. S1 must verify final pushes landed.
