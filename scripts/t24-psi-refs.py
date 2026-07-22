#!/usr/bin/env python3
"""T24: PageSpeed mobile follow-ups (run from repo root; CI does this).

Pairs with .github/workflows/t24-psi-image-refresh.yml which generates the
hero/logo image variants from files already in the repo. Aborts loudly if any
expected pattern is missing so CI fails instead of committing partial edits.
"""
import pathlib, sys

root = pathlib.Path("shubham-hospitals-site")

def edit(path, old, new, base=None):
    p = (base or root) / path
    s = p.read_text()
    if old not in s:
        sys.exit(f"PATTERN NOT FOUND in {path}: {old[:80]}...")
    p.write_text(s.replace(old, new, 1))
    print(f"edited {path}")

# 1. consts.ts: hero srcset/sizes constants
edit("src/consts.ts",
     "heroImage: '/images/hero-hospital.webp',",
     "heroImage: '/images/hero-hospital.webp',\n"
     "  heroSrcset: '/images/hero-hospital-480.webp 480w, /images/hero-hospital-768.webp 768w, /images/hero-hospital-1080.webp 1080w, /images/hero-hospital-1440.webp 1440w, /images/hero-hospital.webp 1920w',\n"
     "  heroSizes: '(max-width: 820px) 100vw, 48vw',")

# 2. HomeBody hero img: responsive + correct intrinsic ratio (file is 1920x1248)
edit("src/components/HomeBody.astro",
     '<img class="hero-photo" src={SITE.heroImage} alt="Compassionate gynecology and maternity care at Shubham Hi-Tech Hospital, Amravati" loading="eager" fetchpriority="high" width="900" height="1000" />',
     '<img class="hero-photo" src={SITE.heroImage} srcset={SITE.heroSrcset} sizes={SITE.heroSizes} alt="Compassionate gynecology and maternity care at Shubham Hi-Tech Hospital, Amravati" loading="eager" fetchpriority="high" width="1920" height="1248" />')

# 3. BaseLayout preload: responsive preload for the hero
edit("src/layouts/BaseLayout.astro",
     '{preloadImage && <link rel="preload" as="image" href={preloadImage} fetchpriority="high" />}',
     '{preloadImage && <link rel="preload" as="image" href={preloadImage} imagesrcset={preloadImage === SITE.heroImage ? SITE.heroSrcset : undefined} imagesizes={preloadImage === SITE.heroImage ? SITE.heroSizes : undefined} fetchpriority="high" />}')

# 4. Header logo: serve 300px on 1x screens (rendered ~287px wide)
edit("src/layouts/BaseLayout.astro",
     '<img src={SITE.logoHeader} alt={`${SITE.name} logo`} width="600" height="212" />',
     '<img src={SITE.logoHeader} srcset="/images/logo-300.png 300w, /images/logo.png 600w" sizes="287px" alt={`${SITE.name} logo`} width="600" height="212" />')

# 5. Footer white logo: explicit height (400x141 intrinsic -> 200x71)
edit("src/layouts/BaseLayout.astro",
     '<img src={SITE.logoWhite} alt={`${SITE.name} logo`} width="200" loading="lazy" />',
     '<img src={SITE.logoWhite} alt={`${SITE.name} logo`} width="200" height="71" loading="lazy" />')

# 6. WhatsApp button: WCAG AA contrast (white on #25D366 = 1.98:1 fail;
#    WhatsApp's own dark teal #075E54 = 7.7:1 pass)
edit("src/styles/global.css",
     ".btn-whatsapp { background: #25D366; color: #fff !important; box-shadow: var(--shadow-sm); }",
     ".btn-whatsapp { background: #075E54; color: #fff !important; box-shadow: var(--shadow-sm); }")
edit("src/styles/global.css",
     ".btn-whatsapp:hover { background: #1ebe57; }",
     ".btn-whatsapp:hover { background: #0a7d6e; }")

# 7. MASTER-EXECUTION-PLAN.md: T24 section + session log
plan = pathlib.Path("MASTER-EXECUTION-PLAN.md")
s = plan.read_text()
T24 = """### T24. PageSpeed mobile follow-ups (hero srcset, logo variants, contrast)
**Status:** `DONE (pending deploy)`
**Problem (PSI mobile 2026-07-22, score 89):** LCP 3.7s driven by the 152KB 1920px hero webp served to phones ("Improve image delivery - 166 KiB"); header logo 600px served at 287px; footer white logo missing explicit height; white-on-#25D366 WhatsApp buttons fail WCAG contrast (a11y 96); laparoscopy-3d.webp under-compressed.
**Notes (2026-07-22):** Same CI pattern as T15 (`scripts/t24-psi-refs.py` + `t24-psi-image-refresh.yml`) - all image variants generated from files ALREADY IN THE REPO (no downloads): hero 480/768/1080/1440 webp q78, logo-300.png, laparoscopy-3d recompressed q75. Ref edits: hero srcset/sizes (sizes `(max-width:820px) 100vw, 48vw`) + responsive preload via imagesrcset in BaseLayout; header logo srcset; footer logo height=71; .btn-whatsapp #25D366 -> #075E54 (7.7:1, WhatsApp's own dark teal; hover #0a7d6e). Remaining PSI items intentionally skipped: Cloudflare beacon cache TTL (dashboard-side, ~5KiB - toggle Cloudflare Web Analytics if desired), "Forced reflow"/"Network dependency tree" diagnostics (no score weight).

"""
anchor = "## \U0001F4CC Standing rules for all tasks"
assert anchor in s, "standing-rules anchor not found"
s = s.replace(anchor, T24 + "---\n\n" + anchor, 1)
logmark = "| 2026-07-21 | Claude (Cowork) | T15 | DONE (pending deploy) | Unblocked via GitHub Actions: runner downloaded originals, committed WebP + ref updates in one bot commit; CI build-gated |"
assert logmark in s, "session log anchor not found"
s = s.replace(logmark, logmark + "\n| 2026-07-22 | Claude (Cowork) | T24 (new) | DONE (pending deploy) | PSI mobile 89: hero srcset + responsive preload, logo-300, footer logo height, WhatsApp contrast #075E54, laparo recompress; via T15-style CI |", 1)
plan.write_text(s)
print("edited MASTER-EXECUTION-PLAN.md")
print("OK - all T24 reference edits applied")
