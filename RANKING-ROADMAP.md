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

- [ ] **Claim & fully verify the GBP** for Shubham Hi-Tech Hospital and Test Tube Baby Centre. Confirm ownership, not just management.
- [ ] **NAP consistency:** Name, Address, Phone must match the website *exactly* (Badnera Rd, opp. Mantri Motors, Deorankar Nagar, Amravati, Maharashtra 444605 · +91-8668954915). Any mismatch across the web dilutes ranking.
- [ ] **Primary category:** "Fertility clinic" or "Obstetrician-gynecologist" (test which fits the main money term). Add secondary categories: Hospital, Gynecologist, Surgeon, Reproductive health clinic, Fetal medicine.
- [ ] **Complete every field:** services (list IVF, IUI, ICSI, laparoscopy, hysteroscopy, high-risk pregnancy, anomaly scan, etc.), OPD hours (Mon–Sat 11–5 & 7–9:30, Sun closed, 24×7 emergency), attributes, description, appointment link → `/contact-us/#book`.
- [ ] **Photos:** 15–25 real photos — exterior, reception, OT, 3D laparoscopy setup, ultrasound room, the doctors, team. Geo-relevant, high quality. Refresh monthly.
- [ ] **GBP Posts:** publish a short update weekly (offer, health tip, new service) — signals activity.
- [ ] **Products/Services with prices or "on request"** where appropriate (IVF, laparoscopy consultation).
- [ ] Link GBP → website homepage and to relevant treatment pages.

**Owner action; Claude can draft the description, service list, and weekly GBP post copy in en/hi/mr.**

---

## Phase 2 — Reviews & Reputation (Weeks 2–8, then ongoing) — trust signal #1 for medical
Reviews drive both Map-Pack ranking and patient conversion, and are a strong YMYL trust signal.

- [ ] **Systematic review collection:** a simple flow to ask happy patients for a Google review at discharge/follow-up (QR card at reception, WhatsApp follow-up link). Target a steady trickle (e.g. 5–10/month) rather than a spike.
- [ ] **Respond to every review** — thank positive ones by name; respond to any negative one calmly, professionally, without disclosing medical details (privacy). Response rate is itself a ranking/trust signal.
- [ ] **Aim past competitors** on both review count and average rating for "IVF Amravati" / "gynecologist Amravati". Track competitor counts monthly.
- [ ] Encourage a few reviews to mention the *service + city* naturally ("IVF at Shubham in Amravati") — helps relevance.
- [ ] Once real ratings exist, add `aggregateRating` to schema (optional Phase-0 leftover).

**Owner action; Claude can draft the review-request message (en/hi/mr) and a response template bank.**

---

## Phase 3 — Local Citations & NAP (Weeks 3–6)
Consistent listings across directories reinforce that the clinic is a real, established local entity — a signal Google and AI systems both use.

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
