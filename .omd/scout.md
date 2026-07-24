# Scout summary — UNIENS home-page reference assembly

## Capability disclosure

`browser-rs` (real Chrome via CDP) was healthy and used as the primary browser for every interactive capture in this run (`browser_status`/`browser_navigate`/`browser_take_screenshot` round-tripped successfully against six external sites). `omd doctor` reports the deterministic Playwright fallback (`omd render`/`omd probe`/`omd ref add <url>`) unavailable on this host: the Playwright chromium executable is missing, and `omd ref add <url> --as X` was confirmed to fail for that reason on a direct test. Per protocol this is an observed capability failure of the Playwright-dependent measurement path, not a preference: every external reference in this inventory was therefore captured as a browser-rs screenshot registered through `omd ref import-image` (provenance-bound image fragment), not through `omd ref add`'s DOM/invariant-measurement path. No DOM-measured invariants (type scale, motion durations, computed spacing) exist for these sources this run — only image-based principles, which is disclosed here rather than fabricated.

One additional environment note: the actually-installed CLI (`@3xhaust/oh-my-design` v0.18.0) validates the reference-board manifest against a piece schema without an `evidenceAxes` field, one field newer than the plugin-pack's own `core/ref/board-parser.ts` copy documents. The board below matches the installed/executing schema (confirmed by diffing both copies of `board-contract.ts`/`board-parser.ts` and by a passing `omd ref check`).

## Subject anchor (carried forward from `.omd/frame.md`, not re-derived)

UNIENS / 유엔아이엔스: navy `#0A2342` primary, blue `#1A5FA8`/`#144D8C` accent, sharp/square/thin-line/wide-whitespace stated house principle (직선・얇은 선・넓은 여백 / 둥글기 최소화), a real hospital-consignment (병원 수탁) medical-device distributor with dated, checkable regulatory facts. No external UNIENS brand presence exists beyond this repository (confirmed in the frame); this repository remains the sole brand-fact source and was not re-litigated here.

## Fragment inventory (7 image-fragment records, `.omd/refs/fragments/`)

| Fragment id | Source (label only) | Signal | What it settles |
| --- | --- | --- | --- |
| `fragment-cde034bfab2a21a4` | 하이메디넷 (himedi.net) — direct Korean domain competitor | anti-reference | Confirms the generic wholesale-mall template (price-forward cards, footer-only registration numbers, no timeline/certification narrative) is the exact default this redesign must depart from. |
| `fragment-c7e7f40b3c436ece` | icomat.co.uk — Awwwards aerospace-composite manufacturer (hero segment) | high-visual-system | Confident kinetic-type hero + one measurable comparison graphic, no rotating stock photo; low-saturation register with one reserved accent. |
| `fragment-375ae456307ddece` | icomat.co.uk (process/testimonial segment) | supporting-component | Numbered O1–O7 horizontal process strip + named testimonials as real-evidence substitute for stock trust badges. |
| `fragment-74f5500772fbebc8` | capitalgroupdc.com/about-us — institutional consulting timeline | supporting-component | Dated milestone timeline pairs one narrative headline with concrete numeric counters at every stop — the anatomy for a license/patent/GMP proof strip. |
| `fragment-13143b7437ff2747` | cantor8.io — institutional fintech infrastructure | high-visual-system | Sharp/thin-line anatomy: all-caps category label above card title, partner-trust strip immediately under the hero, hairline dividers, one restrained accent, no rounded/shadow softness. |
| `fragment-033292f3b1f87c91` | jera-capital.com — private-equity secondary fund | supporting-content | Regulatory registration number stated as plain undecorated fact text (not a badge graphic); one claim per screen. |
| `fragment-6b69eef8eebe5414` | tersosolutions.com — RFID consignment/VMI inventory vendor (direct functional analog) | supporting-component | Hero leads with a dated operating-history numeral; capability copy names exact consignment use cases instead of describing the model abstractly; named partner strip directly under hero. |

Domain-competitor sweep also covered (research-only, not captured — did not clear the contamination bar as anything but confirmation of the anti-reference pattern already captured via himedi.net): 오픈비투비, 메디포르테, 청훈비즈, 메디세일, 메디굿파트너스 — all generic Korean medical-wholesale marketplace templates, same shape as the captured anti-reference; capturing more of them would not have changed any remaining decision.

## Brick analysis (sanitized principles by decision)

**Decision: what carries the hero (replacing the 3-slide rotating stock-photo slider)** — settled by `fragment-c7e7f40b3c436ece` (icomat) and `fragment-6b69eef8eebe5414` (Terso Solutions) as two competing directions: (a) a kinetic-type capability statement plus one measurable evidence graphic, or (b) a dated operating-history numeral plus named exact-use-case copy. `fragment-cde034bfab2a21a4` (himedi.net) is the explicit anti-reference both directions must avoid.

**Decision: how to present the license/patent/GMP timeline as a "proof strip"** — settled by `fragment-74f5500772fbebc8` (Capital Group DC): pair every dated stop with a real quantitative counter, not an adjective; keep each stop terse; order strictly chronologically with the year as the primary scan anchor.

**Decision: how the product-line teaser card should read** — settled by `fragment-13143b7437ff2747` (Cantor8): a short all-caps category label above the card title, sequenced as a trust strip immediately after the hero; and `fragment-6b69eef8eebe5414` (Terso): name the exact served use case instead of an abstract feature line.

**Decision: how to give the 4-step 수탁 정산 방식 flow a home-page presence for the first time** — settled by `fragment-375ae456307ddece` (icomat numbered process strip) and `fragment-033292f3b1f87c91` (Jera Capital's one-claim-per-screen restraint): a plain numbered strip, one capability per step, given its own uncluttered section.

**Decision: how to disambiguate the closing About/Products/Contact choice (replacing two visually-equal CTA cards)** — settled by `fragment-13143b7437ff2747` (Cantor8 hairline/CTA anatomy) and `fragment-033292f3b1f87c91` (Jera Capital's plain-fact registration pairing): a clearly primary path with secondary options, optionally paired with a small plain-text credential reference rather than two decorative equal panels.

**Colour lane (keyed to the navy/blue anchor)** — Cantor8 and Jera Capital both ground a navy/blue-adjacent institutional palette with a single reserved accent and no rounded/shadow softness, confirming the existing `--color-accent` register needs sharpening/reserving, not replacing.

**Motion lane** — no motion was measured this run (image-fragment-only capture; see capability disclosure). Observed via accessibility-tree text only: Cantor8 uses a scroll-cue affordance and on-scroll reveals; icomat and Capital Group DC did not expose motion timing in a way this run's tooling could measure. This is a disclosed gap, not a fabricated motion study — motion decisions belong to the later art-direction stage with its own evidence-gathering obligation.

## Coverage gaps (explicit, not silently omitted)

- No DOM-measured invariants (type scale, spacing tokens, motion durations) exist for any of the 7 fragments — image-fragment capture only, per the capability disclosure above.
- No Pinterest/Dribbble component-anatomy crop was retained: a targeted Dribbble "certification badge" search returned only one irrelevant shot (a food-product sticker), which would not have settled any remaining decision, so no capture was forced to hit a category quota.
- Reimbursement-code/consignment-tag visual precedent is inferred by adaptation (Cantor8's label-above-title anatomy applied to UNIENS' own existing `.product-card__category` convention) rather than found in a source that already displays a real insurance/reimbursement code — no B2B site surfaced that exact pattern during this sweep.
