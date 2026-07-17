# Blog posts — how to add or translate one

Each post is a single `.md` file. The folder decides the language:

| Folder | Language | Final URL |
|--------|----------|-----------|
| `en/`  | English  | `/<filename>/` |
| `hi/`  | Hindi    | `/hi/blogs/<filename>/` |
| `mr/`  | Marathi  | `/mr/blogs/<filename>/` |

A translation is linked to its English post by using the **same filename**.
Example: `en/do-i-have-pcos-signs-every-woman-in-amravati-should-know.md` and
`hi/do-i-have-pcos-signs-every-woman-in-amravati-should-know.md` are the same
article in two languages.

To publish: upload the `.md` file into the right folder using the GitHub web UI
(Add file → Upload files). Cloudflare Pages rebuilds the site automatically.
No code changes are needed.

## Frontmatter template (copy this, keep the `---` lines)

```markdown
---
title: "Post title, in the post's own language"
date: 2026-06-26
author: "डॉ. मंजूश्री बूब"
excerpt: "One–two sentence summary in the post's language. Shown on the blog listing and in Google."
lang: hi
faqs:
  - q: "First question, in the post's language?"
    a: "Answer text."
  - q: "Second question?"
    a: "Answer text."
---

Intro paragraph here. Plain Markdown.

## Section heading

Paragraph text. Link like this: [संपर्क पृष्ठ](/hi/contact-us/).

### Sub-heading

More text. Bold like **this**.
```

## Rules

- `date`: the original English publish date, `yyyy-mm-dd`, no quotes.
- `lang`: `en`, `hi` or `mr` — must match the folder.
- `excerpt`, `title`, `author`, FAQ text: always in the post's own language.
- `faqs` are optional. When present they are rendered as an FAQ section on the
  page and emitted as FAQPage structured data automatically.
- Optional: `image: "/images/....webp"` and `imageAlt: "description"` for a hero image.
- Links inside a Hindi post should point to `/hi/...` pages, Marathi to `/mr/...`.
- **Always end the post body with the one-line medical disclaimer in italics, in
  the post's own language** (copy the exact line from any existing post in the
  same folder). The page template does NOT add one — every language, every post,
  carries it in the body. Exactly once.
- Wording: always team-focused. Never write "led by Dr. …" / "के नेतृत्व में" /
  "यांच्या नेतृत्वाखाली".
- Devanagari: paste text directly; make sure no invisible control characters
  come along from Word/PDF copy-paste.

Note: this file starts with an underscore so the site build ignores it.
