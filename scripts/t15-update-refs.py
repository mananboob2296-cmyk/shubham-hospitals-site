#!/usr/bin/env python3
"""T15: point image references at optimized local assets + add srcset/lazy-loading.

Run from the repo root (CI does this). Aborts loudly if any expected pattern
is missing so the workflow fails instead of committing a partial change.
"""
import re, pathlib, sys

root = pathlib.Path("shubham-hospitals-site")
changed = []

def edit(path, fn):
    p = root / path
    s = p.read_text()
    s2 = fn(s)
    if s2 == s:
        sys.exit(f"NO CHANGE made in {path} - pattern not found, aborting")
    p.write_text(s2)
    changed.append(path)

# 1. Doctor photo fields -> local WebP (EN/HI/MR x 4)
for loc in ["", "hi/", "mr/"]:
    for slug in ["dr-manan", "dr-manjushree", "dr-murlidhar", "dr-darshana"]:
        edit(f"src/content/doctors/{loc}{slug}.md",
             lambda s, slug=slug: re.sub(r'photo: "https://shubham-hospitals\.com/wp-content/[^"]+"',
                                         f'photo: "/images/doctors/{slug}-480.webp"', s, count=1))

# 2. consts.ts -> local logo set
def consts(s):
    s = s.replace("logoWhite: 'https://shubham-hospitals.com/wp-content/uploads/2026/06/Shubham-White-Logo.png'",
                  "logoWhite: '/images/logo-white.webp'")
    s = s.replace("favicon: 'https://shubham-hospitals.com/wp-content/uploads/2025/09/cropped-Shubham-Hospital-Favicon-New-270x270.png'",
                  "favicon: '/images/favicon.png'")
    s = s.replace("ogImage: 'https://shubham-hospitals.com/wp-content/uploads/2026/06/Shubham-Final-Logo-scaled.png'",
                  "ogImage: 'https://shubham-hospitals.com/images/og-logo.png'")
    return s
edit("src/consts.ts", consts)

# 3. Doctor card imgs: add srcset/sizes (4 files, identical pattern)
CARD_OLD = '<img src={d.data.photo} alt={d.data.name} loading="lazy" width="170" height="170" />'
CARD_NEW = '<img src={d.data.photo} srcset={`${d.data.photo.replace(\'-480\', \'-240\')} 240w, ${d.data.photo} 480w`} sizes="170px" alt={d.data.name} loading="lazy" width="170" height="170" />'
for f in ["src/pages/doctors.astro", "src/pages/hi/doctors.astro", "src/pages/mr/doctors.astro", "src/components/HomeBody.astro"]:
    edit(f, lambda s: s.replace(CARD_OLD, CARD_NEW))

# 4. Doctor profile imgs: add srcset/sizes (3 files)
PROF_OLD = 'src={%s.photo} alt={%s.name} width="240" height="240"'
PROF_NEW = 'src={%s.photo} srcset={`${%s.photo.replace(\'-480\', \'-240\')} 240w, ${%s.photo} 480w`} sizes="240px" alt={%s.name} width="240" height="240"'
edit("src/pages/[...slug].astro", lambda s: s.replace(PROF_OLD % ("entry.data", "entry.data"), PROF_NEW % (("entry.data",)*4)))
edit("src/pages/hi/[slug].astro", lambda s: s.replace(PROF_OLD % ("e", "e"), PROF_NEW % (("e",)*4)))
edit("src/pages/mr/[slug].astro", lambda s: s.replace(PROF_OLD % ("e", "e"), PROF_NEW % (("e",)*4)))

# 5. og:image -> absolute URL (doctor photos are now root-relative)
edit("src/layouts/BaseLayout.astro",
     lambda s: s.replace('content={ogImage ?? SITE.ogImage}',
                         'content={new URL(ogImage ?? SITE.ogImage, SITE.url).href}'))

# 6. Blog figure images: lazy-load (3 files)
for loc in ["en", "hi", "mr"]:
    edit(f"src/content/blog/{loc}/male-infertility-amravati-causes-tests-specialist.md",
         lambda s: s.replace('<figure><img src=', '<figure><img loading="lazy" decoding="async" src=', 1))

print(f"OK - {len(changed)} files updated")

# 7. MASTER-EXECUTION-PLAN.md - status, notes, session log (repo root)
NOTE = ("**Notes (2026-07-21):** DONE via GitHub Actions workaround. The Git-contents API indeed cannot carry binaries, "
        "so this session committed text-only tooling: `.github/workflows/t15-image-optimization.yml` + `scripts/t15-update-refs.py`. "
        "The Actions runner (full network + GITHUB_TOKEN) downloaded the 4 doctor JPGs, white logo, scaled logo and favicon from the "
        "live site (browser UA), converted them (doctor photos 480px+240px WebP q82 in `public/images/doctors/`; `logo-white.webp` 400w; "
        "`og-logo.png` 1200w PNG kept for og:image compatibility; `favicon.png` 96px), then ran the ref-update script: 12 doctor md "
        "`photo:` fields -> local WebP; consts.ts logoWhite/favicon/ogImage -> local; `srcset`/`sizes` added on 4 card renders + 3 "
        "profile pages; og:image absolutized via `new URL(...)` in BaseLayout (doctor photos are now root-relative); "
        "`loading=\"lazy\" decoding=\"async\"` on the 3 male-infertility blog figures. CI gated the commit on `npm run build` + dist greps. "
        "Also verified locally in sandbox pre-push (build passes, 117 pages; srcset/og/favicon spot-checked in dist). Workflow is "
        "idempotent (skips if assets already exist), re-runnable via workflow_dispatch, and safe to delete once deploy is confirmed. "
        "Remaining nice-to-have: homepage hero srcset (single 152KB webp today) was NOT changed - optional follow-up.")
LOGROW = "| 2026-07-21 | Claude (Cowork) | T15 | DONE (pending deploy) | Unblocked via GitHub Actions: runner downloaded originals, committed WebP + ref updates in one bot commit; CI build-gated |"

p = pathlib.Path("MASTER-EXECUTION-PLAN.md")
s = p.read_text()
assert "**Status:** `BLOCKED: binary image assets can't be committed via the Git-over-API workflow`" in s, "T15 status line not found"
s = s.replace("**Status:** `BLOCKED: binary image assets can't be committed via the Git-over-API workflow`",
              "**Status:** `DONE (pending deploy)`", 1)
assert "**Notes:** 2026-07-18. PARTIALLY BLOCKED." in s, "T15 notes anchor not found"
s = s.replace("**Notes:** 2026-07-18. PARTIALLY BLOCKED.",
              NOTE + "\n**Notes:** 2026-07-18. PARTIALLY BLOCKED.", 1)
marker = "T15 blocked: cannot commit binary WebP assets via API |"
assert marker in s, "session-log anchor not found"
s = s.replace(marker, marker + "\n" + LOGROW, 1)
p.write_text(s)
print("OK - plan file updated")
