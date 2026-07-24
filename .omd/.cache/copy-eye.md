Mode: copy-editor
Review time: 2026-07-23T04:23:00Z
Reviewed copy-deck SHA-256: 1acf713dc62e490c7f8e17c004cd9dec4981b7fe6a51b06cb4de0d9f8ee0035d
Verdict: Revise before ship — 3 findings (1 register/voice-contract violation, 1 fact-fidelity overreach, 1 terminology inconsistency); no blocking structural defect.

Findings:

1. [Register violation, high severity — Voice contract] "다음 단계" section Title (H2), line 134:
   `회사소개에서 자세히 확인하세요` uses 해요체 imperative ("-세요"), not the deck's own
   mandated 합니다체 register (Voice contract, line 49: "Register: 합니다체"). Every other
   headline/body line in the deck (예: "허가번호와 등록일로 증명합니다", "수술용 기기와
   소모성 의료용품을 공급합니다", "선공급 후정산, 네 단계로 운영합니다") correctly holds
   합니다체. This single line breaks that consistency and reads as the softer,
   consumer-ad convention ("지금 확인하세요") the cited brief register explicitly asks
   this page to avoid ("confident... plain fact statements... not consumer marketing
   tone"). It also directly contradicts the deck's own Humanize audit claim at line 175:
   "전 문장 합니다체로 낭독 확인, 해요체 혼용 없음" (verified read-aloud in 합니다체
   throughout, no 해요체 mixing) — that claim is false as written; this line is 해요체.
   Fix: restate as 합니다체, e.g. "회사소개에서 자세히 확인할 수 있습니다" or
   "회사소개에서 자세히 확인하십시오."

2. [Fact-fidelity overreach, medium-high severity] "인증과 허가" stat pair, line 92:
   `100%` / `허가 인증 제품` — `취급하는 모든 제품이 신고·허가·인증 절차를 거칩니다.`
   Its cited Claim ref is F-007, which the ledger itself defines as: "판매업 신고·수입업
   허가·제조업 허가·GMP(수입, KTL)·GMP(제조의뢰, KCL)·특허 6건 전부 실재" — i.e. six
   organization-level licenses/certifications the company holds. That fact supports a
   claim about the company's own regulatory standing, not a claim that "모든 제품"
   (every individual product SKU) undergoes its own "신고·허가·인증 절차." No fact ID in
   the ledger (F-001–F-013) states that each product is individually registered/
   certified — F-010/F-011 describe only category and per-product tags (수탁 공급
   가능 / 급여 코드), not certification status per SKU. As written, the stat narration
   generalizes a company-level compliance fact into an unverified product-level
   universal claim — exactly the kind of claim a hospital procurement reader (this
   audience explicitly works with 인허가 vocabulary daily, per the deck's own Audience
   language section) would notice and could contest. Fix: rescope the narration to what
   F-007 actually supports, e.g. "유엔아이엔스가 보유한 판매·수입·제조 허가와 인증은
   모두 실제로 취득한 것입니다" or similar company-level phrasing, or find/add a fact ID
   that verifies per-product certification before keeping a per-product claim.

3. [Terminology inconsistency, medium severity — Vocabulary contract] The Voice
   contract's "Terminology to hold" list (line 55) locks the exact term "급여 코드," and
   the 제품 라인업 section's own Supporting fact (line 98) uses "급여 코드." But the
   section's shipped Body copy (line 104) switches to "요양급여 코드":
   `일부 품목은 요양급여 코드를 보유하고 있으며, 병원 수탁 공급도 가능합니다.` This is
   a different term from the one the deck commits to holding, introduced within the same
   section, and it also diverges from the ledger's own phrasing at F-011 ("급여
   M2052619", "급여 H3300110" — plain "급여," not "요양급여"). Not a fabrication, but an
   avoidable internal inconsistency in a term this audience reads precisely. Fix: use
   "급여 코드" in the shipped Body line to match the deck's own terminology lock and the
   F-011 source phrasing.

Checks that passed (recorded for completeness, no action needed):
- Fact traceability: every other shipped claim in Surface copy (Hero, 인증 timeline
  rows, 20+ 거래 병원 stat, 제품 라인업 category/tag claims, 4-step 정산 process, 다음
  단계 credential line) traces to a "verified"-status fact ID (F-001–F-006, F-008–F-011)
  and the claim text matches what that fact ID states.
- Open-status facts correctly excluded from claims: F-014 (진단 장비 공백) and F-015
  (이메일 도메인 불일치) are both marked "open" and the deck explicitly declines to use
  either as claim support (line 107-108, line 25) — correctly honored.
- States/recovery: Interaction scope is declared "static," and Recovery copy / Primary
  probe / Recovery probe are all correctly N/A with a stated reason (no forms, no state
  transitions, no error/empty states on this page) rather than invented status copy.
- Register elsewhere: 합니다체 held consistently across Hero, Proof strip, Product
  lineup, and Process sections (only the Finding 1 line breaks it).
- No empty superlatives, unearned "신뢰/전문성/파트너십" standalone usage, hedging
  language, or translated-from-English phrasing found in shipped copy — the deck's own
  "Words to avoid" list appears honored outside of Finding 1's register slip.
- CTA prediction: all three destination CTAs (회사소개/제품소개/문의하기) have an
  "Immediate result" description that matches what the deck says the destination
  actually contains, including correctly disclosing that 문의하기 has no submission
  form (F-012) — no CTA overpromises a capability the linked page lacks.
