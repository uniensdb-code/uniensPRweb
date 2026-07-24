---
why: "Datum: about.html timeline and cert-grid list specific license/patent/GMP
  registration numbers and dates; products.html cards carry named 급여
  reimbursement codes and 수탁 공급 가능 tags. None of these specifics appear on
  index.html today, which instead repeats the words 신뢰/전문성/파트너십 as photo-card
  captions with no concrete referent (css/style.css own header comment: 직선·얇은
  선·넓은 여백/둥글기 최소화 confirms a restraint-oriented brand voice that generic
  stock-photo abstraction does not match). Rejected counter-hypothesis: home
  page is really just a navigation hub so surface should read as
  product/utility, not marketing — tested against theory/ux.md
  classification-by-DO: the visitor action here is decide-to-trust-and-explore,
  not operate-a-tool, and the page argues a proposition (reliable consignment
  partner) with evidence before asking for a click, which is the marketing
  definition; hypothesis rejected, marketing classification holds."
writtenAt: 2026-07-23T03:24:48.036Z
uxTask: "A hospital-side visitor (procurement/purchasing or clinical admin
  staff) or a prospective partner arrives to judge, in seconds, whether UNIENS
  is a currently-licensed, credible 병원 수탁(consignment) medical-device
  distribution partner, then moves on to the page that answers their specific
  question: About for history/certifications/location, Products for the actual
  catalog."
uxFrequentAction: "Click-through to 회사소개 (About) — evidenced by the current
  build own visual hierarchy: the hero renders 회사소개 as the filled btn--primary
  and 제품소개 as the outline secondary, i.e. the existing team already encoded
  About as the intended primary action. Flag for composition: the bottom CTA
  band repeats both links as visually equal-weight cards (cta-card--navy vs
  cta-card--blue, same size), which contradicts that hierarchy and is a
  UX-TWO-PRIMARIES risk to resolve downstream, not here."
uxCostliestError: "N/A for a destructive/data-loss error - this page has no
  forms, cart, or account state (contact form lives separately on contact.html).
  The applicable costliest error for a marketing surface is visitor
  misdirection/bounce: leaving believing UNIENS manufactures devices rather than
  distributes them under the 수탁 model, or choosing the wrong CTA and feeling
  stuck. Recovery path: js/components.js injects the same persistent
  header/footer nav (홈/회사소개/제품소개/문의하기) on every page, so every state remains one
  click from any other; hero and section copy must state the 유통사(distributor)
  identity and 수탁 model explicitly rather than only implying partnership."
uxSurface: marketing
---

## The given problem

Redesign index.html, the UNIENS (유엔아이엔스) home page for a Korean hospital-consignment (병원 수탁/위탁) medical-device distributor, in place on the existing plain HTML/CSS/JS structure (css/style.css, js/components.js) shared with about.html, products.html, contact.html. Single page, no new routes, no framework.

## The reframing

The home page job is not a generic corporate about-us trust statement but a proof-forward gateway: surface the concrete, dated, verifiable credentials that already exist two clicks away on about.html (판매업 신고 2017, 수입업허가 제5181호 2021, 제조업허가 제7857호 2022, 특허 제10-2594423호 2023, GMP 적합인정서 KCL 2025) and the reimbursement-coded product line on products.html (급여 M2052619, 급여 H3300110, 수탁 공급 가능 tags), instead of relying on the current three generic stock-photo value cards (신뢰/전문성/파트너십, images/*.png) that assert trust in the abstract without showing any of the proof the site already owns.

## Evidence

Datum: about.html timeline and cert-grid list specific license/patent/GMP registration numbers and dates; products.html cards carry named 급여 reimbursement codes and 수탁 공급 가능 tags. None of these specifics appear on index.html today, which instead repeats the words 신뢰/전문성/파트너십 as photo-card captions with no concrete referent (css/style.css own header comment: 직선·얇은 선·넓은 여백/둥글기 최소화 confirms a restraint-oriented brand voice that generic stock-photo abstraction does not match). Rejected counter-hypothesis: home page is really just a navigation hub so surface should read as product/utility, not marketing — tested against theory/ux.md classification-by-DO: the visitor action here is decide-to-trust-and-explore, not operate-a-tool, and the page argues a proposition (reliable consignment partner) with evidence before asking for a click, which is the marketing definition; hypothesis rejected, marketing classification holds.

Trade of the reframe: lost — the clean, low-density, three-photo "핵심 가치" moment is easier to build and scans faster at a glance. Gained — specific, checkable proof (license numbers, a real patent, dated GMP re-certification, named reimbursement-coded products) is categorically stronger B2B trust evidence than adjective-only claims, per Nielsen's real-world-match/credibility heuristic, and it is evidence the company already possesses and has already fact-checked into about.html/products.html, so it costs no new claims, only new layout for old facts.

## Surface classification reasoning (uxSurface: marketing)

Classified by what the visitor DOES, not by the brief's own phrasing ("소개 페이지"/"intro page"): the visitor decides whether to trust and continue, they do not operate a repeated task loop, log in, or manage a work object. index.html has zero forms, zero stateful controls, and zero repeated-use screens (contrast about.html/products.html/contact.html, which are also read-only marketing/editorial-leaning pages, not product screens either — this whole site is marketing, no `product` or `mixed` screen exists). Per protocol this is `marketing`: no work objects, no loop steps, no task coverage matrix, no list→detail T# — all of those are explicitly N/A for this surface and are not fabricated here.

## Register default (GREEN-target instruction for downstream)

The brief is silent on visual ambition. Per protocol this is not license for a quiet/restrained default — marketing defaults to at least `confident` register with one committed signature moment and a deliberate departure from the current template (large rotating photo hero + three tilt-hover photo cards + two-up CTA band), which reads as a generic stock corporate-site pattern today. The evolution must still read as UNIENS, not a reskin: keep and sharpen the existing navy/blue identity (`--color-primary:#0A2342`, `--color-accent:#1A5FA8`) and the stated sharp/square, thin-line, wide-whitespace principle from css/style.css's own header comment — do not soften into rounded/pastel/generic SaaS-marketing shapes, and do not invent an unrelated new brand.

## Section-variety mandate (for composer/copy, not built here)

The current index.html sections functionally re-state one promise four times (hero: "trustworthy partner" → stats: "trustworthy numbers" → value cards: "trust/expertise/partnership" → CTA band: routing repeated again). Downstream composition must make each major section answer a different question rather than re-varying this single promise, using material already in the repo:
- Hero: what UNIENS does and for whom (수탁 방식 의료기기 유통, hospitals) — not yet "why trust us."
- Proof strip: how is it verified — the real license/patent/GMP timeline facts (about.html), not generic stat counters alone.
- What you get: the actual product line and categories (products.html), not an abstract "핵심 가치" adjective card.
- Scope/how it works: the 수탁 정산 방식 (pre-supply, usage-based settlement) 4-step flow already written on about.html — currently absent from the home page entirely.
- Who to reach / next step: About vs Products vs Contact, disambiguated, not two equal-weight CTA cards.

## Subject anchor (research target for the scout)

Real, existing subject: UNIENS / 유엔아이엔스 (주식회사 유엔아이엔스), a Korean hospital-consignment medical-device distributor. Source: this repository itself (README.md cites GitHub `https://github.com/uniensdb-code/uniensPRweb`, Netlify auto-deploy from `main`); this is an in-place redesign of a real production site, not a greenfield brief, so the repo is the primary and authoritative brand source.

Cited brand facts already shipped by the source (facts, not choices the scout or composer may override):
- Palette tokens in css/style.css: `--color-primary:#0A2342` (navy), `--color-accent:#1A5FA8` / `--color-accent-dk:#144D8C` (blue), `--color-light:#F7F9FC`, 4px `--radius`.
- Explicit stated design principle, verbatim from the stylesheet's own header comment: "직선·얇은 선·넓은 여백 / 둥글기 최소화" (straight lines, thin lines, wide whitespace / minimize rounding).
- Typography: Noto Sans KR (400/500/700/800), already loaded via Google Fonts link.
- Real regulatory identity (about.html): 의료기기 판매업 신고 2017 (제2017-3230034-00183호), 수입업 허가 2021 (제5181호), 제조업 허가 2022 (제7857호), 특허 제10-2594423호 2023 (수술용 유해가스 필터장치), GMP 적합인정서 2025 (KCL, 유효 ~2028.11.17). Real address: 서울 송파구 중대로 269-1, 5층.
- Existing logo asset: images/logo.jpg (used by js/components.js header).

Web search for "유엔아이엔스"/"UNIENS" and for the contact-page email domain "unipharm.co.kr" surfaced no distinct public presence matching this company — results returned unrelated similarly-named entities (유엔아이메디컬, 한국유니팜) — so no external brand fact overrides or supplements the repo. Treat the repository as the sole brand-fact source; do not import a "medical distributor" category default (e.g. generic clinical teal/white) in place of this site's own navy/blue sharp-edged identity.

## Reality ledger

**Real vs demo.** Everything on this page is real content about a real operating company (not a demo/sample product) — but three specific figures need the client's confirmation before being restated in a redesign, since they are asserted, not sourced, on the page itself:
- "20+ 거래 병원" (home) is corroborated by about.html's own text ("현재 국내 약 20개 병원과 수탁 계약") — internally consistent, likely safe to keep.
- "3 제품 카테고리" (home) matches the 3-way filter on products.html (수술용 기기 / 진단 장비 / 소모성 의료용품) — but every one of the 5 listed products is tagged `surgical` or `consumable`; **no product currently carries the `diagnostic` (진단 장비) category**, so that filter button is a reachable-but-always-empty state today. This is a pre-existing product-catalog gap, not something this redesign should silently paper over — flag it, do not invent a diagnostic product to fill it.
- "100% 허가인증제품" is well-supported by the about.html cert-grid (6 named registrations/certs) — safe to keep and now has concrete backing to point to.

**What the product cannot do.** No e-commerce/cart, no login/account, no online quote or order form on this page (contact.html carries a static contact-info page, not a submission form — there is no `<form>` in contact.html to receive a message; it is a phone/fax/email/map page only). No dashboard, no CMS-editable content blocks visible to the visitor (Netlify CMS exists under /admin for operators only). This redesign must not invent a checkout, login, or live-chat affordance that does not exist.

**Messy/open questions this run does not resolve, but the client should eventually answer:**
- Authentication: N/A — no visitor account exists or is implied.
- Pricing: not published; the 수탁(consignment) model itself *is* the pricing story (pre-supply, usage-based settlement, no upfront hospital purchase cost) — worth stating plainly rather than omitting pricing entirely.
- Failure/ambiguous-result handling: the site states no recall/adverse-event/quality-complaint escalation path anywhere (not on home, About, or Contact). For a regulated medical-device distributor this is a real gap worth flagging to the client, not one this visual redesign can invent copy for.
- Scope: which hospitals/regions are actually covered is unstated beyond "국내 약 20개 병원"; the 진단 장비 category gap above is part of this same open question.
- Data/permissions: none apply — no user data is collected on this page.
- Who operates it and how to reach them: contact.html lists a phone (02-402-6341), fax, and an email at `uni0001@unipharm.co.kr` — a different registered domain (unipharm.co.kr) than the company's own site, unexplained in the repo (possibly a shared parent-company mail system). Not resolved here; flag for the client rather than silently "fixing" the domain.

## Applicability notes (explicit N/A, not omission)

- Task coverage matrix: N/A — `uxSurface: marketing`, no `product`/`mixed` screens exist on this site; no `T#` rows are invented.
- Work objects / task-loop steps: N/A — marketing surface, no repeated task loop or work object exists for the user to operate.
- Multi-screen feature→page / page→feature flow map: N/A — this run redesigns one existing page (index.html) in place; no new screens are added and no product/mixed multi-screen loop is being designed.
- List→detail two-object production task: N/A — this is not a list→detail workspace; condition does not apply to a marketing surface.
- `--task-matrix`: intentionally omitted from `omd frame set` per protocol for `marketing`.
