# Image placeholders

Every photo on the site is currently a labeled placeholder box
(`<div class="ph ...">`) so the layout can be reviewed before real
photography exists. To swap one in, replace the whole placeholder
`<div>` with an `<img>`, e.g.:

```html
<!-- before -->
<div class="ph ph--hero" role="img" aria-label="Placeholder: Vessel Steward at work aboard a client vessel">
  <span class="ph__label">Photo — Vessel Steward at work aboard</span>
</div>

<!-- after -->
<img src="images/hero/steward-aboard.jpg" alt="Vessel Steward inspecting a hatch aboard a sailboat in an O‘ahu marina" loading="lazy">
```

Keep `alt` text specific (what's happening, where) — it matters for
accessibility and SEO.

## Where photos go

- `images/hero/` — hero and lifestyle photography (Home, Stewardship)
- `images/stewardship/` — optional real screenshots of the Digital
  Boat Care Journal, to replace the built-in mockup in
  `css/components.css` (`.journal`)
- `images/restoration/` — general Restoration & Care photography
- `images/work/` — Our Work before/during/after sequences. File
  names are referenced in `/data/work-projects.js`
  (`beforeImg`/`duringImg`/`afterImg`) — keep names in sync, or
  update the paths there.

## Formats & performance

- Prefer WebP or AVIF with a JPEG fallback where practical.
- Add `loading="lazy"` to every `<img>` below the fold.
- Keep hero images under ~300KB and before/during/after images under
  ~200KB each for fast loads on GitHub Pages.
