# Grace Mussimbi — IT Support & Help Desk Portfolio

Built on the Davis Next.js portfolio template, converted to a light theme and
rewritten for IT support content.

## Two ways to look at it

**1. Quick preview, nothing to install.** Open
`grace-portfolio-preview\\index.html` (the folder sitting next to this one) by
double-clicking it. That is a pre-built static copy with the links rewritten to
work straight off the disk. Good enough to show someone; not the thing you edit.

**2. The real thing, for editing.** Requires Node 18 or newer from nodejs.org.

```
npm install
npm run dev      # http://localhost:3000 — live reload while you edit
npm run build    # regenerates the static site into out/
```

`next.config.mjs` is set to `output: 'export'`, so `npm run build` produces a
plain static site in `out/` — which is what static hosts (Vercel, Netlify,
GitHub Pages) want. To refresh the double-click preview after editing, rebuild
and copy `out/` over the preview folder.

## Where the content lives

| What | File |
|---|---|
| Hero, about, focus areas, environment, resume, contact | `src/app/Data.json` |
| The four lab writeups | `src/app/Labs.json` |
| Colour palette | `src/app/sass/default/_variable.scss` |
| Lab screenshots | `public/images/labs/` |
| Topology diagram + lab cards | `public/images/section/`, `public/images/portfolio/` |
| Public résumé PDF | `public/Grace-Mussimbi-Resume.pdf` |

To add a fifth lab writeup: add an entry to `Labs.json` and a matching entry in
`Data.json` → `portfolioData.portfolioItems` with `href: "/labs/lab05"`.

## Deliberate decisions

- **No phone number or street address anywhere on the site.** Contact routes are
  email and LinkedIn. The résumé PDF in `public/` is the phone-stripped version;
  keep the full one for ATS applications only.
- **No photo.** The image slots use the lab topology diagram instead.
- **No skill percentage bars.** Replaced with a factual environment spec table.
- **No testimonials or blog.** The template's placeholder versions were removed
  rather than filled with invented content.
- **Icons are self-hosted** (`src/app/ui/Icons/Icons.jsx`) rather than fetched
  from the Iconify API at runtime.

## Still to do

- Fill in the real LinkedIn and GitHub URLs in `Data.json` → `socialData`.
- Wire the contact form to a Formspree endpoint in `src/app/ui/Contact/Contact.jsx`
  (replace `action="#"` with the endpoint and set `method="POST"`).
- Replace `[LinkedIn URL]` / `[Portfolio URL]` in the résumé once the site has a
  domain.
