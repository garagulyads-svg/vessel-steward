# Vessel Steward — website

Static, dependency-free multi-page site for Vessel Steward, built for
GitHub Pages. No build step, no framework, no backend. Content and
structure follow the approved copy document; see "Source of truth"
below.

## Project structure

```
vessel-steward/
├── index.html               Home
├── stewardship.html          Stewardship Membership
├── restoration-care.html      Restoration & Care (six-category accordion)
├── our-work.html                Our Work (project portfolio)
├── contact.html                  Contact (call / text / email — no form)
├── privacy.html                   Privacy Policy
├── terms.html                      Terms & Service Disclaimer
├── css/
│   ├── tokens.css                  Colors, type, spacing — edit here to restyle
│   ├── base.css                     Resets, typography, buttons, placeholders
│   ├── layout.css                    Header, mobile menu, footer
│   └── components.css                 Accordions, pricing, journal mockup, etc.
├── js/
│   ├── components.js                   Injects the shared header/footer
│   ├── main.js                           Mobile menu behavior
│   └── accordion.js                       Accordion behavior (single + multi)
├── data/
│   ├── business-info.js                    Phone/email placeholders — edit once here
│   └── work-projects.js                      Our Work project data
└── images/                                    Image placeholders — see images/README.md
```

## Source of truth

Page copy, pricing, the six-category Restoration & Care accordion, the
three Stewardship checklists, and the legal pages all come directly
from the approved copy document. Visual design, layout and
interaction patterns were built fresh around that content; copy was
not rewritten or expanded beyond very small adjustments needed for
layout.

## Preview locally

```
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Before launch: business details

Real phone and email were not supplied, so placeholders are used
everywhere. Edit **`data/business-info.js`** once — both pages that
show the number/email (Contact, footer, Privacy Policy) read from
that one file:

```js
window.VS_BUSINESS = {
  phoneDisplay: "(808) 555-0100",       // what visitors read
  phoneHref: "tel:+18085550100",         // tap-to-call link
  smsHref: "sms:+18085550100",            // tap-to-text link
  emailDisplay: "aloha@vesselsteward.com",
  emailHref: "mailto:aloha@vesselsteward.com",
};
```

Also replace `[Date — add before launch]` in `privacy.html` and
`terms.html` with the actual effective date, and `[Business Email]` /
phone references there update automatically once `business-info.js`
is filled in.

## Editing pricing

Membership pricing lives in `stewardship.html`, in the "Pricing"
section — two `.pricing-card` blocks ($350/month up to 35 ft,
$490/month for 43–55 ft) plus a shared "Both memberships include"
list. Edit the numbers or list items directly; nothing else needs to
change.

## Editing the Restoration & Care accordion

All six categories live in `restoration-care.html` as
`.accordion-row` blocks inside one `data-accordion="single"`
container (only one row opens at a time, enforced by
`js/accordion.js`). Each row has a closed-state title + short preview
line, and an expanded two-column `<ul class="service-list">`. Add,
remove or reorder `<li>` items freely — the two-column layout is
automatic via CSS.

## Editing the Stewardship checklists

The three collapsible checklists (Exterior / Interior / Basic
Systems) live in `stewardship.html` inside one
`data-accordion="multi"` container — rows there open independently of
each other (unlike the Restoration & Care accordion).

## Adding a new Our Work project

Edit `data/work-projects.js` and add an object to
`VS_WORK_PROJECTS` — the homepage preview and the full Our Work page
both render from this one file. Drop the corresponding
before/during/after photos into `images/work/`. No project claims,
vessel names or results have been invented; add factual details only
once they're supplied.

## Deploying to GitHub Pages

1. Push this folder's contents to a GitHub repository's default
   branch (e.g. `main`). The included `.nojekyll` file prevents GitHub
   from running Jekyll processing over the static files.
2. In the repository, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to "Deploy from a
   branch," pick the branch and the root (`/`) folder, then save.
4. GitHub publishes the site at `https://<username>.github.io/<repo>/`
   (or a custom domain under **Settings → Pages → Custom domain**).
5. Update the `og:url` meta tag in each page's `<head>` once the final
   domain is known.

## Notes on content

Per the brief, no testimonials, statistics, certifications, client or
vessel names, savings claims, or business facts beyond what was
supplied have been invented anywhere on the site. Search the codebase
for "placeholder" or "add before launch" to find every spot that
still needs real content before launch.
