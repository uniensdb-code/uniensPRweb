/* ============================================================
  UNIENS — 레이아웃 컴포넌트 (JS Include 방식)
  ──────────────────────────────────────────────────────────
  헤더/푸터를 수정하려면 getHeader() / getFooter() 함수만 편집하세요.
  저장하면 모든 페이지에 자동 반영됩니다.
  ============================================================ */

const _NAV = [
  { href: '/index.html',    label: '홈',      key: 'home'     },
  { href: '/about.html',    label: '회사소개',  key: 'about'    },
  { href: '/products.html', label: '제품소개',  key: 'products' },
  { href: '/contact.html',  label: '문의하기',  key: 'contact'  },
];

/* ── 헤더 HTML 생성 ──────────────────────────────────────── */
function getHeader(activePage) {
  const desktopLinks = _NAV.map(({ href, label, key }) =>
    `<a href="${href}" class="nav__link${activePage === key ? ' active' : ''}">${label}</a>`
  ).join('');

  const mobileLinks = _NAV.map(({ href, label }) =>
    `<a href="${href}" class="nav__link">${label}</a>`
  ).join('');

  return `
<header class="header">
  <div class="container header__inner">
    <a href="/index.html" class="logo">UNI<span>ENS</span></a>
    <nav class="nav" aria-label="메인 메뉴">${desktopLinks}</nav>
    <button class="hamburger" aria-label="메뉴 열기" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
  </div>
  <nav class="mobile-nav" aria-label="모바일 메뉴">${mobileLinks}</nav>
</header>`;
}

/* ── 푸터 HTML 생성 ──────────────────────────────────────── */
function getFooter() {
  return `
<footer class="footer">
  <div class="container">
    <div class="footer__grid">
      <div>
        <p class="footer__logo">UNI<span>ENS</span></p>
        <p class="footer__desc">
          유엔아이엔스는 병원 수탁·위탁 방식의 의료기기 유통을 전문으로 하는 기업입니다.<br>
          신뢰할 수 있는 파트너로서 병원의 의료 서비스 향상에 기여합니다.
        </p>
      </div>
      <div>
        <p class="footer__heading">메뉴</p>
        <div class="footer__links">
          <a href="/index.html">홈</a>
          <a href="/about.html">회사소개</a>
          <a href="/products.html">제품소개</a>
          <a href="/contact.html">문의하기</a>
        </div>
      </div>
      <div>
        <p class="footer__heading">연락처</p>
        <div class="footer__info">
          <span>서울특별시 송파구 중대로 269-1, 5층 (오금동, 송원빌딩)</span>
          <span>Tel. 02-402-6341 &nbsp;|&nbsp; Fax. 02-402-6342</span>
          <span>uni0001@unipharm.co.kr</span>
        </div>
      </div>
    </div>
    <div class="footer__bottom">
      <span>의료기기 수입업 허가 제 5181 호 &nbsp;|&nbsp; 의료기기 제조업 허가 제 7857 호</span>
      <span>© 2025 UNIENS Co., Ltd. All rights reserved.</span>
    </div>
  </div>
</footer>`;
}

/* ── 페이지 초기화 — 각 HTML 파일 맨 아래에서 호출 ─────── */
function initPage(activePage) {
  const headerZone = document.getElementById('layout-header');
  const footerZone = document.getElementById('layout-footer');
  if (headerZone) headerZone.outerHTML = getHeader(activePage);
  if (footerZone) footerZone.outerHTML = getFooter();
}
