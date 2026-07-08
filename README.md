# shubham-hosopitals-site
# Shubham Hospitals — Static Site (WordPress replacement)

Astro-based static rebuild of **shubham-hospitals.com**. No database, no PHP, no plugins — nothing to hack, nothing to slow down.

## What's inside

- **Same URLs as WordPress** — every published page/post keeps its exact path, so Google rankings carry over with zero redirects needed.
- `src/content/blog/` — 12 blog posts (Markdown, edit freely)
- `src/content/treatments/` — 7 department pages
- `src/content/doctors/` — 4 doctor profiles
- `src/content/landing/` — 3 SEO landing pages ("Best X in Amravati")
- `src/pages/` — home, about, contact, gallery, departments, doctors, blogs + the two digital visiting cards
- SEO built in: Yoast titles/descriptions migrated, MedicalClinic + Physician + BlogPosting + FAQPage schema, sitemap, robots.txt, OpenGraph
- Security headers via `public/_headers` (Cloudflare Pages)
- Appointment form opens WhatsApp (hospital main line) with pre-filled details — no third-party form service involved

## Local preview

```bash
npm install
npm run dev        # live preview at localhost:4321
npm run build      # production build into dist/
```

## Deploy (Cloudflare Pages — free)

1. Create a free account at github.com and push this folder as a repository.
2. Create a free account at pages.cloudflare.com → "Create a project" → connect the GitHub repo.
3. Framework preset: **Astro**. Build command `npm run build`, output directory `dist`. Deploy.
4. Test the `*.pages.dev` preview URL thoroughly.
5. In Cloudflare Pages → Custom domains, add `shubham-hospitals.com` and follow the DNS instructions (move the domain's nameservers to Cloudflare, keep existing email/MX records).
6. **Before cancelling WordPress hosting:** run `bash scripts/download-images.sh` on your computer (while WP is still live) to copy all images into this project, commit, and let Pages redeploy. Then the old host can be cancelled.
7. Google Search Console: submit `https://shubham-hospitals.com/sitemap-index.xml`.

## Publishing new content

Each blog post is one `.md` file in `src/content/blog/` with frontmatter (title, date, author, excerpt). Add a file → push to GitHub → Cloudflare rebuilds and publishes automatically (~1 minute). Claude can do this for you on a schedule via the GitHub connector.

## Notes

- Images currently load from the live WordPress site; step 6 above localizes them.
- The Google reviews widget was replaced with a direct link to the hospital's Google profile (no third-party JS).
- The `extract/` folder holds the raw extraction notes and the two visiting-card HTML files — keep it.

