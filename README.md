# UNIENS 유엔아이엔스 — 공식 홈페이지

> 병원 수탁·위탁 방식의 의료기기 유통 전문 기업 **유엔아이엔스** 공식 웹사이트 소스코드입니다.

---

## 배포 주소

- **라이브 사이트**: Netlify 자동 배포 (`main` 브랜치 푸시 → 즉시 반영)
- **GitHub 저장소**: `https://github.com/uniensdb-code/uniensPRweb`

---

## 로컬에서 보는 방법

별도 빌드 과정이 없는 순수 HTML 사이트입니다.

> **중요**: 파일을 그냥 더블클릭해서 열면 이미지·CSS가 깨집니다.  
> 반드시 아래 방법 중 하나로 열어주세요.

**방법 1 — VS Code Live Server (권장)**
1. VS Code에서 프로젝트 폴더 열기
2. 우측 하단 **Go Live** 버튼 클릭
3. 브라우저에서 `http://localhost:5500` 열기

**방법 2 — Python 내장 서버**
```bash
cd uniens-website
python3 -m http.server 8080
# 브라우저에서 http://localhost:8080 열기
```

---

## 페이지 구성

| 파일 | URL | 설명 |
|------|-----|------|
| `index.html` | `/` | 메인 홈 |
| `about.html` | `/about` | 회사소개 |
| `products.html` | `/products` | 제품 목록 |
| `contact.html` | `/contact` | 문의하기 |
| `products/success.html` | `/products/success` | SUCCESS 단품 상세 |
| `products/success-f.html` | `/products/success-f` | SUCCESS F 세트 상세 |
| `products/airfilter.html` | `/products/airfilter` | New Air Filter 상세 |
| `products/xblock.html` | `/products/xblock` | X BLOCK 상세 |

---

## 폴더 구조

```
uniens-website/
├── index.html              # 메인 홈
├── about.html              # 회사소개
├── products.html           # 제품 목록
├── contact.html            # 문의하기
│
├── products/               # 상품 상세 페이지
│   ├── success.html
│   ├── success-f.html
│   ├── airfilter.html
│   └── xblock.html
│
├── css/
│   └── style.css           # 전체 공통 스타일 (헤더·푸터·레이아웃 포함)
│
├── js/
│   ├── components.js       # 헤더·푸터 공통 컴포넌트 (★ 수정 핵심 파일)
│   └── main.js             # 햄버거 메뉴·스크롤 애니메이션 등 인터랙션
│
├── images/                 # 제품 이미지, 로고, 핵심가치 배경 이미지
├── pdf/                    # 제품별 카탈로그 PDF
│
├── admin/                  # Netlify CMS 관리자 페이지
│   ├── index.html
│   └── config.yml
│
└── netlify.toml            # Netlify 배포 설정
```

---

## 자주 수정하는 것들

### 헤더·푸터 수정
`js/components.js` 파일 하나만 수정하면 **모든 페이지에 자동 반영**됩니다.

- 로고 이미지 변경 → `images/logo.jpg` 교체 후 같은 파일명 유지
- 회사 주소·전화번호 변경 → `getFooter()` 함수 안 수정
- 메뉴 항목 추가·변경 → 파일 상단 `_NAV` 배열 수정

```js
const _NAV = [
  { href: '/index.html',    label: '홈',      key: 'home'     },
  { href: '/about.html',    label: '회사소개',  key: 'about'    },
  { href: '/products.html', label: '제품소개',  key: 'products' },
  { href: '/contact.html',  label: '문의하기',  key: 'contact'  },
];
```

### 제품 이미지·PDF 교체
| 제품 | 이미지 파일 | PDF 파일 |
|------|------------|---------|
| SUCCESS 단품 | `images/successsingle.jpg` | `pdf/successcatalog.pdf` |
| SUCCESS F 세트 | `images/successsetf.jpg` | `pdf/successFcatalog.pdf` |
| New Air Filter | `images/newairfiltrer.jpg` | `pdf/airfiltercatalog.pdf` |
| X BLOCK | `images/xblockpage.jpg` | `pdf/xblockcatalog.pdf` |

> 파일명을 그대로 유지한 채 교체하면 HTML 수정 없이 바로 반영됩니다.

### 색상 변경
`css/style.css` 파일 최상단 CSS 변수만 수정하면 됩니다.

```css
:root {
  --color-primary: #0A2342;   /* 네이비 (헤더 배경, 주요 텍스트) */
  --color-accent:  #1A5FA8;   /* 블루 (강조색, 버튼, 링크) */
}
```

---

## 배포 방법

```bash
git add .
git commit -m "수정 내용 설명"
git push origin main
```

푸시하면 Netlify가 자동으로 감지해서 1~2분 내 라이브 사이트에 반영됩니다.  
배포 상태는 [Netlify 대시보드](https://app.netlify.com) → Deploys 탭에서 확인하세요.

---

## 새 제품 페이지 추가하는 법

1. 기존 `products/xblock.html` 파일을 복사해서 새 파일 생성 (예: `products/newproduct.html`)
2. 내용(제목, 이미지 경로, 스펙 등) 수정
3. `products.html` 에 제품 카드 추가
4. `_NAV` 에 메뉴 추가가 필요하면 `js/components.js` 수정

---

## 기술 스택

| 항목 | 내용 |
|------|------|
| 언어 | HTML, CSS, JavaScript (프레임워크 없음) |
| 폰트 | Noto Sans KR (Google Fonts) |
| 호스팅 | Netlify |
| CMS | Netlify CMS (admin 패널) |
| 빌드 도구 | 없음 (순수 정적 파일) |
