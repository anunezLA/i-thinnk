# i+Thinnk® — Production site

Single-file deploy package. Drop on any static host (GitHub Pages, Vercel, Netlify, Cloudflare Pages, S3, plain FTP).

## Contents
```
dist/
├── index.html        ← single-page site, all CSS inlined
└── img/
    ├── hero-mill.jpg
    └── control-room.jpg
```

## What's included
- Full marketing site, no build step required
- Inlined CSS, no external bundles
- Self-hosted photography (no Unsplash hotlinks)
- SEO: canonical URL, meta description, Open Graph, Twitter Card, JSON-LD `ProfessionalService`
- Accessibility: skip-link, `<main>` landmark, focus-visible outlines, `prefers-reduced-motion` respected, AAA-passing body contrast (`#7A6B58`)
- Performance: Google Fonts preconnect + `display=swap`, lazy-loaded About photo, intrinsic `width`/`height` on images (no CLS)
- Mobile breakpoint at 768px
- Inline SVG favicon (no extra request)

## Deploy to GitHub Pages
1. Push the `dist/` folder contents to a new repo (or to a `gh-pages` branch).
2. Settings → Pages → Source = main, folder = `/`.
3. Add a `CNAME` file containing `i-thinnk.com` if pointing your custom domain.
4. Done.

## Update the canonical URL
The `<link rel="canonical">`, OG `og:url`, and OG `og:image` are pinned to `https://i-thinnk.com/`. If you deploy under a different domain, edit those three URLs.

## Replacing photos
Drop new files into `dist/img/` keeping the names `hero-mill.jpg` and `control-room.jpg`, OR update the two `<img src="img/...">` references in `index.html`.

## What's NOT in here (intentional)
- No analytics — add GA4 / Plausible / Fathom if you need it
- No cookie banner — only required if you add tracking
- No contact form — current CTAs go straight to `tel:` and `mailto:`
- No service worker / offline mode
