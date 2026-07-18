# MASTER EXECUTION PLAN — shubham-hospitals.com

**Repo:** `mananboob2296-cmyk/shubham-hospitals-site` · Site source lives in `shubham-hospitals-site/` (Astro + TypeScript, i18n EN/HI/MR, served behind Cloudflare)
**Live site:** https://shubham-hospitals.com
**Plan created:** 2026-07-18 (based on PM + QA + Design agent reviews, re-verified against live site same day)
**This file is the single source of truth.** It lives at the repo root as `MASTER-EXECUTION-PLAN.md`.

---

## 🤖 AGENT PROTOCOL — READ THIS FIRST

You are one session in a relay. Previous agents worked before you; others will come after. Follow this exactly:

1. **Read this entire file** before touching anything.
2. **Pick ONE task** — the first task with status `TODO` in phase order (respect `blocked-by` notes). Do not cherry-pick unless the user directs you.
3. **Set its status to `IN_PROGRESS`** and commit this file immediately with message `plan: start T<id>` (this claims the task and prevents duplicate work if a session dies).
4. **Do the work** in small commits. Repo paths in tasks are relative to `shubham-hospitals-site/`. Key dirs: `src/pages/` (routes), `src/layouts/`, `src/components/`, `src/i18n/` (translations), `src/data/`, `src/consts.ts`, `public/`.
5. **Verify** using the task's Verification section. Build must pass: `cd shubham-hospitals-site && npm install && npm run build`.
6. **Update this file**: set status to `DONE` (or `BLOCKED` with a reason), fill in the Session Log row, and note anything the next agent must know in the task's Notes.
7. **Commit this file last** with message `plan: complete T<id> — <short summary>`.
8. **If you finish with tokens to spare**, you may start the next task (repeat from step 2). Never leave a task `IN_PROGRESS` at session end without a Notes entry explaining exactly where you stopped.
9. **Never re-verify DONE tasks** unless the user asks. Never re-fetch the whole site; trust this file.
10. **Deploy caveat:** if you cannot trigger a deploy, mark the task `DONE (pending deploy)` and say so in Notes. Verification against the live site can be done by the next agent.

**Statuses:** `TODO` · `IN_PROGRESS` · `DONE` · `DONE (pending deploy)` · `BLOCKED: <reason>` · `SKIPPED: <reason>`

---

## 📓 SESSION LOG (append one row per session)

| Date | Agent/Model | Task(s) touched | Outcome | Notes |
|------|-------------|-----------------|---------|-------|
| 2026-07-18 | Claude (Cowork) | Plan creation | Created this file; re-verified live site | Baseline statuses below reflect live site as of this date |
| 2026-07-18 | Claude (Cowork) | T1 | DONE (pending deploy) | Locale-aware doctor profile links on /hi/ & /mr/ doctors pages; build passes |
| 2026-07-18 | Claude (Cowork) | T1 deploy confirm, T2 | T1 DONE (live); T2 DONE (pending deploy) | User confirmed T1 live on Cloudflare; upgraded 404 page to trilingual + nav + phone |

---

## ✅ ALREADY DONE — verified live on 2026-07-18 (do NOT redo)

These were flagged in the original reviews but are confirmed fixed on the live site:

- All six legacy WordPress/Elementor pages migrated to the Astro template: `/doctors/`, `/contact-us/`, `/dr-manan/`, `/dr-manjushree/`, `/treatments/fetal-medicine/`, `/best-ivf-centre-in-amravati/` — new nav, language switcher, single correct footer everywhere.
- Lorem ipsum fake testimonials ("Stella Ruth" etc.) removed from `/doctors/`.
- OPD hours consistent site-wide (Mon–Sat 11 AM–5 PM & 7–9:30 PM, Sun closed); demo per-day hours table gone.
- Copyright © 2026 consistent; old "© 2025" footers gone.
- `tel:+918668954915` (with country code) everywhere, including floating buttons.
- `/contact-us/` address card now links to the proper Google Maps directions URL (malformed `http://Badnera%20Rd...` link gone).
- YouTube button live on English `/dr-manan/` (`youtube.com/@drmananboob.gynendoscopy`).
- `/doctors/` cards show full credentials, `h3` names, "View Full Profile" links.
- IVF cost range published (₹1.2–2.5 lakh, itemised-estimate promise) + honest success-rate FAQ on `/best-ivf-centre-in-amravati/`; page also now has og:image, disclaimer, catchment-area copy.
- Booking form upgraded: gender + "How did you hear about us" dropdowns, "Book via WhatsApp" submit with pre-fill explanation.
- `og:locale` en_IN consistent; Elementor meta generators gone.

---

## PHASE 1 — Quick bug fixes (each task ≈ one short session)

### T1. Fix Hindi/Marathi doctors pages linking to English profiles
**Status:** `DONE`
**Problem (verified live 2026-07-18):** On `/hi/doctors/` the "पूरा प्रोफ़ाइल देखें" buttons link to English `/dr-murlidhar/`, `/dr-manjushree/`, `/dr-manan/`, `/dr-darshana/` even though translated profiles exist (e.g. `/hi/dr-manan/` is live). Same issue almost certainly on `/mr/doctors/`.
**Steps:**
1. Find the doctors listing page source (likely `src/pages/hi/doctors.astro` + `src/pages/mr/doctors.astro`, or a shared component under `src/components/` fed by `src/data/` or `src/i18n/`).
2. Make profile URLs locale-aware: prefix `/hi/` or `/mr/` when rendering in those locales.
3. Grep the whole codebase for other hardcoded root-relative internal links inside `hi`/`mr` page trees (`grep -rn '"/dr-' src/ | grep -v en`) and fix the same way.
**Verification:** Build passes; built HTML in `dist/hi/doctors/index.html` contains `/hi/dr-manan/` etc.; spot-check `dist/mr/doctors/index.html`.
**Notes:** Fixed 2026-07-18. Only the two listing pages had the bug: `src/pages/hi/doctors.astro` and `src/pages/mr/doctors.astro` used `href={`/${d.slug}/`}` → now `/hi/${d.slug}/` and `/mr/${d.slug}/`. Codebase grep confirmed no other hardcoded root-relative `/dr-` links in hi/mr trees (HomeBody already uses the `L()` locale helper). Build passes (117 pages); verified `dist/hi/doctors/index.html` & `dist/mr/doctors/index.html` link to localized profiles which exist. Deploy confirmed live by user 2026-07-18.

### T2. Create a real 404 page
**Status:** `DONE (pending deploy)`
**Problem (verified live 2026-07-18):** Unknown URLs return a completely blank page — no message, no nav, no way back.
**Steps:**
1. Create `src/pages/404.astro` using the standard site layout: friendly message ("Page not found / पेज नहीं मिला"), links to Home, Departments, Doctors, Contact, and the phone number.
2. Keep it trilingual-lite: one page with EN + HI + MR one-liners is fine (Astro static hosting serves a single 404).
3. Check the host config (Cloudflare Pages serves `404.html` automatically; if custom, wire it up).
**Verification:** `dist/404.html` exists after build and contains nav + links. After deploy, `https://shubham-hospitals.com/nonexistent-xyz/` shows it.
**Notes:** 2026-07-18. A minimal EN-only `src/pages/404.astro` already existed; upgraded it to meet spec: EN+HI+MR one-liners, four nav buttons (Home/Departments/Doctors/Contact → `/`, `/departments/`, `/doctors/`, `/contact-us/`), and a phone CTA (`SITE.phoneHref`). Kept `noindex`. Astro static hosting serves one `404.html`; Cloudflare Pages serves it automatically. Build passes (117 pages); `dist/404.html` verified. Pending live deploy.

### T3. Fix empty /sitemap.xml
**Status:** `TODO`
**Problem (verified live 2026-07-18):** `/sitemap.xml` returns an empty response; `robots.txt` points to `/sitemap-index.xml` which works.
**Steps:**
1. Check `astro.config.mjs` — likely `@astrojs/sitemap` generating `sitemap-index.xml`.
2. Either add a redirect from `/sitemap.xml` → `/sitemap-index.xml` (Cloudflare `_redirects` file in `public/`: `/sitemap.xml /sitemap-index.xml 301`), or delete any stray empty `public/sitemap.xml` that is shadowing the generated one.
**Verification:** After build, no empty `sitemap.xml` in `dist/`; after deploy, `/sitemap.xml` 301s to the index or serves real XML.
**Notes:** —

### T4. Resolve Fetal Medicine "opening soon" contradiction
**Status:** `TODO`
**Problem (verified live 2026-07-18):** `/treatments/fetal-medicine/` hero + meta describe a **dedicated Fetal Medicine Centre** (present tense), but body copy still says "excited to **soon launch**" and "Our center **will be** staffed…". Site elsewhere presents the department as existing.
**Steps:**
1. **Ask the user first** (one question): is the centre operational now or genuinely upcoming?
2. If operational: rewrite body copy to present tense in the page source (likely `src/pages/treatments/fetal-medicine.astro` or a content collection entry under `src/content/`); mirror the fix in `/hi/` and `/mr/` versions.
3. If upcoming: add a clear "Opening <month year>" banner and change footer/departments listings to say "(opening soon)".
**Verification:** No mix of tenses on the page in all three languages; build passes.
**Notes:** —

### T5. Verify and fix the `#book` anchor on /contact-us/
**Status:** `TODO`
**Problem:** Every "Book Appointment" CTA site-wide targets `/contact-us/#book`. The form section is headed "Send Us A Message". Whether an element with `id="book"` exists was NOT confirmable from crawls — check in source.
**Steps:**
1. Open the contact page source and search for `id="book"`.
2. If missing, add `id="book"` to the booking form section wrapper (EN, HI, MR pages) with `scroll-margin-top` so the sticky header doesn't cover it.
3. Rename the section heading to "Book an Appointment / अपॉइंटमेंट बुक करें / अपॉइंटमेंट बुक करा" so the landing point matches the CTA promise.
**Verification:** Built HTML contains the id on all three locales; clicking a Book CTA on live site scrolls to the form.
**Notes:** —

---

## PHASE 2 — Localization completion

### T6. Translate nav dropdown + footer department names on HI/MR pages
**Status:** `TODO`
**Problem (verified live 2026-07-18):** On `/hi/*` and `/mr/*`, the "विभाग एवं उपचार" dropdown items and the footer Departments list are still English ("Advanced Laparoscopy & Hysteroscopy", "Best IVF Centre in Amravati", …). The tagline "Hi-Tech Treatment, At Truly Affordable Cost!" is also untranslated.
**Steps:**
1. Locate the nav/footer department labels — likely in `src/i18n/` dictionaries or `src/consts.ts` / `src/data/`.
2. Add HI and MR strings for all 7 departments + 3 "Best X" pages + the tagline. (Draft translations, keep medical terms recognizable: e.g. HI "एडवांस्ड लेप्रोस्कोपी एवं हिस्टेरोस्कोपी".)
3. Wire the components to use locale strings instead of EN constants.
**Verification:** Build; `dist/hi/index.html` nav/footer contain Devanagari department names; no EN leakage except proper nouns.
**Notes:** —

### T7. Localize testimonials on HI/MR homepages
**Status:** `TODO`
**Problem:** All six patient reviews on `/hi/` and `/mr/` render in English.
**Steps:**
1. Find the testimonials data (likely `src/data/testimonials.*`).
2. Add translated versions of at least 3 reviews per locale (translations of the real reviews — do not invent new reviewers), keep names + dates + star ratings identical, and note "अनुवादित समीक्षा (मूल: अंग्रेज़ी)" so translated reviews are honestly labeled.
3. Render locale-appropriate set on HI/MR pages.
**Verification:** `dist/hi/index.html` shows Devanagari review text with real reviewer names.
**Notes:** —

### T8. Add hreflang alternates + verify html lang attributes
**Status:** `TODO`
**Steps:**
1. In the base layout (`src/layouts/`), confirm `<html lang>` is `hi`/`mr` on those trees (not `en`).
2. Add `<link rel="alternate" hreflang="en-IN|hi-IN|mr-IN|x-default">` tags for every page that has all three versions (build a helper that maps the current path to its siblings).
3. Align `<title>` vs `og:title` while in the layout: make `og:title` default to the page `<title>` unless explicitly overridden (fixes the ~9 mismatches flagged by QA, incl. homepage).
**Verification:** Built HTML for `/`, `/hi/`, `/mr/`, one treatment page and one doctor page contains correct lang + 4 hreflang tags each; title == og:title on those pages.
**Notes:** —

---

## PHASE 3 — Conversion & content

### T9. Surface IVF cost + success-rate honesty on the main IVF treatment page
**Status:** `TODO`
**Problem:** The excellent cost range (₹1.2–2.5L) and success-rate FAQ exist only on `/best-ivf-centre-in-amravati/`. The primary `/treatments/ivf-fertility-treatments/` page still says "high success rates" repeatedly with no numbers and no cost info.
**Steps:**
1. Port the cost FAQ + success-rate FAQ (same copy) onto `/treatments/ivf-fertility-treatments/` (EN/HI/MR).
2. Add a small "Transparent pricing" callout linking to the itemised-estimate promise.
3. Deduplicate wording so the two pages don't read identically (reword one).
**Verification:** Build; both pages show cost + success info; copy not verbatim-duplicated.
**Notes:** —

### T10. Add insurance / cashless / payment info
**Status:** `TODO`
**Problem:** No mention of insurance, cashless tie-ups, EMI, or government schemes (e.g., MJPJAY) anywhere.
**Steps:**
1. **Ask the user** which insurers/TPAs/schemes are accepted and whether EMI is offered (do not invent).
2. Add an "Insurance & Payments" section to `/contact-us/` and the FAQ page (EN/HI/MR), plus one FAQ entry.
**Verification:** Section renders in all locales with user-confirmed facts only.
**Notes:** —

### T11. Reconcile stats + teleconsult claim on About page
**Status:** `TODO`
**Problem (from reviews; re-verify /about-us/ at task start):** "20,000+ Total Patients" vs "20,000+ Safe Deliveries" elsewhere; "30+ years" vs "nearly three decades" vs "45 years combined"; About page advertises "Online Consultation — Book an online appointment" but no teleconsult flow exists.
**Steps:**
1. Canonical stat set (use everywhere): 20,000+ Safe Deliveries · 25,000+ Laparoscopic Surgeries · 1,000+ IVF Babies · 30+ Years. Update `/about-us/` (all locales) to match; centralize in `src/consts.ts` or `src/data/` if not already.
2. Teleconsult: **ask the user** — build a simple flow (WhatsApp video-consult booking note) or remove the claim.
**Verification:** Grep built HTML for "Total Patients" → 0 hits; stats identical across pages.
**Notes:** —

### T12. Per-doctor OPD schedules + booking CTAs
**Status:** `TODO`
**Steps:**
1. **Ask the user** for each doctor's OPD days/timings.
2. Add a schedule block + "Book with Dr. X" (WhatsApp prefilled with doctor name) to each of the 4 profile pages and the doctors listing cards (EN/HI/MR).
**Verification:** All 4 profiles show schedules; WhatsApp links contain the doctor's name in the prefill text.
**Notes:** —

### T13. Emergency / patient information page
**Status:** `TODO`
**Steps:**
1. Create `/patient-info/` (EN/HI/MR): emergency guidance (call +91-8668954915, 24x7), what to bring for admission, visiting hours, directions summary, insurance pointer (after T10).
2. Link from footer Quick Links and the FAQ page.
**Verification:** Page builds in 3 locales; footer links resolve.
**Notes:** —

---

## PHASE 4 — Design, accessibility, performance

### T14. Accessibility pass on the shared layout
**Status:** `TODO`
**Steps (all in `src/layouts/` + header/footer components):**
1. Add a "Skip to content" link as first focusable element.
2. Make the mobile menu toggle a real `<button>` with `aria-label="Menu"` + `aria-expanded`.
3. Ensure the duplicated header logo/language-switcher markup has one copy `aria-hidden="true"` (or restructure to render once).
4. Footer social links: replace raw-URL link text with accessible names ("Follow us on Facebook") + icons.
**Verification:** Build; run `npx pa11y http://localhost:4321/` (or axe) on home + one inner page; zero new errors, previous errors reduced.
**Notes:** —

### T15. Image optimization
**Status:** `TODO`
**Steps:**
1. Convert doctor photos (currently 1024px JPGs from `/wp-content/uploads/`) to locally hosted WebP in `public/images/`, ~400px display size with `srcset`/`sizes` (or Astro `<Image>`).
2. Standardize on one logo file set (header + white footer variant, WebP); replace remaining `Shubham-Final-Logo-scaled.png` references incl. og:image defaults for `/doctors/`, `/contact-us/`, `/hi/doctors/`.
3. Add `srcset` for the homepage hero; `loading="lazy"` on below-fold images; explicit `width`/`height` to prevent CLS.
**Verification:** Build; total image weight of homepage + doctors page reduced (compare `dist/` sizes); no broken images.
**Notes:** —

### T16. Nav cleanup: move "Best X in Amravati" pages out of Departments dropdown
**Status:** `TODO`
**Problem:** The dropdown mixes 7 real departments with 3 SEO landing pages — confusing and self-praising in the primary nav; also risky under Indian medical-advertising norms.
**Steps:**
1. **Confirm with the user** (SEO pages stay indexed and internally linked — only removed from the menu).
2. Remove the 3 items from the nav dropdown (all locales). Keep footer/homepage cross-links and sitemap entries. Do NOT delete or noindex the pages.
**Verification:** Nav shows 7 departments; the 3 pages still build and remain linked from homepage service cards.
**Notes:** —

### T17. FAQ page: accordions + category jump-nav
**Status:** `TODO`
**Steps:**
1. Convert Q&A blocks on `/faq/` (EN/HI/MR) to `<details>/<summary>` accordions grouped by existing categories.
2. Add sticky category pill nav with anchor links.
3. Add FAQPage JSON-LD schema (only for visible Q&As).
**Verification:** Build; accordions toggle without JS errors; schema validates (paste into validator.schema.org).
**Notes:** —

### T18. Soften the homepage h1
**Status:** `TODO`
**Problem:** Current h1 is 17 words and keyword-stuffed ("…Best IVF & Laparoscopy Centre in Amravati"); "Best" self-designation is risky under Indian medical-advertising norms.
**Steps:**
1. Propose to the user 2–3 alternatives, e.g. "30 Years of Safe Deliveries & IVF Success in Amravati". Keep keywords in `<title>` (already good).
2. Update h1 in EN/HI/MR homepages after approval.
**Verification:** h1 ≤ 10 words, no "Best" claim; title tag unchanged.
**Notes:** —

---

## PHASE 5 — Trust & growth (lower urgency)

### T19. Embed videos on-site
**Status:** `TODO`
Steps: embed 1–2 YouTube videos (facility tour / Dr Manan's channel) on homepage and relevant profile/treatment pages using lite-youtube-embed (no heavy iframe on load). Verify build + no CLS.
**Notes:** —

### T20. Display registrations/accreditations
**Status:** `TODO`
Steps: **ask the user** for ART Act clinic registration no., MMC registration, NABH (if any), FOGSI/IFS memberships; add a trust-badge strip near homepage stats + footer line. Do not publish anything unconfirmed. Verify all locales.
**Notes:** —

### T21. Truncate long testimonials + "Read more"
**Status:** `TODO`
Steps: clamp review cards to ~40 words with expander; even card heights. Verify on mobile viewport.
**Notes:** —

### T22. Decide AI-crawler policy
**Status:** `TODO`
Problem: Cloudflare currently blocks GPTBot/ClaudeBot/Google-Extended etc. — the site is invisible to AI search despite heavy content investment (llms.txt exists in repo!).
Steps: **ask the user**; if opening up, adjust the Cloudflare bot-block settings (dashboard — may be outside repo scope; document in Notes) and keep `llms.txt` current. Mark `BLOCKED: needs Cloudflare dashboard access` if agent cannot reach it.
**Notes:** —

### T23. Slot-based booking (largest task — split if needed)
**Status:** `TODO`
Steps: add preferred-doctor + preferred-day/time fields to the contact form feeding the WhatsApp prefill; optionally follow up with a real scheduling integration later. Verify prefill message contains the new fields.
**Notes:** —

---

## 📌 Standing rules for all tasks

- Never invent medical facts, prices, credentials, insurer names, or schedules — ask the user.
- Every user-facing change ships in EN + HI + MR together, or the task isn't done.
- Keep the canonical contact facts: `+91-8668954915` · `shubhamhospital111@gmail.com` · Badnera Rd, opp. Mantri Motors, Deorankar Nagar, Amravati 444605 · OPD Mon–Sat 11 AM–5 PM & 7–9:30 PM, Sun closed · Emergency 24x7.
- Canonical stats: 20,000+ Safe Deliveries · 25,000+ Laparoscopic Surgeries · 1,000+ IVF Babies · 30+ Years (since 1995).
- Build must pass before any `DONE`: `cd shubham-hospitals-site && npm install && npm run build`.
