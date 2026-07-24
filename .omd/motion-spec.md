# Motion spec — UNIENS home page (index.html)

## Decision

`motionDecision: none`.

No load-triggered animation scene is implemented on this build. The page ships as a
designed static template with a deliberate template break from the current production
page (see "What this replaces" below) carried entirely through the macro visual system —
composition, spacing rhythm, the literal timeline rail, and the plain-text identifier
treatment — not through added motion.

## Rationale

1. **Composition contract mandate.** `.omd/composition.md`'s Focal hierarchy section
   explicitly rejects "a candidate where the hero reintroduces a full-bleed photographic
   background/slider claiming visual dominance over the typographic headline" and the
   Domain form grammar section assigns the proof strip's trust instrument to
   "verified-fact-as-plain-text, not badge-as-decoration." Both rules describe a register
   of restraint (facts read, not animated at). Adding a load-triggered motion scene over a
   register the contract itself defines as plain-text/evidentiary would compete with the
   proof strip for attention, which the Density and visual mass section reserves for the
   dated cert record, not for a decorative flourish.
2. **No measured motion evidence exists for this run.** `.omd/scout.md`'s Motion lane notes
   plainly: "no motion was measured this run (image-fragment-only capture) ... This is a
   disclosed gap, not a fabricated motion study." Per protocol, every timing/easing choice
   must cite measured reference or theory evidence; none exists here, so inventing a new
   load scene now would be ungrounded novelty, not a designed decision.
3. **Existing `.reveal`/`.reveal.visible` utility is scroll-triggered, not load-triggered,
   and is deliberately not reused on this page.** `js/main.js`'s IntersectionObserver fires
   on scroll intersection (threshold 0.12), which is scroll choreography, not a scene that
   begins on page load and settles within a 1500ms load window — it would not satisfy a
   `motionDecision: one` load-scene requirement even if adopted, and adding it anyway as
   decorative scroll-fade would be exactly the un-declared "second scene" / "restraint as
   escape" pattern this spec is written to avoid. It is left in `css/style.css`/`js/main.js`
   for the pages that already use it (about.html, products.html) but is not applied to any
   element newly authored on this page.
4. **The template break is the point.** The current production `index.html` differs from
   this build by an auto-rotating 3-slide stock-photo hero, tilt-on-hover value cards, and a
   two-up equal-weight CTA card band — all removed per the task brief and the frame's own
   rejection of "generic stock-photo abstraction." That removal, plus the sharp/square,
   hairline-rule, wide-whitespace system and the literal chronological rail, is itself the
   visible, deliberate departure from the old template; it does not need an animation on
   top of it to read as a considered redesign.

## What is implemented (non-scene interaction feedback, not a "scene")

Per the UX acceptance contract's "immediate visible feedback on interactive elements"
requirement, ordinary CSS `:hover`/`:focus-visible` state changes exist on every link and
button (colour/background shift, underline, focus ring) at the transitions already declared
by `css/style.css`'s `--transition: 0.2s ease` token. These are conventional interactive
affordances, not a load-triggered animation scene, and are exempt from this spec's `none`
declaration the same way a `:hover` underline is exempt on every other page of this site.

## Reduced motion

N/A beyond the above — there is no motion scene to gate behind
`prefers-reduced-motion`. The hover/focus transitions above are short, non-essential state
changes already present sitewide and are not disabled under reduced motion, consistent with
how `about.html`/`products.html` treat their own hover transitions today.

## Invalidation

This spec is bound to `.omd/composition.md` (fingerprint recorded in that file's Input
fingerprint section) and `.omd/frame.md`'s register-default instruction. A future change to
either that authorizes or requires a load-triggered signature moment invalidates this
decision and requires a new motion spec before any animation code is written.
