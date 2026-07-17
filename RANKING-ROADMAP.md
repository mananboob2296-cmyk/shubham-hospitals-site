# Ranking Roadmap — shubham-hospitals.com
Goal: rank #1 in Google (and earn AI-Overview / AI-assistant citations) for high-intent searches in Amravati & the Vidarbha region — IVF/test-tube baby, gynecology, laparoscopy, maternity, fetal medicine — across English, Hindi and Marathi.

**This doc is separate from RESTRUCTURE-LOG.md on purpose.** The restructure log covers the one-time site migration (now done). This roadmap is the ongoing growth work, rolled out in phases. Update this file as phases complete.

**Honest framing.** The migration gave the site a strong technical base (clean schema, hreflang, fast Core Web Vitals, FAQ markup, AI crawlers allowed). But #1 rankings and AI-Overview citations are *earned over weeks–months* through local relevance, reputation (reviews), content depth, and links — not through any single switch. This plan sequences the highest-leverage work first. No black-hat tactics; everything here is durable, Google-guidelines-safe, and appropriate for a medical (YMYL) site where trust signals matter more than average.

---

## Phase 0 — Foundation (DONE via migration)
Recorded here only as the baseline the rest builds on. Details in RESTRUCTURE-LOG.md.
- Astro site live on `shubham-hospitals.com`, Cloudflare Pages, 116 URLs, en/hi/mr.
- Per-page canonical + hreflang trio + x-default; MedicalClinic / BlogPosting / FAQPage / Physician schema; sitemap + llms.txt; security headers; PageSpeed mobile 93 / desktop 99.
- Correct sitemap submitted to GSC; AI crawlers allowed. Priority pages queued for indexing.

---

## Phase 1 — Google Business Profile (GBP) + Local Pack (Weeks 1–2) — HIGHEST LEVERAGE
For "IVF centre in Amravati", "gynecologist near me" etc., the **Google Map Pack + GBP is usually seen before the blue links** — and it feeds AI Overviews for local queries. This is the single biggest ranking lever for a local clinic.

*Live audit 2026-07-17: profile verified & managed, 4.8★ / 412 reviews, 3,368 monthly views, 737 interactions. Most items below are done; remaining gaps listed after.*

- [x] **Claim & fully verify the GBP** — done ("You manage this Business Profile").
- [x] **NAP consistency (GBP itself):** GBP name/address/phone match the website exactly (Badnera Rd, opp. Mantri Motors, Deorankar Nagar, Amravati 444605 · 8668954915). Social-profile NAP moved to Phase 3.
- [x] **Primary category:** "Fertility clinic" is set. Secondary categories: verify Hospital, Gynecologist, Surgeon, Reproductive health clinic, Fetal medicine are all added.
- [ ] **Fix hours:** currently only "Open 24 hours." Set OPD hours as main hours (Mon–Sat 11–5 & 7–9:30, Sun closed) and use GBP "More hours" for 24×7 emergency. Confirm upcoming holiday hours (Independence Day prompt pending).
- [ ] **Reach "Complete" profile strength:** GBP is prompting to finish the profile — services list, attributes, missing fields. Directly improves conversion of the 3,368 monthly views.
- [x] **Photos:** baseline photos exist; **keep the monthly refresh cadence** (GBP is prompting "Add new photos").
- [x] **GBP Posts:** active (recent posts Jul 5 & Jul 9, 2026). Keep weekly cadence.
- [ ] **Products/Services with prices or "on request"** where appropriate (IVF, laparoscopy consultation) — verify populated.
- [x] Link GBP → website + appointment link (`shubham-hospitals.com`, wa.me) — done.
- [ ] **Link all social profiles under GBP "Profiles":** only Facebook is linked; add Instagram and both YouTube channels.
- [ ] **Respond to the new 5-star review** (pending prompt). Also consider removing the 7-year-old review posted from the owner account — self-reviews undermine trust.

**Owner action; Claude can draft the description, service list, and weekly GBP post copy in en/hi/mr.**

---

## Phase 2 — Reviews & Reputation (Weeks 2–8, then ongoing) — trust signal #1 for medical
Reviews drive both Map-Pack ranking and patient conversion, and are a strong YMYL trust signal.

- [ ] **Systematic review collection:** a simple flow to ask happy patients for a Google review at discharge/follow-up (QR card at reception, WhatsApp follow-up link). Target a steady trickle (e.g. 5–10/month) rather than a spike.
- [ ] **Route reviewers to Google first.** Justdial already has 473 reviews (4.8) vs Google's 412 — but Google reviews are what feed the Map Pack and AI Overviews. Point QR cards / WhatsApp links at the Google review form.
- [ ] **Respond to every review** — thank positive ones by name; respond to any negative one calmly, professionally, without disclosing medical details (privacy). Response rate is itself a ranking/trust signal.
- [ ] **Aim past competitors** on both review count and average rating for "IVF Amravati" / "gynecologist Amravati". Track competitor counts monthly.
- [ ] Encourage a few reviews to mention the *service + city* naturally ("IVF at Shubham in Amravati") — helps relevance.
- [x] **`aggregateRating` added to schema** (PR #5, 2026-07-17) using live GBP figures via the `GOOGLE_RATING` const in `src/consts.ts`. **Caveats:** Google treats self-serving LocalBusiness ratings as ineligible for star rich-results — the value is entity/AI-assistant grounding, not SERP stars. **Re-sync the two numbers monthly** (2-line edit, "last synced" comment in the const) so the markup never goes stale.

**Owner action; Claude can draft the review-request message (en/hi/mr) and a response template bank.**

---

## Phase 3 — Local Citations & NAP (Weeks 3–6)
Consistent listings across directories reinforce that the clinic is a real, established local entity — a signal Google and AI systems both use.

- [ ] **Own social profiles first (audited 2026-07-17):** phone number is now correct on both FB & IG (8668954915 ✓). Remaining fixes:
  - Instagram bio: address says "**Rajaphate**" (typo → Rajapeth) and omits Deorankar Nagar / "opp. Mantri Motors"; standardize to the GBP address. Add `shubham-hospitals.com` link to the bio.
  - Facebook: address reads "Shubham Hospital Rajapeth, Badnera Road, Amravati., Amravati, India" — no pincode, no Deorankar Nagar, duplicated city; standardize to the GBP address. Hours show "Always open" (mirror the GBP OPD + emergency split). Remove the odd "Outdoor seating" attribute. Consider enabling FB reviews (currently "Not yet rated").
- [ ] **Core directories:** Justdial, Practo, Lybrate, Sulekha, Bing Places, Apple Maps, IndiaMART (if relevant), local Amravati business directories, hospital-finder sites.
- [ ] **Identical NAP everywhere.** Even formatting differences ("opp." vs "opposite") should be standardized.
- [ ] **Practo / Lybrate doctor profiles** for each consultant (Dr. Manan, Dr. Manjushree, Dr. Darshana, Dr. Murlidhar) — these rank and feed patient trust.
- [ ] Claim/clean any duplicate or stale listings (the old WP/staging references) so they don't compete or confuse.

**Owner action; Claude can compile the exact NAP block + a directory checklist and pre-write each profile.**

---

## Phase 4 — Content Depth & Topical Authority / AEO (Weeks 4–16, ongoing)
Rank #1 for the head terms by owning the *topic*, and win AI-Overview/assistant citations by being the clearest answer. The autodraft task (Tue & Fri, tri-lingual .md) already feeds this — this phase makes it strategic.

- [ ] **Strengthen the 3 money landing pages** (best-ivf-centre / best-gynecologist / best-laparoscopic-surgeon in Amravati): make each genuinely the most complete page on the web for that query — procedure detail, who it's for, what to expect, cost ranges, FAQs, doctor credentials, real outcomes/volume stats, internal links. These are the pages meant to hit #1.
- [ ] **Topic clusters:** each treatment page (pillar) surrounded by supporting blog posts that link up to it (e.g. IVF pillar ← AMH, IUI-vs-IVF, IVF cost, male infertility, IVF success by age). Internal linking builds authority.
- [ ] **AEO formatting:** lead with a direct one-sentence answer, use clear H2 questions, keep FAQ schema, use plain language. This is what gets pulled into AI Overviews and ChatGPT/Perplexity answers.
- [ ] **Content-gap research:** identify the questions Amravati/Vidarbha patients actually search (Claude can pull these from GSC "Performance → Queries" once data grows, plus keyword research) and fill missing ones.
- [ ] **E-E-A-T:** every medical post keeps the "Medically reviewed by Dr. …" line + credentials + disclaimer (already the standard). Add author bio pages/links. This matters disproportionately for YMYL health content.
- [ ] Keep hi/mr parity — Vidarbha searches happen in Hindi & Marathi; less competition there = faster #1.

**Claude-led with owner review; this is where the recurring blog task plus targeted rewrites live.**

---

## Phase 5 — Authority & Links / Digital PR (Weeks 8–24, ongoing)
Backlinks from relevant, trusted sites remain a core ranking factor — especially to lift the money pages past competitors.

- [ ] **Local & medical relevance links:** local news (Amravati/Vidarbha outlets), health awareness features, doctor guest columns, hospital association / accreditation pages, university/alumni pages for the doctors' credentials.
- [ ] **Digital PR angles:** milestone stories (1,000+ IVF cycles, 20,000+ deliveries, 3D-laparoscopy in the district, 30 yrs since 1995), awareness-day tie-ins, patient success stories (with consent).
- [ ] **Doctor thought-leadership:** Dr. Manan's YouTube (gyn-endoscopy) → embed on-site + earn links; guest articles on health portals.
- [ ] **Unlink brand mentions → links:** find places the hospital is named but not linked, request a link.
- [ ] Avoid paid link schemes / low-quality directories — for a medical site these can hurt.

**Owner + Claude: Claude can build the media/link target list and draft pitches/press notes.**

---

## Phase 6 — Measure, Monitor & Iterate (continuous)
- [ ] **GSC weekly:** indexing coverage (target: 116/116), Performance → top queries & positions, any errors, hreflang/coverage. Watch old WP URLs for 404s → add redirects in `public/_redirects`.
- [ ] **Rank tracking:** track the priority terms (best IVF/gynecologist/laparoscopic surgeon in Amravati; IVF cost Amravati; etc.) monthly, en/hi/mr.
- [ ] **Review velocity:** track Google reviews/month and the delta vs top local competitors (not just totals). Baseline 2026-07-17: 412 reviews, 4.8★. While in there, re-sync `GOOGLE_RATING` in `src/consts.ts`.
- [ ] **AI-Overview / assistant monitoring:** periodically query the money terms in Google (AI Overview), ChatGPT, Perplexity, Gemini — see whether Shubham is cited; adjust content to close gaps.
- [ ] **Core Web Vitals:** re-check PageSpeed after content/image additions; keep LCP/CLS green (add explicit image width/height — the one open PSI item).
- [ ] **Competitor watch:** review counts, new pages, new links monthly.

**Can be a scheduled recurring task (e.g. monthly GSC + rank digest). Ask Claude to set it up.**

---

## Priority order at a glance
1. **GBP + reviews** (Phase 1–2) — fastest, biggest local lift, feeds AI Overviews.
2. **Citations/NAP** (Phase 3) — cements local entity trust.
3. **Money-page depth + clusters** (Phase 4) — wins the head terms & AI citations.
4. **Links/PR** (Phase 5) — pushes past competitors, compounds over time.
5. **Measure & iterate** (Phase 6) — continuous.

Realistic timeline: local Map-Pack movement in weeks; competitive #1 organic positions and consistent AI-Overview citations over ~3–6 months of steady execution.
