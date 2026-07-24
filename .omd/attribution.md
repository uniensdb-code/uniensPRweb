# Attribution — UNIENS home page (index.html)

Sources for every shipped token group, plus the composition, motion, and reference-assembly
decisions behind this build. No raw source pixel, screenshot, URL, or hostname is shipped
anywhere on this page — only sanitized structural/visual principles and the site's own
pre-existing production tokens, per `.omd/composition.md`'s Transfer boundary.

## Token attribution (required table)

| Group | Source |
| --- | --- |
| color | theory/color |
| type | theory/typography |
| radius | theory/layout |
| motion | theory/motion |

- **color** — `--color-primary` (#0A2342), `--color-accent`/`--color-accent-dk`
  (#1A5FA8/#144D8C), `--color-light`, `--color-border`, `--color-muted`, etc. are the
  existing production tokens already declared in `css/style.css`'s `:root` block, predating
  this run; this build reuses them verbatim and introduces no new colour value anywhere in
  `index.html` or its new CSS. `theory/color` is cited because the *strategy* applied to
  those existing tokens — a legible 60-30-10 distribution with the accent colour reserved
  for the primary action (the single `.btn--primary`/`.proof-stat`/`.section-head__eyebrow`
  accent uses) rather than spread as per-element decoration — follows that theory file's
  reserved-accent rule; the swatch values themselves are the site's own, not theory-sourced.
- **type** — `Noto Sans KR` (400/500/700/800), already loaded via the existing Google Fonts
  `<link>` on every page of this site. `theory/typography` is cited for the applied
  hierarchy discipline (the hero's 500→800 two-weight kinetic-type jump, the `word-break:
  keep-all` Korean-wrapping rule, and the `.id-token{white-space:nowrap}` scoped-identifier
  rule) — all specified and proved in `.omd/type-proof.md`, which is itself the authoritative
  binding record for every requested/computed family, weight, and wrap rule shipped here.
- **radius** — `--radius: 4px` is the existing production token (`css/style.css` header
  comment: "직선·얇은 선·넓은 여백 / 둥글기 최소화" — straight lines, thin lines, wide
  whitespace, minimal rounding). `theory/layout` is cited for the sharp/square, hairline-
  divider, high-whitespace composition grammar this build extends into five new sections
  (`.proof-rail`, `.process-rail`, `.teaser-grid`, `.final-cta`) rather than introducing any
  rounded/soft/shadow-heavy pattern.
- **motion** — `theory/motion` is cited for the restraint rationale recorded in full in
  `.omd/motion-spec.md`: `motionDecision: none`. No load-triggered animation scene ships;
  the existing `--transition: 0.2s ease` token continues to drive ordinary `:hover`/
  `:focus-visible` state changes on links/buttons/cards, unchanged from the rest of the site.

## Composition attribution

`.omd/composition.md` (input fingerprint: frame `3b3c08c5b19…`, copy `f0f0b58bdb9…`, type
`2cc2b285edc…`, scout `2541c0621ae…`) is the binding structural contract for this build. Its
five-rung experience spine (identity → verification → offer → mechanism → action), grid,
density/mass budget, focal hierarchy, domain form grammar, and media-role table were authored
by a fresh composer context from the sanitized frame/copy/type/scout inputs and validated with
`omd composition --check` (passing before the first production write and again at completion,
per `.omd/decisions.md`). Candidate `candidate-1` (Axis A/A: quiet inline hero evidence row,
compact non-dominant proof rail) was the blind-selected structural sketch, recorded in
`.omd/decisions.md`; this build implements that selected structure's macro visual system —
its section order, left-aligned asymmetric hero column, literal chronological proof rail, and
numbered process strip — directly into production, replacing its grayscale placeholder tokens
with the site's own navy/blue system and writing the product's own copy from
`.omd/copy-deck.md`.

## Reference-assembly attribution (sanitized, no raw source travels downstream)

Per `.omd/decisions.md` and `.omd/scout.md`, the `institutional-proof-forward` candidate
assembly was selected (disclosed agent choice, no interactive user selection available this
run) over `domain-adjacent-credibility`. The sanitized principles it carries into this build,
as recorded in `.omd/composition.md`'s Transfer boundary section, are structural/behavioral
rules only — never a source identity, hostname, screenshot, pixel, colour value, or full
section sequence:

- A confident kinetic-type hero paired with one measurable evidence element instead of a
  rotating stock-photo slider (replacing the previous production hero's 3-slide autoplay
  slider — the frame's explicitly named anti-pattern).
- A dated milestone-timeline anatomy pairing a year with a concrete quantitative counter at
  every stop (the `.proof-rail` five-stop rail).
- An all-caps/label-above-title anatomy for category cards (the product-line teaser, reusing
  the site's own existing `.product-card__category` convention).
- A numbered horizontal process-strip anatomy for a repeating operational cycle (the
  `.process-rail` four-step 01–04 rail).
- A regulatory registration number presented as plain undecorated text, never a decorative
  badge graphic (every `.id-token` span across the proof rail and the closing credential
  line).
- A clearly-primary-CTA-with-quiet-secondary-links anatomy for the closing disambiguation
  rung (`.final-cta`), replacing the previous production build's two visually-equal CTA
  cards (`.cta-card--navy`/`.cta-card--blue`), which the frame flagged as a
  `UX-TWO-PRIMARIES` risk.

The explicit anti-pattern this build departs from (per `.omd/decisions.md`/`.omd/scout.md`):
a generic Korean wholesale-marketplace template (price-forward cards, footer-only
registration numbers, no timeline/certification narrative) — captured only as a rejected
anti-reference, never as a source of any shipped anatomy.

No image asset, capture, screenshot, or literal token value from any scouted source is
shipped in this build; every carrier here is structural (typography, hairline rail,
numbered strip, plain text), matching `.omd/composition.md`'s Media roles table, which
authorizes no photographic asset anywhere on this page.

## Graphics

No new graphics asset (image, gradient, illustration, or generated image) was introduced.
The page's only visual carrier beyond typography is the existing `.hero::after` geometric
`clip-path` accent block already present in `css/style.css` before this run (a subtle
navy-on-navy structural mark, not a photograph) and the hairline-rule/numbered-rail system
described above. No AI-generated image, WebGL, or duotone-filtered photograph was used or is
authorized by `.omd/composition.md`'s Media roles table for this page.
