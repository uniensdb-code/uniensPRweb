## Input fingerprint

- Frame SHA-256: 3b3c08c5b197deb6a71f7d965fa0ebbfca578aff3dcb56afa8f604f065744710
- Copy deck SHA-256: f0f0b58bdb950f8abaef48f8c4a80988132d26a407115215fd40927ce8bc8864
- Type proof SHA-256: 2cc2b285edcb4291cce35afb930b8f37d75c24aea33730c89642039d3f96caf5
- Scout SHA-256: 2541c0621ae3f8afefd3aeca16080b7c142b4b98c0e45702b4d49292b38dfae8

## Experience spine

**Entering condition for the whole ladder**: a hospital procurement/admin visitor or a
prospective partner arrives undecided whether UNIENS is a currently-licensed, credible 병원
수탁 distribution partner. The ladder answers that in five rungs, each raising the question the
next section resolves; no two rungs restate the same proposition.

1. **Hero — identity.** Entering question: "무엇을 하는 회사인가?" New answer: UNIENS
   distributes medical devices to hospitals under the 수탁 (consignment) model — supply first,
   settle only actual usage. Primary action: 회사소개 (primary), 제품소개 (secondary). Next
   section depends on this because a reader who does not yet know *what* UNIENS does cannot
   evaluate *whether to trust* the claims that follow.

2. **Proof strip — verification.** Entering question, raised by the hero's unproven claim:
   "그 주장을 어떻게 확인하는가?" New answer: a chronological run of five dated, numbered
   registrations/patent/GMP re-certification (2017→2025), plus the two corroborated stats
   (20+ hospitals, 100% licensed). Primary action: inline link to the full cert list on About.
   Next section depends on this because a reader convinced of *credibility* next asks what is
   actually *for sale*.

3. **Product-line teaser — offer.** Entering question: "실제로 무엇을 공급하는가?" New answer:
   two live categories (수술용 기기, 소모성 의료용품), some carrying 급여 codes or 수탁 공급
   가능 tags; 진단 장비 is not claimed (F-014). Primary action: 제품소개. Next section depends
   on this because a reader who now knows the product scope next asks *how the commercial
   relationship actually works* (why no upfront hospital cost, why "수탁" rather than sale).

4. **Process — mechanism.** Entering question: "수탁이 실제로 어떻게 운영되는가?" New answer:
   the four-step 정산 방식 (납품 → 사용/재고관리 → 정산 → 재고보충), each step one claim, one
   verb. Primary action: none (informational rung; inline link to About's 사업 분야 section).
   Next section depends on this because a reader who now understands *identity + proof + offer
   + mechanism* has every fact needed to act — the only thing left is to remove ambiguity about
   *which* action to take.

5. **CTA disambiguation — action.** Entering question: "다음에 뭘 눌러야 하는가?" New answer:
   one clearly primary path (회사소개, large filled), 제품소개/문의하기 visibly secondary
   (small text links), paired with the plain-text credential line (수입업 허가 제5181호 ·
   제조업 허가 제7857호) as a closing fact-callback, not a repeated pitch. This rung has no
   further dependency — it is the ladder's terminus.

## Section dependency

Reorder/removal test, run against all five rungs:

- Hero ↔ Proof strip: **cannot swap**. Proof strip references "그 주장" (the hero's claim);
  presented first it has no antecedent and reads as an arbitrary list of numbers.
- Proof strip ↔ Product-line teaser: **cannot swap**. Swapping would ask the reader to evaluate
  a product catalog before they have any reason to trust the vendor showing it to them —
  weakens the credibility-first B2B evidentiary chain the frame requires.
- Product-line teaser ↔ Process: **cannot swap without loss**. Process explains *how the
  hospital relationship for the products just shown actually runs*; presented before the
  product teaser it has no concrete referent (settle usage of *what*?).
- Process ↔ CTA disambiguation: **cannot remove Process**. Without it the CTA rung would ask
  for a company-page visit with the single biggest structural question (pricing/upfront cost)
  still unanswered — the frame's reality ledger names pricing as "worth stating plainly," and
  Process is where it is stated.
- No rung is decorative filler: each is required evidence for the rung after it. This is the
  evidence-backed reason the five-rung order in the frame stands as given, not re-derived here.

## Grid and alignment

Single shared column system, inherited from the existing production container
(`--max-w: 1160px`, `.container` padding 32px desktop / 20px at ≤768px): every section's
content sits inside that one container — no section introduces its own max-width or bleeds
full-viewport except the hero background plane itself (see Focal hierarchy).

- **12-column logical grid** at desktop (≥960px), collapsing to a single column at ≤768px.
  Hero: text column spans columns 1–7 (left-aligned, not centered — a deliberate break from
  the current centered-hero template, see Candidate axes below); the evidence graphic occupies
  columns 8–12.
- Proof strip: timeline runs as a single horizontal rail spanning the full 12 columns at
  desktop, each of the five stops an equal-width flex cell; the two stat pairs sit in a
  secondary row beneath the rail, columns 1–6 and 7–12.
- Product-line teaser: two category cards, each spanning 6 columns at desktop, stacking to
  one column at ≤768px.
- Process: four numbered steps as a single-row 4-up strip at desktop (columns 1–3, 4–6, 7–9,
  10–12), stacking to one column at ≤540px, matching the site's own existing breakpoint scale.
- CTA disambiguation: the primary CTA block is left-aligned within columns 1–6; the two
  secondary links and the credential line sit in a quiet right-hand or below-in-mobile
  column (7–12 / stacked), never equal-sized to the primary.

**Intentional break**: the hero text column is asymmetric (7/5 split, left-weighted), a
deliberate departure from the current centered `hero__content { max-width:680px; margin:0
auto }` pattern — it earns its cost by giving the kinetic-type signature moment and its
adjacent evidence element room to read as one composed unit rather than two independently
centered blocks (see Focal hierarchy, Candidate axes).

Base spacing interval: retain the existing 8px-multiple rhythm implied by the current
stylesheet's spacing values; do not introduce a second, incompatible spacing scale.

## Density and visual mass

Density and mass step down in three stages, then resolve to a light close, mapped to what
each rung needs cognitively:

1. **Hero (rung 1)** — lowest density, highest single-element mass: one headline
   (signature moment) + one short body line + one evidence graphic. Wide negative space
   around the text column signals "read this first, slowly."
2. **Proof strip (rung 2)** — highest density and mass of the page: five dated stops plus two
   stat pairs is deliberately the most visually "full" rung, because density here *is* the
   evidence (a sparse-looking cert list would undersell how much verifiable history exists).
   Mass is distributed evenly across five equal stops — no single stop dominates, which
   correctly signals "cumulative record," not "one big claim."
3. **Product-line teaser (rung 3) → Process (rung 4)** — density steps back down to two cards,
   then four short numbered lines: mass shrinks because these rungs carry orientation and
   mechanism, not proof-density: the reader is skimming toward the close, not building a case.
4. **CTA disambiguation (rung 5)** — lowest mass on the page: one filled button, two small
   text links, one line of plain credential text. Deliberately anticlimactic in mass (contrast
   with rung 2) so the page's single loudest visual moment is the proof strip's evidence, not
   the closing pitch — a marketing page that makes its CTA the biggest object on the page is
   substituting salesmanship for the evidence it just spent two rungs establishing.

Every density change is tied to a rung's cognitive job (read slowly / verify cumulatively /
skim orientation / act), never to whitespace fashion alone.

## Focal hierarchy

**One dominant anchor**: the hero's kinetic-type headline (the approved type contract's
500→800 two-weight signature moment) paired with one real evidence element — the numeral pairing
carried forward from the proof strip's own two stats, surfaced early as a compact inline
counter beside the headline (not a duplicate section) — for example a small "20+ 병원 · 100%
허가" counter row directly under the hero body line, at meaningfully smaller visual weight than
the headline itself. This satisfies "the anchor may be concept-bearing typography plus one real
evidence element" without inventing a photo or a fact: both numerals are already-corroborated
frame facts (F-006, F-007), not new claims.

**Visual-mass budget**: headline ≥ inline counter row ≥ body sentence ≥ CTA row. The value
statement (body line) is intentionally subordinate to the headline in the first viewport; the
primary CTA (회사소개) is visually present but not mass-competing with the headline — it earns
reach through predictable placement and label clarity, not size.

**Rejection condition**: a candidate where the hero reintroduces a full-bleed photographic
background/slider claiming visual dominance over the typographic headline, or where the inline
counter row is styled at a size/weight that rivals or exceeds the headline, is rejected — either
crowds the concept-bearing anchor or reduces it to decoration behind imagery the brief does not
authorize. A candidate where the CTA row grows large enough to compete with the headline for
first-glance attention is also rejected (two competing primary masses in one viewport).

**No photo is mandated or invented.** The hero anchor is typography-plus-real-numeral, matching
the frame's stated register default (confident, one committed signature moment, no generic
stock-photo abstraction) and the scout's settled hero decision (a confident kinetic-type
statement with one measurable evidence element, not a rotating photo slider).

## Domain form grammar

The domain mechanism is 수탁 (consignment): supply-first, usage-based settlement, a *timed,
sequential* relationship (not a one-time transaction) between distributor and hospital. Three
recurring relational properties derive from this mechanism and are assigned to functional roles:

1. **Chronology as a first-class visual relationship** — the domain already produces dated
   events (신고/허가/특허/GMP by year; 정산 정기적으로 반복). Assigned role: the proof strip is
   built as a literal left-to-right (or top-to-bottom at mobile) timeline rail with the year as
   the primary scan anchor per stop — not a card grid, because a card grid would flatten
   sequence into an unordered set the domain does not have.
2. **Numbered, ordered steps as a first-class relationship** — the domain's settlement cycle is
   a fixed four-step loop (납품→관리→정산→보충), not a menu of independent features. Assigned
   role: the process section is a numbered horizontal strip (01–04) with connecting rail marks
   between steps, communicating "this is one repeating cycle," never four interchangeable
   feature cards.
3. **Verified-fact-as-plain-text, not badge-as-decoration** — the domain's proof instruments are
   real registration numbers with an issuing authority and date, meant to be read and mentally
   checked, not glanced at as a trust icon. Assigned role: every identifier (판매업/수입업/제조업
   허가 번호, 특허 번호, GMP 유효기간) renders as plain monospaced-adjacent text inline with its
   year/label — never as a graphic seal, ribbon, or decorative certificate badge. This is the
   one place a metaphor could collapse into decoration (a "trust seal" icon); it is explicitly
   rejected here because the domain's actual trust instrument is the number itself, not an icon
   standing in for it.

**Limit**: this grammar governs only the proof strip and process sections; the hero and
product-line teaser do not borrow chronology/step-numbering where no dated or sequential
relationship exists in their content (the product teaser is a category set, not a sequence —
it is not numbered).

## Media roles

| Section | Role | Carrier | Limitation |
| --- | --- | --- | --- |
| Hero | evidence + orientation | Kinetic-type headline (approved signature moment) + one real inline evidence numeral pair (20+/100%, F-006/F-007) | Carries identity and one proof point at low density; does not attempt to carry the full cert record — that is the proof strip's job, not duplicated here. |
| Proof strip | evidence | A literal timeline rail: year markers, thin connecting line, identifier text per stop (structural/data-derived graphic, not photographic) | Legibility of dense mixed Korean/Latin/numeral identifier tokens depends on the type contract's `.id-token{white-space:nowrap}` treatment already proved; this section carries no photographic or illustrative asset. |
| Product-line teaser | orientation | Label-above-title category cards (no product photography exists/is authorized to invent); category identity carried by typographic label + short use-case line, per the domain's own existing `.product-card__category` convention | No product photo is fabricated; if a category thumbnail is later supplied by the client it may be added as a secondary orientation cue, never replacing the label-above-title anatomy. |
| Process | explanation | Numbered structural strip (rail + numeral + short verb-led label), a diagram of the mechanism itself, not photographic | Explains sequence only; does not carry evidentiary weight (that stays with the proof strip) — a process section that also tries to "prove" trust would duplicate rung 2's job. |
| CTA disambiguation | action | Typographic hierarchy only (filled primary button vs. small text links) + one plain-text credential line | No graphic/badge carrier here by design — a decorative badge at the close would contradict the domain form grammar's "plain-text over badge" rule established for the proof strip. |

**Central mechanism carrier**: the 수탁 model itself (supply-first/usage-settle) has no lawful
product photograph to depict (no client-supplied photography exists or is authorized to invent
per frame). The explicit alternate mental-model carrier is the **process section's numbered
structural diagram** (01→04 rail) — it makes the abstract mechanism legible as a repeating,
ordered cycle. Limitation: a structural diagram communicates *sequence and repetition* but
cannot on its own convey physical scale (how much inventory, what facilities) — that limitation
is accepted rather than papered over with an invented warehouse photo.

## Responsive recomposition

| Section | Desktop (≥960px) | Mobile (≤540px, tested at 390px) | Preserved relationship |
| --- | --- | --- | --- |
| Hero | 7/5 asymmetric columns: headline+body+CTA row left, evidence numeral row inline under body | Single column, full-width; order unchanged: eyebrow → H1 → body → inline numeral row → CTA row (stacks to two rows, no label ever hidden) | Headline stays the first-viewport dominant mass at both widths; CTA row never separates from its predictable position directly below the numeral row; DOM/focus order matches visual order at both widths. |
| Proof strip | Horizontal 5-stop rail, stats row below | Compact stacked timeline: each stop becomes one row (year — identifier — label) in a single vertical rail with a connecting line on the left edge, per the type proof's confirmed mobile identifier-`nowrap` fix; stats stack to two rows | Chronological order and the year-as-anchor relationship are preserved exactly; no stop is dropped, cropped, or hidden behind a "show more" control — WCAG reflow without 2-D scrolling. |
| Product-line teaser | Two 6-column cards side by side | Cards stack to one column, full width | Label-above-title anatomy preserved unchanged at both widths; card order (수술용 기기 → 소모성 의료용품) preserved. |
| Process | 4-up single row | Two-column 2×2 grid or single column (whichever keeps each step's longest string — steps 02/04 — wrapping cleanly at `keep-all`, per type proof); numbering stays visible | Step order 01→02→03→04 preserved in both DOM and visual reading order at both widths; the connecting-rail cue simplifies to a left-edge line rather than disappearing. |
| CTA disambiguation | Primary block left (cols 1–6), secondary links + credential line right (cols 7–12) | Stacks: primary CTA full-width first, secondary links below as a small row, credential line last | Primary-vs-secondary size/weight contrast is preserved at both widths (never becomes two equal-weight blocks, resolving the exact `UX-TWO-PRIMARIES` risk the frame flagged in the current build's CTA-card band); reachable and legible at 320 CSS px. |

Full desktop/mobile reflow accounts for 320 CSS px (WCAG Reflow): at that width the hero's
evidence numeral row and the proof strip's identifier tokens remain the tightest-measure
elements; both were validated in the type proof at 390px with headroom, and no element in this
contract requires two-dimensional scrolling.

## Candidate axes

Two structurally distinct axes for the sketch stage to diverge on, both satisfying the same
spine, copy, type contract, and acceptance criteria:

1. **Hero signature-moment construction.** Axis A: the hero's dominant mass is built entirely
   from the kinetic-type headline itself (the 500→800 weight/size jump), with the inline
   evidence-numeral row treated as a small, quiet secondary line — typography alone carries the
   whole first impression. Axis B: the hero is a genuine two-part composition — headline on the
   left (7 columns) paired with a distinct, structurally-boxed evidence panel on the right (5
   columns) containing the two stat numerals at moderately larger scale than Axis A, so the
   "evidence element" reads as its own visible unit rather than an inline afterthought. These
   produce materially different visual-mass budgets and different left/right vs.
   stacked-vertical relationships for the same approved copy and type roles.

2. **Proof-strip dominance and orientation.** Axis A: horizontal-rail timeline, compact, sitting
   below the hero at moderate height — one scan among several sections, not a page-dominating
   moment. Axis B: the proof strip is deliberately the tallest, highest-visual-mass section on
   the page (per Density and visual mass above), rendered as a wide, generously spaced
   horizontal rail that dominates the first full scroll-length after the hero, forcing the
   viewer to register the cumulative cert record before reaching the product teaser. These
   differ in how much of the first-scroll experience the proof strip is allowed to claim, which
   is a genuine spatial/mass divergence, not a copy or content difference.

Both axes vary spatial relationships and mass distribution only; neither changes section order,
content truth, copy, or the approved type roles.

## Transfer boundary

**Permitted transfer** (attributed relationships and measured principles, abstracted from
trusted evidence, sanitized — no source identity below): a confident kinetic-type hero paired
with one measurable evidence element instead of a rotating stock-photo slider; a dated
milestone-timeline anatomy that pairs a year with a concrete quantitative counter at every stop;
an all-caps/label-above-title anatomy for category cards; a numbered horizontal process-strip
anatomy for a repeating operational cycle; presenting a regulatory registration number as plain
undecorated text rather than a decorative badge graphic; and a clearly-primary-CTA-with-quiet-
secondary-links anatomy for a closing disambiguation rung. A generic wholesale-marketplace
template (price-forward cards, footer-only registration numbers, no timeline/certification
narrative) was identified and is the explicit anti-pattern this contract departs from.

**Forbidden transfer**: no source identity, hostname, page name, screenshot, pixel, literal
colour/token value, full section sequence, or unique interaction/motion pattern from any
scout-found reference travels into this contract or into shipped UI/copy. Every principle above
is restated as a structural/visual rule only, decoupled from its originating source. No exact
transplant was requested by the user for this run, so none is recorded.
