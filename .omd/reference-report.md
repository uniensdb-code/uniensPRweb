# 참조 출처 보고서 (Reference Provenance Report)

> 참고: 설치된 `omd` CLI(v0.18.0)는 `generateReferenceReport`를 노출하는 서브커맨드를 제공하지 않습니다(`omd --help`로 확인).
> 이 보고서는 코디네이터/파이널라이저가 `.omd/reference-usage.json`과 `.omd/reference-board.json`(선택된 후보: `institutional-proof-forward`)으로부터 직접 작성했습니다 — 형식은 프로토콜의 표 스키마를 따르되, 자동 생성 도구의 산출물은 아닙니다.
>
> Note: the installed `omd` CLI (v0.18.0) does not expose a subcommand for `generateReferenceReport` (confirmed via `omd --help`). This report was hand-authored by the coordinator/finalizer from `.omd/reference-usage.json` and `.omd/reference-board.json` (selected candidate: `institutional-proof-forward`) — it follows the protocol's row schema but is not a tool-generated artifact.

## 요약 (Summary)

선택된 참조 후보 **"Institutional proof-forward"**의 6개 슬롯 중 5개가 실제로 채택(`used`)되었고, 1개는 명시적 반례(`anti-reference`)로 기록되었습니다. 원본 사이트의 픽셀, 스크린샷, 색상 값, 문구는 어디에도 이식되지 않았으며, 오직 정제된 구조적/시각적 원칙만 전달되었습니다.

Of the selected candidate assembly's 6 slots, 5 were adopted (`used`) and 1 is recorded as an explicit anti-reference. No source pixel, screenshot, colour value, or text was transplanted anywhere — only sanitized structural/visual principles transferred.

## 상세 (Detail)

| 슬롯 (Slot) | 상태 (Status) | 가져온 속성 (Borrowed) | 가져오지 않은 속성 (Explicitly not borrowed) | 변형 (Transformation) | 배포 위치 (Destination) | 근거 (Production evidence) |
| --- | --- | --- | --- | --- | --- | --- |
| hero-signature-moment | used | 재고 사진 없는 확신에 찬 kinetic-type 헤드라인 구조 (structure, proportion) | 소스의 제조업 주제, 워드마크, 비교 그래픽 | 헤드라인 2줄(500→800 굵기) + 조용한 인라인 증거 수치 줄로 재구성; 라운드 2에서 우측 여백에 "01" 고스트 넘버럴 추가 | `/` → `.hero__content--home`, `.hero__side-mark` | `.omd/.cache/rounds/round-2/desktop-full.png`, `mobile-full.png` |
| hero-anti-pattern | anti-reference | (전체가 회피 대상) | 가격 중심 상품 캐러셀, 푸터 전용 등록번호, 쇼핑몰 프레이밍 전체 | 반전 적용: 기존 3슬라이드 자동재생 스톡사진 히어로 제거, 등록 정보를 별도 증명 섹션으로 승격 | `/` → `.hero` (반례로서 부재를 통해 증명) | `index.html`의 현재 `.hero` 마크업(슬라이더 없음), git diff |
| proof-strip | used | 연도-사실 쌍의 시간순 마일스톤 타임라인 (structure, density) | 소스의 고객 서비스 주제, 12단계 밀도 | 실제 5개 UNIENS 사실(2017 판매업신고 → 2021 수입업허가 → 2022 제조업허가 → 2023 특허등록 → 2025 GMP)로 압축 | `/` → `.proof-rail` | `.omd/.cache/rounds/round-2/desktop-full.png` |
| product-teaser | used | 라벨-위-제목 카드 해부 구조 (structure, rhythm) | 소스의 핀테크 역량 명칭, 파트너 로고 스트립 | 실제 제품 카테고리(수술용 기기/소모성 의료용품) + 급여코드·수탁공급 태그로 대체; 라운드 1에서 카드 간 시각적 구분 강화 | `/` → `.teaser-grid` | `.omd/.cache/rounds/round-1/teaser-cards-inspect.png` |
| process-steps | used | 번호 매긴 수평 프로세스 스트립 (structure, density) | 소스의 제조 단계 내용, 테스티모니얼, 종결 카운터 | 실제 4단계 수탁 정산 방식(제품 납품 → 사용 및 재고 관리 → 사용량 정산 → 재고 보충)으로 대체 | `/` → `.process-rail` | `.omd/.cache/rounds/round-2/desktop-full.png` |
| cta-disambiguation | used | 헤어라인 구분 + 명확한 1차/2차 CTA 해부 구조 (rhythm, proportion) | 소스의 제품명, 뉴스레터 폼 | 기존 2개 동일 비중 CTA 카드를 1차(회사소개, 채워진 버튼) vs. 2차(제품소개·문의하기, 조용한 링크) + 평문 등록번호 줄로 재구성 | `/` → `.final-cta` | `.omd/.cache/rounds/round-2/desktop-full.png`, `mobile-full.png` |

## 서명 (Sign-off)

- 선택 근거: `.omd/decisions.md` § "Reference assembly selection"
- 구조 계약: `.omd/composition.md` (Transfer boundary 섹션)
- 최종 생산 코드: `index.html`, `css/style.css`
