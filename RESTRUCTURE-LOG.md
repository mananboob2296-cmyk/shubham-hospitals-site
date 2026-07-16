# Restructure Log — shubham-hospitals-site

## Working branch

`claude/md-restructure` is the active branch. The project lives in `shubham-hospitals-site/` and uses Astro with Cloudflare Pages.

## Completed

- [x] Restructured blog content into language folders:
  - `src/content/blog/en/`
  - `src/content/blog/hi/`
  - `src/content/blog/mr/`
- [x] Standardised all blog frontmatter to include the language code and YAML FAQ data:
  - English: `lang: en`
  - Hindi: `lang: hi`
  - Marathi: `lang: mr`
  - FAQs use `faqs:` in frontmatter; legacy JSON-LD FAQ blocks were removed.
- [x] Added all current English blog posts and their Hindi and Marathi counterparts:
  - 17 English posts
  - 17 Hindi posts
  - 17 Marathi posts
  - Matching slugs are present across all three folders.
- [x] Added the newer Double Marker Test and IVF Process posts to all language folders.
- [x] Updated blog templates to render the YAML FAQs as one visible FAQ section.
- [x] Removed duplicate inline FAQ HTML from English, Hindi, and Marathi article bodies.
- [x] Preserved HTML article content, internal links, CTAs, and medical acronyms/scientific terms where appropriate.
- [x] Created matching local Markdown folders during the content work:
  - `Desktop/Hindi_Blog_Posts/`
  - `Desktop/Marathi_Blog_Posts/`

## Important implementation notes

- Blog routes derive language availability from the content collection and use matching slugs for language switching.
- The English blog template renders `FaqSection` when `entry.data.faqs` is populated.
- Hindi and Marathi blog templates also render `FaqSection`; their old body-level FAQ blocks were removed to prevent duplication.

## Verified build

- [x] Fresh `npm install` and `npm run build` completed successfully on `claude/md-restructure`.
- [x] Astro generated 117 static pages, including all 17 English, Hindi, and Marathi blog routes.

## Next step

1. Deploy a preview and smoke-test:
   - one English, Hindi, and Marathi article;
   - the two newest posts;
   - an article with FAQs (for example, Male Infertility) to confirm exactly one FAQ section appears.
2. Open a PR from `claude/md-restructure` to `main`, merge after the preview passes, then point Cloudflare Pages to `main`.
