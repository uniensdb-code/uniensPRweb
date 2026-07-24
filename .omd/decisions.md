# Decisions

## Reference assembly selection (disclosed agent choice — no interactive user selection available in this run)

Selected candidate: **`institutional-proof-forward`** ("Institutional proof-forward"), via `omd ref select institutional-proof-forward` + `omd ref check` (passing).

Rejected alternative: `domain-adjacent-credibility` ("Domain-adjacent credibility").

Reasoning: the frame (`.omd/frame.md`) mandates a `confident` register with one committed signature moment, evolving UNIENS' own stated sharp/thin-line/wide-whitespace identity — not a quiet/restrained default. `institutional-proof-forward` delivers this more directly: it pairs a confident kinetic-type hero anatomy (icomat.co.uk) with sharp/thin-line institutional anatomy (cantor8.io) that mirrors the stylesheet's own stated design principle, and it carries an explicit anti-reference (himedi.net, a generic Korean wholesale-mall template) marking exactly the current failure mode to invert. `domain-adjacent-credibility` leans more on Jera Capital's "one-claim-per-screen" plain-fact restraint, which risks under-delivering the confident/signature-moment mandate even though its Terso Solutions functional analog (a real healthcare consignment/VMI vendor) is individually strong — Terso's dated-operating-history-numeral pattern remains available as a supporting idea for the hero's proof line even under the selected candidate, since both candidates share the Capital Group DC timeline anatomy for the proof strip.

This is a disclosed agent choice, not a user selection — no interactive UI/board was used or offered, per protocol.

## Structural sketch selection

Two isolated sketch candidates were built from `.omd/composition.md`'s two candidate axes (hero signature-moment construction; proof-strip dominance), each built coherently as one axis direction:
- `candidate-1` (Axis A/A): quiet inline hero evidence-numeral row, compact/non-dominant proof-strip rail.
- `candidate-2` (Axis B/B): boxed hero evidence panel, proof-strip deliberately the tallest section on the page.

A fresh blind `oh-my-design:eye` in sketch-selector mode scored both on the frozen 8-dimension rubric. **Winner: `candidate-1`**, mean 3.75, clearing the floor (≥2) on all 8 dimensions with no composition-contract violation — correct hero order (eyebrow → H1 → body → inline numeral row → CTA) preserved at both viewports, domain form grammar correctly instantiated (literal rail + connecting line, plain-text identifiers), and no content dropped on mobile reflow.

`candidate-2` was rejected: a floor failure on Responsive hierarchy (scored 1) — at the 390×844 mobile viewport its hero rendered the CTA row before the evidence-numeral panel, inverting composition.md's explicit required order (evidence must precede CTA). Classified **execution-level, not contract-level** (candidate-1 proves the same contract is satisfiable), so no composer-revision or replacement-sketch round was triggered — a winner already existed from this round, per protocol ("no winner" recovery only applies when every candidate fails).

Selected structure for production: `.omd/.cache/sketches/candidate-1/sketch.html` and its four proofs.

## Stack: plain HTML/CSS/JS (no framework), overriding omd stack's naive react-vite-typescript default

- When: 2026-07-23T05:32:02.677Z
- Point of view: (none set)
- Why: omd stack flags this folder as greenfield because no package.json/build config exists, but this is a real production site the user brought: git history of many real feature/fix commits (main branch, e.g. 'fix:css 수정 및 통합', '수정된 이미지 추가'), a README.md documenting Netlify auto-deploy from this exact repo, netlify.toml, four real content pages (about.html/products.html/contact.html) with real regulatory facts, and a shared css/style.css + js/components.js component system already serving all pages. Per protocol/human-design-loop.md Stack routing: 'An existing repository stack is a real project the user brought... A bare index.html/.css/.js with no manifest, next to an .omd/ from a prior OMD run, is OMD's own leftover output' — this is the opposite case: the .omd/ directory is new, but index.html/css/js predate it by months of real commit history and serve a real deployed site. The task brief also explicitly instructs building in-place on this stack. Building React+Vite+TS here would replace a real working production site with an unrequested rewrite, which the protocol forbids ('never cover it with a React scaffold').

## Slop-scan triage: dismissed both candidates from 'omd slop scan' — 'mid-sentence-break' in index.html:25 and 'rounded-accent-callout' in css/product.css:67

- When: 2026-07-23T06:34:18.958Z
- Point of view: (none set)
- Why: mid-sentence-break (index.html:25, the hero <h1> line break before <strong>의료기기 수탁 유통</strong>): this is not an arbitrary/sloppy break — it is the exact break specified verbatim in .omd/copy-deck.md's Hero Title field ('병원을 위한<br><strong>의료기기 수탁 유통</strong>') and is the mechanical implementation of the approved kinetic-type signature moment from .omd/type-proof.md and .omd/composition.md's Focal hierarchy (a 500-weight first line -> 800-weight second-line/strong block, the page's one dominant anchor). The break falls at a clean Korean phrase boundary ('병원을 위한' = a complete adjectival clause modifying '의료기기 수탁 유통', not a mid-word or mid-clause severing) and was verified at both 1280px and 390px with no orphan/clipping in the semantic and visual craft checkpoints. Dismissed as a deliberate, contract-required, evidence-backed break, not a defect. rounded-accent-callout (css/product.css:67, .desc-box combining border-left:4px solid + asymmetric border-radius): this file is loaded only by /products/*.html detail pages (airfilter.html, xblock.html, success.html, success-f.html, gentaq.html), which this task never touched or was asked to touch (scope: index.html home page redesign only, per the task brief). Pre-existing code predating this run's git history. Dismissed as out-of-scope for this build; flagged here for a future dedicated product-detail-page pass, not silently ignored.

## Round 1 — RED/GREEN composition-rhythm refinement (fresh `oh-my-design:glance` squint pass)

- When: 2026-07-23
- Point of view: (none set)

A fresh blind `oh-my-design:glance` pass over blur+grayscale squint renders of the built
`index.html` found three real composition-rhythm/hierarchy defects. All three are fixed as one
round, within the approved Axis A/A structure (headline carries the mass, evidence stays a quiet
inline line — the Axis B boxed evidence panel is still rejected; only proportions/mass were
rebalanced, the axis was not switched).

**1. Desktop content didn't fill the frame (lopsided, not deliberate).**
Measured before fix: `.hero__content--home` sat flush at viewport x=0 (its own `margin:0` +
`max-width:720px` won cascade over `.container`'s `margin:0 auto`/`max-width:1160px`), so at
1280px viewport the text column spanned only x=0-720, leaving 560px (43.75% of the viewport)
of literal dead space on the right, outside the shared container's own right edge — not a
deliberate margin, an accident of the override.
Fix: restructured the hero markup into `.container.hero__grid--home` wrapping two children —
`.hero__content--home` (headline/body/evidence/CTA, widened `max-width` from 720px to 820px,
still left-aligned, still quiet inline evidence — no boxed panel) and a new `.hero__side`
(a pure geometric device: a 1px vertical rule at `rgba(255,255,255,.22)`, no text, no box,
`aria-hidden="true"`) that fills the remaining flex space up to the container's own right edge.
The existing `.hero::after` diagonal accent tint (already in the stylesheet, exclusive to
`.hero`/index.html) now sits inside that same marked-off zone instead of behind unexplained
blank space. `.hero__side` is hidden below 960px so mobile stays the untouched single-column
stack. Measured after fix at 1280px: content spans x=84.5-858.5 (774px), a thin rule marks
x≈906.5, the accent zone runs to x=1180.5 (274px), and the remaining margin (~84.5px) matches
the container's own left inset — the composition now reads as a deliberate two-zone layout
bounded by the shared container, not a flush-left accident.
Evidence: `.omd/.cache/rounds/round-1/desktop-1280x900.png`,
`.omd/.cache/rounds/round-1/squint-desktop-1280x900.png` (blurred+grayscale self-check — the
vertical rule and diagonal tint remain legible as a deliberate right-hand zone under blur).

**2. No secondary hierarchy tier after the hero.**
Measured before fix: all four `.section-head__title` instances (인증과 허가 / 제품 라인업 /
공급 방식 / final CTA) computed to identical 28px/800-weight at 1280px — no "second stop" after
the hero.
Fix: added a `.section-head--proof` modifier, applied only to the 인증과 허가 section-head (the
frame's actual evidentiary core), giving it: a larger title clamp (36px at 1280px vs. the
other three sections' unchanged 28px), an 800-weight/wider-tracking eyebrow (vs. 700-weight
elsewhere), and a new 48×3px accent rule above the eyebrow (reusing the site's own
straight-line accent language already used elsewhere, not a new decorative device). The other
three section titles are untouched.
Evidence: `.omd/.cache/rounds/round-1/desktop-1280x900.png` (proof title visibly larger with its
own accent rule, directly below the hero) confirms one clear second stop, not four equal
repeats; measured computed `fontSize` 36px (proof) vs. 28px (product/process/CTA titles).

**3. The two product-teaser cards collapsed into one mass under blur.**
Fix: `.teaser-card` gained a 4px accent-color left border (matching the site's existing
`.proof-stat`/hero-eyebrow border-left language), a darker outer border (`--color-border-dk`
instead of `--color-border`), and a static `box-shadow: var(--shadow-sm)` (previously shadow
only appeared on hover); `.teaser-grid` gap widened from 24px to 32px; and the second card
(소모성 의료용품) gets a `--color-light` background tint against the first card's white, so the
two cards differ in luminance, not just a 1px border — the difference reads as two distinct
masses even blurred and desaturated, without inventing a false category-color distinction.
Evidence: `.omd/.cache/rounds/round-1/teaser-cards-inspect.png` (sharp) and
`.omd/.cache/rounds/round-1/squint-teaser-cards.png` (blurred+grayscale — the two cards remain
visibly separate blocks, not one merged mass).

**Self-check**: fresh squint pair (blur(6px)+grayscale(1), injected via a temporary `<style>`
tag on `html`, matching the technique used for the original glance review) rendered at both
fixed viewports post-fix: `.omd/.cache/rounds/round-1/squint-desktop-1280x900.png`,
`.omd/.cache/rounds/round-1/squint-mobile-390x844.png` — all three defects visibly resolved;
mobile (single-column stack, `.hero__side` `display:none` confirmed via computed style) is
unaffected, matching the composition contract's unchanged mobile recomposition row.

`omd composition --check` re-run after these edits: `ok — composition.md passes structure and
freshness checks`.

No copy, font-family, requested-weight, or axis changed in this round (only `max-width`/`gap`/
`border`/`background`/one section's title `clamp()` and a new geometric accent) — copy deck and
type proof both remain valid; the type proof's per-role size table already discloses these as
CSS-level presentation values, not requested weights/axes/family.

## Round 2 — RED/GREEN hero right-side deliberateness fix (fresh blind-choose eye, round-0 vs round-1)

- When: 2026-07-23
- Point of view: (none set)

A fresh blind-choose eye compared round-0 and round-1 renders and found round 1's hero
right-side fix (a 1px vertical rule + faint diagonal wash) still read as "empty/lopsided, not
deliberate" — verbatim: "the right side of the hero is empty aside from a thin vertical rule and
a faint gradient wash; no numerals or panel content actually occupies it... despite the
composition contract calling for either an inline numeral row or a boxed evidence panel to
occupy that space." It also flagged round 1's evidence as fixed-viewport only, blocking judgment
of sections below the hero.

**Fix — hero right-side treatment.** Kept the Axis A/A structure (Axis B's boxed evidence panel
stays rejected — no second visible 20+/100% block was added). Instead of a bare hairline, the
existing `.hero__side` zone now carries one real geometric/typographic device with visible area:
a giant outline-weight "01" ghost numeral (`.hero__side-mark`), set at `clamp(6.5rem, 3rem +
11vw, 13.5rem)` (desktop computed ≈216px), `font-weight: 800`, colour `rgba(255,255,255,.09)` —
low enough opacity to stay strictly behind the headline in visual-mass budget (headline ≥ ghost
mark), but large enough in physical area to read as an intentional compositional mark rather
than blank space. The 1px vertical rule from round 1 is retained as the zone's left boundary
(now `.hero__side::before`), so the zone still reads as bounded, not floating. The numeral "01"
was chosen over a literal repeat of the proof-strip's "20+"/"100%" stats specifically to avoid
duplicating Axis B's evidence-panel content: it borrows the *typographic language* already
established by the process section's own numbered-step rail (01→04, per composition.md's Domain
form grammar) to abstractly mark "hero = rung 1 of the five-rung ladder" — a self-referential
structural motif, not a second proof claim. `aria-hidden="true"` unchanged from round 1 (still
decorative, not content). Mobile unaffected: `.hero__side` remains `display:none` below 960px,
so the single-column stack is untouched.

**Evidence — full-page captures added.** All four required files captured with browser-rs
(Playwright chromium confirmed missing via `omd doctor` on this host, same as prior rounds):
fixed-viewport `desktop-1280x900.png` (1280×900 exact) and `mobile-390x844.png` (390×844 exact),
plus full-scroll-height `desktop-full.png` (1265×3013) and `mobile-full.png` (375×4490) —
verified with `sips -g pixelWidth -g pixelHeight` on all four. The full-page captures show all
five sections (hero, 인증과 허가 proof strip, 제품 라인업 teaser, 공급 방식 process rail, closing
CTA) in one continuous evidence trail at both widths, resolving round 1's fixed-viewport-only
gap.

Files: `.omd/.cache/rounds/round-2/desktop-1280x900.png`,
`.omd/.cache/rounds/round-2/mobile-390x844.png`,
`.omd/.cache/rounds/round-2/desktop-full.png`,
`.omd/.cache/rounds/round-2/mobile-full.png`.

**Self-check (this pass's own visual read).** At 1280px the right zone now unmistakably reads as
a deliberate compositional device — the "01" occupies real area (roughly a third of the
viewport's width, vertically centered against the hero band's full height) at low enough opacity
that it recedes behind the headline/body/CTA column on first glance, then resolves into a
legible numeral on a second look, which is the intended "quiet but present" register (matching
the site's own stated 직선·얇은 선·넓은 여백 principle — wide whitespace stays, but the zone
inside it is no longer bare). It no longer looks like an accidental gap: the numeral gives the
eye something to resolve, the rule still marks the zone's boundary, and the existing diagonal
tint sits behind both. Nothing in the zone rivals or exceeds the headline's mass (composition.md
Focal hierarchy's rejection condition), and no second evidence panel was introduced.

`omd composition --check` re-run after these edits: `ok — composition.md passes structure and
freshness checks`.

No copy, font-family, requested-weight, or axis changed in this round (only the `.hero__side`
markup addition of one `aria-hidden` `<span>` and its CSS) — copy deck and type proof both remain
valid.

## Ship-gate triage

- **Playwright chromium installed mid-run** (`npx playwright install chromium`) — it was missing
  for the entire run up to this point (disclosed capability gap throughout scout/typesetter/hand
  work, which used `browser-rs` instead). `omd doctor` now passes fully; final `omd check`/`omd
  render` ran through the real deterministic Playwright path, not a substitute.
- **`rounded-accent-callout` (css/style.css, `.teaser-card`) — fixed.** Round 1's distinctness fix
  had added `border-left: 4px solid var(--color-accent)` alongside the existing `border-radius:
  var(--radius)`, which `omd slop scan` correctly flagged as stacking rounded corners with a thick
  coloured edge. Removed `border-radius` from `.teaser-card` (keeping the left-accent border and
  the round-1 background-tint distinction) — sharper corners also better match the site's own
  stated "둥글기 최소화" principle. Re-scanned clean.
- **`rounded-accent-callout` (css/product.css:67) — dismissed, out of scope.** Pre-existing code on
  product-detail pages this task never touched (scope: index.html only). Unchanged from the
  original triage earlier in this run.
- **`mid-sentence-break` (index.html:26) — dismissed, deliberate.** Unchanged from the original
  triage: the hero's contract-required kinetic-type break.
- **`SLOP-LEAKED-RATIONALE` (`omd check`, proof-stat__note) — dismissed, false positive.** The
  linter flagged "국내 약 20개 병원과 수탁" as leaked internal rationale because that exact real
  fact is also quoted in `.omd/frame.md`'s evidence section (for corroboration) and in
  `.omd/copy-deck.md`'s fact ledger (F-006). The shipped sentence is a verified real fact reused
  verbatim from `about.html`'s own production copy ("현재 국내 약 20개 병원과 수탁 계약을 통해
  운영 중"), not internal design reasoning — dismissed with this evidence rather than reworded,
  since reworded copy would require a fresh writer/copy-eye pass and the underlying content is
  already correct and sourced.
- **`SITE-LADDER-DRIFT` (`omd check --site`, type-scale and spacing-ladder step count disagree
  across about.html/contact.html/index.html/products.html) — disclosed, out of scope.** This
  task's scope was the home page only ("메인 페이지 리디자인," building on the existing shared
  stylesheet); harmonizing the type/spacing scale across all four pages is a full-site pass this
  run was never asked to do, and about.html/contact.html/products.html were not touched. Flagged
  here for a future dedicated cross-page consistency pass, not silently ignored.
- **`omd ref distance`** reports "No references to compare against" — expected given the disclosed
  scout-stage capability gap (Playwright missing at scout time meant every reference was captured
  as an image fragment via `omd ref import-image`, never through `omd ref add`'s DOM-measured
  invariant path that `ref distance` compares against). Not fixable without re-running scout capture
  now that Playwright is installed, which was judged out of proportion for a single-page ship gate.
- **Final render defect caught and fixed**: an initial `omd render index.html` (bare relative path)
  produced a completely unstyled page — `index.html`'s `/css/style.css` and `/js/components.js`
  absolute paths don't resolve under a bare `file://` navigation. Started a temporary local static
  server (`python3 -m http.server`, stopped after use) and re-rendered against
  `http://localhost:8791/index.html` for all final evidence; confirmed fully styled, correct output.
- **Final `omd check index.html --category slop`**: clean (zero remaining candidates after the
  `.teaser-card` fix). **`omd slop scan .`**: two dismissed candidates only (both pre-existing/
  out-of-scope or deliberate, per above), zero untriaged, zero needs-render.
