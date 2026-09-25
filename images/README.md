# Image placeholders

The site currently renders all photography as labeled placeholder
boxes (dashed pattern + caption) so the layout can be reviewed before
real photos exist. Each placeholder is a `<div class="ph ...">` in the
HTML — to swap one for a real photo, replace the whole `<div class="ph ...">…</div>`
with an `<img>`, e.g.:

```html
<!-- before -->
<div class="ph ph--hero" role="img" aria-label="Placeholder: Vessel Steward working aboard an actual boat on O‘ahu">
  <span class="ph__label">Photo — Vessel Steward at work aboard a client vessel</span>
</div>

<!-- after -->
<img src="images/hero/steward-aboard.jpg" alt="Vessel Steward inspecting a hatch aboard a sailboat in an O‘ahu marina" loading="lazy">
```

Keep the `alt` text descriptive and specific (what's happening, not just
"boat photo") — this matters for accessibility and SEO.

## Where photos go

- `images/hero/` — hero and lifestyle shots (Steward at work, marina shots)
- `images/restoration/` — before/after and process shots for the
  Restoration & Care page (wood grain, teak, stainless, windows/gaskets,
  moisture damage)
- `images/work/` — before/after pairs for Our Work case studies. File
  names are referenced in `/data/projects.js` (`beforeImg`/`afterImg`) —
  keep names in sync, or update the paths in that file.
- `images/journal/` — optional real screenshots of the Digital Boat
  Care Journal, if you want to replace the built-in mockup in
  `css/components.css` (`.journal`) with real screenshots instead.

## Formats & performance

- Prefer WebP or AVIF with a JPEG fallback where practical.
- Add `loading="lazy"` to every `<img>` below the fold (already the
  default expectation across this codebase).
- Keep hero images under ~300KB and gallery/before-after images under
  ~200KB each for fast loads on GitHub Pages.
