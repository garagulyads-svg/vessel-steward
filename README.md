# Vessel Steward — website

Static, dependency-free multi-page site for Vessel Steward, built for
GitHub Pages. No build step, no framework, no backend beyond an
optional third-party form service for the contact form.

## Project structure

```
vessel-steward/
├── index.html              Home
├── stewardship.html         Stewardship
├── restoration-care.html    Restoration & Care
├── our-work.html             Our Work (case studies)
├── about.html                About (footer-linked only)
├── contact.html              Contact form
├── privacy.html               Privacy policy placeholder
├── css/
│   ├── tokens.css            Colors, type, spacing — edit here to restyle
│   ├── base.css               Resets, typography, buttons, placeholders
│   ├── layout.css              Header, mobile menu, footer
│   └── components.css           Section-specific components
├── js/
│   ├── components.js            Injects the shared header/footer (edit nav links here)
│   └── main.js                   Mobile menu + FAQ accordion behavior
├── data/
│   └── projects.js                 Our Work case-study data
└── images/                          Image placeholders — see images/README.md
```

## Preview locally

No build tools required. From this folder, run any static server, e.g.:

```
python3 -m http.server 8000
```

Then open `http://localhost:8000`. (Opening the HTML files directly by
double-clicking also works, since everything is plain relative paths.)

## Editing the shared header/footer

The navigation and footer are injected by `js/components.js` on every
page (so they only need to be edited once). To change a nav link,
label, or footer column, edit the `NAV_LINKS` array or the
`renderHeader`/`renderFooter` functions in that file.

## Replacing image placeholders

See `images/README.md` for the full list of placeholder locations and
naming conventions.

## Editing pricing

- **Membership pricing** lives in `stewardship.html`, inside the
  `.pricing-card` block (search for `$300–$350`). It's explicitly
  flagged in the markup as a placeholder pending final pricing — remove
  the `.pricing-card__flag` span once real pricing is set.
- **Restoration & Care "starting from" pricing** lives in
  `restoration-care.html`, inside the pricing section (search for
  `Starting from $___`). Fill in a real number per service line.

## Adding a new Our Work project

Edit `data/projects.js` and add a new object to the `VS_PROJECTS`
array — both the homepage preview and the full Our Work page render
from this one file automatically, so no HTML edits are needed. Drop
the corresponding before/after photos into `images/work/`.

## Connecting the contact form

`contact.html` is a plain HTML form with no backend, since GitHub
Pages can't run server code. Before launch, connect a static-friendly
form service:

1. Create an account with a provider such as [Formspree](https://formspree.io),
   Getform, or Basin, and create an endpoint for this form.
2. In `contact.html`, set the `<form action="...">` attribute to that
   endpoint URL.
3. Follow your provider's docs for any additional hidden fields it
   needs, and for enabling file uploads (to replace the placeholder
   "Photo" upload box with a real file input).

Until this is connected, submitting the form will not send anything.

## Deploying to GitHub Pages

1. Create a new GitHub repository and push this folder's contents to
   its default branch (e.g. `main`).
2. In the repository, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to "Deploy from a
   branch," pick the branch (e.g. `main`) and the root (`/`) folder,
   then save.
4. GitHub will publish the site at `https://<username>.github.io/<repo>/`
   (or a custom domain, if you configure one under **Settings → Pages
   → Custom domain**).
5. Update the `og:url` and `og:image` meta tags in each page's `<head>`
   once the final domain is known.

## Notes on content

Per the brand brief, no pricing, testimonials, statistics, certifications,
team members, or business facts beyond what was supplied have been
invented anywhere on the site. Every such spot is a clearly labeled
placeholder — search the codebase for "placeholder" to find them all
before launch.
