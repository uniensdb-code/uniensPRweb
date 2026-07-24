# Copy deck — UNIENS home page (index.html)

Surface: `marketing`. Scope: in-place rewrite of index.html's five sections per
`.omd/frame.md`'s reframe (proof-forward gateway) and section-variety mandate. No new
routes, no layout/component changes — this file owns copy only.

## Sources and fact ledger

| ID | Status | Source | Fact |
| --- | --- | --- | --- |
| F-001 | verified | about.html timeline | 2017년 의료기기 판매업 신고, 신고번호 제2017-3230034-00183호 (송파구 보건소 수리) |
| F-002 | verified | about.html timeline + cert-grid | 2021년 의료기기 수입업 허가 취득, 제5181호 (서울지방식품의약품안전청, 2021.05.13) |
| F-003 | verified | about.html timeline + cert-grid | 2022년 의료기기 제조업 허가 취득, 제7857호 (서울지방식품의약품안전청, 2022.07.28) |
| F-004 | verified | about.html timeline + cert-grid | 2023년 특허 등록 제10-2594423호 (수술용 유해가스 필터장치), 출원 2021.10.22 / 등록 2023.10.23, 특허청 |
| F-005 | verified | about.html timeline + cert-grid | 2025년 GMP 적합인정서(제조의뢰) 취득, 한국건설생활환경시험연구원(KCL), KCL-ABBAA-25376, 유효기간 ~2028.11.17 |
| F-006 | verified | about.html 사업 분야 문단 | "현재 국내 약 20개 병원과 수탁 계약을 통해 운영 중" — 홈 통계 "20+ 거래 병원"의 근거 |
| F-007 | verified | about.html 인증·허가 현황 cert-grid | 판매업 신고·수입업 허가·제조업 허가·GMP(수입, KTL)·GMP(제조의뢰, KCL)·특허 6건 전부 실재 — 홈 통계 "100% 허가 인증 제품"의 근거 |
| F-008 | verified | about.html "수탁 방식이란?" 문단 | 유엔아이엔스가 의료기기를 병원에 먼저 납품하고, 병원의 실사용 수량만 정산하는 유통 방식. 병원은 선구매 부담 없이 필요한 만큼만 사용·정산 |
| F-009 | verified | about.html `.business-steps` 4단계 | 01 제품 납품(지정 보관 장소 사전 납품) · 02 사용 및 재고 관리(실사용 모니터링) · 03 사용량 정산(주기적 정산) · 04 재고 보충(기준 이하 시 즉시 보충 납품) |
| F-010 | verified | products.html 필터·제품 카드 | 실제 제품 5종이 전부 `data-category="surgical"` 또는 `"consumable"`(수술용 기기 / 소모성 의료용품)이며, `"diagnostic"`(진단 장비) 필터에 매칭되는 제품은 0건 |
| F-011 | verified | products.html 제품 카드 footer 태그 | "수탁 공급 가능" 태그(New Air Filter, X BLOCK, SUCCESS 단품)와 "급여 M2052619"(SUCCESS F), "급여 H3300110"(GENTA Q) 코드가 실제 제품 카드에 존재 |
| F-012 | verified | contact.html 구조 확인 | 전화·팩스·이메일·카카오맵 링크만 존재하며 `<form>` 요소 없음 — 제출형 문의 접수 기능 없음 |
| F-013 | verified | js/components.js 내비게이션 배열 | 홈/회사소개/제품소개/문의하기 4개 링크가 모든 페이지 헤더·푸터에 동일하게 존재 |
| F-014 | open | .omd/frame.md 리얼리티 레저 | 진단 장비 카테고리는 매칭 제품이 없는 공백 상태 — 클레임 근거로 사용 금지, 홈에서 카테고리 수를 헤드라인으로 내세우지 않음 |
| F-015 | open | .omd/frame.md 리얼리티 레저 | 문의 이메일 도메인(uni0001@unipharm.co.kr)이 자사 도메인과 다른 사유 미확인 — 이 페이지 범위 밖, 수정하지 않음 |

## Audience language

No verbatim voice-of-customer quotations exist for this run: `.omd/scout.md` discloses that
every reference this run captured was an image-fragment competitor screenshot (browser-rs,
Playwright fallback unavailable), not a review/forum/community capture — there is no mined
audience phrasing to cite, and none is invented here.

The closest available audience evidence is `.omd/frame.md`'s `uxTask`: the reader is 병원
구매·총무 담당자 또는 임상 행정 담당자 (hospital procurement/purchasing or clinical admin
staff), or a prospective partner hospital contact, arriving to judge in seconds whether
UNIENS is a currently-licensed, credible 병원 수탁 파트너, then move to About (history/certs)
or Products (catalog).

Implication for wording: this reader already works with 규제·인허가 용어 daily (신고, 허가,
등록, 인증, 수탁, 정산, 급여 코드) — these are the audience's own working vocabulary, not
jargon to translate into consumer Korean. Keep them exact and plain, the way about.html and
products.html already state them, rather than softening them into generic marketing language.

## Voice contract

- **Audience**: 병원 구매·총무 담당자 또는 임상 행정 담당자, 잠재 협력 병원 담당자 — 첫 방문에서 수 초 안에 신뢰 가능한 수탁 유통 파트너인지 판단하는 B2B 방문자
- **Language**: ko
- **Register**: 합니다체 (institutional precision; matches about.html/products.html body copy — "제공합니다", "취득했습니다", "정산합니다" already established on this site)

Vocabulary: 규제·인허가 용어(신고, 허가, 등록, 인증, 수탁, 정산, 급여 코드)는 그대로 유지 — 순
화하지 않는다. 설명 문장은 짧은 능동 동사 중심.
Sentence breath: 한 문장에 한 정보. 헤드라인은 한 호흡, 본문 문장도 한 호흡에 읽히는 길이로 제한.
Terminology to hold: 수탁(위탁을 병기하지 않고 "수탁"으로 대표 통일), 회사소개/제품소개/문의하기
(내비게이션 라벨 원문 그대로), 급여 코드, 인허가.
Words to avoid: 신뢰/전문성/파트너십을 근거 없이 단독 사용(반드시 구체적 사실과 짝지어 쓸 것),
최고의/완벽한/혁신적인 등 근거 없는 최상급, 공허한 "~게 아니라" 대조, "유엔아이엔스는 ~하는
회사예요" 식 자기소개체 남용, 붙잡다/그대로 남기다류의 막연한 은유.

## Surface copy

### Hero
- **Main message**: 유엔아이엔스는 병원을 대상으로 의료기기를 수탁 방식으로 유통하는 회사다.
- **Supporting fact**: 의료기기를 병원에 먼저 공급하고, 병원이 실제 사용한 수량만큼 정산한다.
- **Next action**: 회사소개로 이동해 연혁·사업 방식·인증 현황을 확인한다.
- **Claim refs**: F-008

Eyebrow: `병원 수탁 의료기기 유통`
Title (H1): `병원을 위한<br><strong>의료기기 수탁 유통</strong>`
Body: `유엔아이엔스는 의료기기를 병원에 먼저 공급하고, 병원이 사용한 수량만큼 정산합니다.`
CTA primary (`.btn--primary`): `회사소개` → `/about.html`
CTA secondary (`.btn--outline`): `제품소개` → `/products.html`

### 인증과 허가 (Proof strip)
- **Main message**: 창업 이후 취득한 인허가·특허·인증을 연도순 사실로 제시한다.
- **Supporting fact**: 2023년에는 자체 특허(제10-2594423호, 수술용 유해가스 필터장치)를 등록해 유통 허가를 넘어선 기술 실적도 보유한다.
- **Next action**: 회사소개에서 인증서 전체 목록을 확인한다.
- **Claim refs**: F-001, F-002, F-003, F-004, F-005, F-006, F-007

Eyebrow: `인증과 허가`
Title (H2): `허가번호와 등록일로 증명합니다`

Timeline (연도 · 항목 · 근거, 시간순):
- `2017 · 의료기기 판매업 신고 · 제2017-3230034-00183호 (송파구 보건소)`
- `2021 · 의료기기 수입업 허가 · 제5181호 (서울지방식품의약품안전청)`
- `2022 · 의료기기 제조업 허가 · 제7857호 (서울지방식품의약품안전청)`
- `2023 · 특허 등록 제10-2594423호 · 수술용 유해가스 필터장치`
- `2025 · GMP 적합인정서 취득 · 한국건설생활환경시험연구원(KCL), 유효기간 ~2028.11.17`

Stat pairs (숫자 + 서사, 형용사 단독 금지):
- `20+` / `거래 병원` — `국내 약 20개 병원과 수탁 계약을 맺고 있습니다.`
- `100%` / `허가 인증 제품` — `신고·허가·인증 6건을 모두 보유하고 있습니다.`

Inline link: `인증 현황 전체 보기` → `/about.html`

### 제품 라인업 (What you get)
- **Main message**: 실제로 공급 중인 제품 카테고리는 수술용 기기와 소모성 의료용품이다.
- **Supporting fact**: 일부 제품은 급여 코드를 보유하며, 병원 수탁 공급도 가능하다.
- **Next action**: 제품소개에서 카테고리별 제품을 확인한다.
- **Claim refs**: F-010, F-011

Eyebrow: `제품 라인업`
Title (H2): `수술용 기기와 소모성 의료용품을 공급합니다`
Body: `일부 품목은 급여 코드를 보유하고 있으며, 병원 수탁 공급도 가능합니다.`
CTA: `제품소개` → `/products.html`

(진단 장비는 언급하지 않는다 — F-014, 매칭 제품이 없는 공백 상태를 헤드라인이나 카테고리
개수 주장으로 노출하지 않는다.)

### 수탁 정산 방식 (How it works)
- **Main message**: 수탁 정산은 정해진 네 단계로 운영된다.
- **Supporting fact**: 병원은 선구매 부담 없이 사용한 만큼만 정산한다.
- **Next action**: 회사소개에서 사업 분야 전체 설명을 확인한다.
- **Claim refs**: F-008, F-009

Eyebrow: `공급 방식`
Title (H2): `선공급 후정산, 네 단계로 운영합니다`
Intro line: `병원은 선구매 부담 없이 사용한 만큼만 정산합니다.`

Steps (원문 그대로, about.html `.business-steps`에서 재사용):
- `01 · 제품 납품 — 의료기기를 병원 내 지정 보관 장소에 사전 납품합니다.`
- `02 · 사용 및 재고 관리 — 병원이 실제 의료 현장에서 제품을 사용하며 재고를 모니터링합니다.`
- `03 · 사용량 정산 — 사용된 수량에 대해서만 주기적으로 정산합니다.`
- `04 · 재고 보충 — 기준 재고 이하로 감소 시 즉시 보충 납품하여 공급을 유지합니다.`

Inline link: `사업 분야 자세히 보기` → `/about.html`

### 다음 단계 (Next step / CTA disambiguation)
- **Main message**: 다음 행동은 회사소개 확인 하나로 모인다.
- **Supporting fact**: 의료기기 수입업 허가 제5181호와 제조업 허가 제7857호를 보유한다.
- **Next action**: 회사소개로 이동해 연혁과 인증 현황을 확인한다.
- **Claim refs**: F-002, F-003

Title (H2): `회사소개에서 자세히 확인할 수 있습니다`
CTA primary (large, filled): `회사소개` → `/about.html`
CTA secondary (link, small): `제품소개` → `/products.html`
CTA secondary (link, small): `문의하기` → `/contact.html`
Plain-text credential line (Jera-Capital 방식, 장식 배지 아님): `의료기기 수입업 허가 제5181호 · 제조업 허가 제7857호`

## Navigation and actions

| Destination | Visible label | Immediate result | Return/next action |
| --- | --- | --- | --- |
| /about.html | 회사소개 | 연혁(2017~2025 인허가·특허·인증 타임라인), 사업 분야(수탁 정산 4단계), 인증·허가 현황, 오시는 길이 순서대로 표시됩니다. | 동일한 헤더·푸터 내비게이션(홈/회사소개/제품소개/문의하기)으로 언제든 홈 또는 제품소개로 이동할 수 있습니다 (F-013). |
| /products.html | 제품소개 | 수술용 기기·진단 장비·소모성 의료용품 필터와 제품 카드(제품명, 설명, 급여 코드 또는 수탁 공급 가능 태그)가 표시됩니다. 진단 장비 필터는 매칭 제품이 없어 빈 목록으로 표시됩니다 (F-014). | 동일한 헤더·푸터 내비게이션으로 홈 또는 회사소개로 복귀할 수 있습니다. |
| /contact.html | 문의하기 | 전화번호, 팩스, 이메일, 카카오맵 링크가 있는 정적 연락처 페이지가 표시됩니다. 제출형 문의 양식(폼)은 없습니다 (F-012). | 동일한 헤더·푸터 내비게이션으로 다른 페이지로 이동할 수 있습니다. |

## States and recovery

- **Interaction scope**: static
- **Primary copy**: 위 Surface copy의 5개 블록(히어로 타이틀/본문/CTA, 인증 타임라인·통계, 제품 라인업 안내, 수탁 정산 4단계, 마감 CTA와 플레인텍스트 인허가 병기) — index.html이 출하할 전체 1차 경로 카피.
- **Recovery copy**: N/A — index.html에는 폼, 검증, 상태 전환이 없는 정적 마케팅 페이지다(`.omd/frame.md` uxSurface: marketing; 폼이 없는 것은 contact.html도 동일하며 F-012로 별도 기록, 이 페이지 범위 밖).
- **Primary probe**: N/A — 스크립트로 검증할 상태 전환(제출/로딩/성공)이 이 페이지에 존재하지 않는다. 유일한 동작은 동일 사이트 내 링크 이동이며 별도의 인터랙션 상태가 없다.
- **Recovery probe**: N/A — 이 페이지에는 복구가 필요한 오류/빈 상태가 존재하지 않는다.

## Humanize audit

- **Input contract**:
  - Speaker: 유엔아이엔스(주식회사 유엔아이엔스), 유통사 본인이 기관 화자로 발화.
  - Listener: 병원 구매·총무 담당자 또는 임상 행정 담당자, 잠재 협력 병원 담당자.
  - Situation: 홈페이지 첫 방문, 수 초 안에 "지금도 유효한 인허가를 보유한 수탁 유통 파트너인가"를 판단하는 상황.
  - Intended change/next move: 방문자가 회사소개로 이동해 연혁·인증 현황을 확인하도록 만든다(1차); 제품소개 또는 문의하기로 이동(2차).
  - Genre/register: B2B 기관 마케팅 랜딩 페이지, 합니다체.
  - Verified facts and verbatim quotes: F-001~F-013 (위 원장). 오디언스의 직접 인용문은 확보되지 않았다(Audience language 절 참조) — 추정 인용 없음.
- **Mode**: local repair — index.html의 기존 섹션 골격(히어로/통계/가치카드/CTA)과 이미 인코딩된 내비 위계(회사소개가 이미 primary 버튼)는 유지하고, 근거 없는 형용사 캡션과 동일 명제 반복만 사실 기반 카피로 교체했다.
- **Fidelity**: 근거 없는 "신뢰/전문성/파트너십" 캡션 3개와 헤드라인급 "3 제품 카테고리" 주장을 제거하고, F-001~F-011의 실제 인허가·특허·인증·제품 사실로 교체했다. 불확실성 보존: 진단 장비 카테고리 공백(F-014)과 문의 이메일 도메인 불일치(F-015)는 클레임에 쓰지 않고 open으로 유지했다. Quote status: 인용문 없음(직접 확보된 오디언스 발화 없음). 출하 카피가 참조하는 Claim refs는 F-001–F-011(Surface copy 각 블록 참조), 내비게이션 절에서 F-012~F-014 추가 참조.
- **Root cause**: 홈페이지가 히어로→통계→가치카드→CTA에서 "신뢰하라"는 단일 명제를 네 번 반복하던 문제 — 각 섹션에 서로 다른 질문(정체성 / 증거 / 제품 / 절차 / 행동)을 배정하고, 형용사 캡션을 회사가 이미 보유한 날짜·번호 있는 사실로 교체해 반복을 해소했다.
- **Next action**: 방문자가 회사소개를 클릭해 연혁·사업 분야·인증 현황·오시는 길을 확인하는 것(1차 경로), 이어서 제품소개 또는 문의하기로 이동하는 것(2차 경로).
- **Owner handoff**: writer changed deck -> copy check -> hand synchronizes source (omd copy --check 통과 후 hand가 이 카피를 index.html에 반영).

Additional review notes:
- **Proposition repetition**: 5개 섹션이 각각 다른 질문에 답한다 — 정체성(히어로) / 검증(인증 타임라인) / 제품(라인업) / 절차(정산 4단계) / 행동(마감 CTA). 어떤 두 섹션도 동일 명제를 반복하지 않는다.
- **CTA prediction**: 모든 CTA는 활성화 직후 결과를 예측한다 — 회사소개는 연혁·인증 확인, 제품소개는 카테고리별 제품·급여 코드 확인, 문의하기는 (제출 아님) 연락처·오시는 길 확인.
- **Terminology**: 수탁/급여 코드/인허가 용어를 페이지 전체에서 통일했고, 내비게이션 라벨(회사소개/제품소개/문의하기)을 원문 그대로 유지했다.
- **Read-aloud/register**: 전 문장 합니다체로 낭독 확인, 해요체 혼용 없음. 헤드라인·본문 모두 한 호흡 길이로 작성했다.
- **Emotion**: 근거 없는 감탄형 문구 없음. 확신은 형용사가 아니라 등록번호·날짜·단계 수로 표현했다.
- **Error/empty/recovery/accessibility**: 해당 상태 없음(static, 위 States and recovery 참조). 접근성 관점에서 타임라인·단계 리스트는 순서 있는 목록 구조를 가정한 텍스트로 작성해 스크린리더 낭독 순서가 시각 순서와 일치하도록 했다.
