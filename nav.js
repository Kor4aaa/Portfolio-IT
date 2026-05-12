/* ============================================
   PORTFOLIO WENSEL REYES — nav.js
   Navigation globale, thème, langue, animations
   ============================================ */

(function () {
  'use strict';

  /* ══════════════════════════════════════════
     1. THÈME (dark / light)
  ══════════════════════════════════════════ */
  const root = document.documentElement;
  const saved = sessionStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  let theme = saved || (prefersDark ? 'dark' : 'light');
  root.setAttribute('data-theme', theme);

  function syncThemeBtn() {
    const btn = document.getElementById('btn-theme');
    if (!btn) return;
    btn.setAttribute('aria-label', theme === 'dark' ? 'Passer en mode clair' : 'Passer en mode sombre');
    btn.innerHTML = theme === 'dark'
      ? `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>`
      : `<svg viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
  }

  function toggleTheme() {
    theme = theme === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', theme);
    sessionStorage.setItem('theme', theme);
    syncThemeBtn();
  }

  /* ══════════════════════════════════════════
     2. LANGUE (fr / en)
  ══════════════════════════════════════════ */
  let lang = sessionStorage.getItem('lang') || 'fr';

  function applyLang(l) {
    lang = l;
    sessionStorage.setItem('lang', l);
    document.querySelectorAll('[data-fr]').forEach(el => {
      el.innerHTML = l === 'fr' ? el.dataset.fr : (el.dataset.en || el.dataset.fr);
    });
    document.querySelectorAll('[data-fr-def]').forEach(el => {
      el.setAttribute('data-def', l === 'fr' ? el.dataset.frDef : (el.dataset.enDef || el.dataset.frDef));
    });
    const btn = document.getElementById('btn-lang');
    if (btn) btn.textContent = l === 'fr' ? 'EN' : 'FR';
    document.documentElement.lang = l;
  }

  function toggleLang() {
    applyLang(lang === 'fr' ? 'en' : 'fr');
  }

  /* ══════════════════════════════════════════
     3. NAVIGATION
  ══════════════════════════════════════════ */
  function buildNav() {
    const navLinks = document.getElementById('nav-links');
    const mobileMenu = document.getElementById('mobile-menu');
    const burger = document.getElementById('nav-burger');
    const btnTheme = document.getElementById('btn-theme');
    const btnLang = document.getElementById('btn-lang');

    const currentPage = location.pathname.split('/').pop() || 'index.html';

    const links = [
      { href: '../index.html', fr: 'Accueil', en: 'Home', file: 'index.html' },
      { href: 'competences.html', fr: 'Compétences', en: 'Skills', file: 'competences.html' },
      { href: 'projets.html', fr: 'Projets', en: 'Projects', file: 'projets.html' },
      { href: 'parcours.html', fr: 'Parcours', en: 'Journey', file: 'parcours.html' },
      { href: 'contact.html', fr: 'Contact', en: 'Contact', file: 'contact.html' },
    ];

    // Pour index.html, les liens pointent vers pages/
    const isRoot = currentPage === 'index.html' || currentPage === '';
    links.forEach(l => {
      if (isRoot) l.href = 'pages/' + l.file;
    });

    function makeLink(l, extra = '') {
      const isActive = currentPage === l.file;
      return `<a href="${l.href}" class="${isActive ? 'active' : ''} ${extra}" 
        data-fr="${l.fr}" data-en="${l.en}"
        data-page-link>${l.lang === 'en' ? l.en : l.fr}</a>`;
    }

    if (navLinks) navLinks.innerHTML = links.map(l => makeLink(l)).join('');
    if (mobileMenu) mobileMenu.innerHTML = links.map(l => makeLink(l)).join('');

    if (btnTheme) btnTheme.addEventListener('click', toggleTheme);
    if (btnLang) btnLang.addEventListener('click', toggleLang);

    // Burger
    if (burger && mobileMenu) {
      burger.addEventListener('click', () => {
        burger.classList.toggle('open');
        mobileMenu.classList.toggle('open');
      });
      // Fermer au clic sur un lien mobile
      mobileMenu.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
          burger.classList.remove('open');
          mobileMenu.classList.remove('open');
        });
      });
    }

    // Fermer mobile si clic dehors
    document.addEventListener('click', e => {
      if (mobileMenu && burger && !mobileMenu.contains(e.target) && !burger.contains(e.target)) {
        burger.classList.remove('open');
        mobileMenu.classList.remove('open');
      }
    });
  }

  /* ══════════════════════════════════════════
     4. TRANSITIONS DE PAGE (fondu)
  ══════════════════════════════════════════ */
  function setupPageTransitions() {
    const overlay = document.getElementById('page-transition');
    if (!overlay) return;

    document.querySelectorAll('[data-page-link]').forEach(a => {
      a.addEventListener('click', e => {
        const href = a.getAttribute('href');
        if (!href || href.startsWith('#') || href.startsWith('mailto')) return;
        e.preventDefault();
        overlay.classList.add('active');
        setTimeout(() => { window.location.href = href; }, 320);
      });
    });

    // Fadeout rapide au chargement
    window.addEventListener('pageshow', () => {
      overlay.classList.remove('active');
    });
  }

  /* ══════════════════════════════════════════
     5. BARRE DE PROGRESSION (scroll)
  ══════════════════════════════════════════ */
  function setupProgressBar() {
    const bar = document.getElementById('progress-bar');
    if (!bar) return;
    const update = () => {
      const scrolled = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = (height > 0 ? (scrolled / height) * 100 : 0) + '%';
    };
    window.addEventListener('scroll', update, { passive: true });
    update();
  }

  /* ══════════════════════════════════════════
     6. REVEAL AU SCROLL (IntersectionObserver)
  ══════════════════════════════════════════ */
  function setupReveal() {
    const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    if (!els.length) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          const delay = entry.target.dataset.delay || 0;
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, delay);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    els.forEach(el => obs.observe(el));
  }

  /* ══════════════════════════════════════════
     7. CANVAS FOND (particules subtiles)
  ══════════════════════════════════════════ */
  function setupCanvas() {
    const canvas = document.getElementById('bg-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let W, H, particles;
    const COUNT = 55;

    function resize() {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }

    function initParticles() {
      particles = Array.from({ length: COUNT }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 1.2 + 0.3,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.12,
        o: Math.random() * 0.3 + 0.05,
      }));
    }

    function getAccentColor() {
      return getComputedStyle(document.documentElement)
        .getPropertyValue('--accent').trim();
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);
      const color = getAccentColor();
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.globalAlpha = p.o;
        ctx.fill();
      });
      ctx.globalAlpha = 1;
      requestAnimationFrame(draw);
    }

    resize();
    initParticles();
    draw();
    window.addEventListener('resize', () => { resize(); initParticles(); }, { passive: true });
  }

  /* ══════════════════════════════════════════
     8. NAV — scroll shadow
  ══════════════════════════════════════════ */
  function setupNavScroll() {
    const nav = document.querySelector('nav');
    if (!nav) return;
    window.addEventListener('scroll', () => {
      nav.style.borderBottomColor = window.scrollY > 10
        ? 'var(--border)'
        : 'var(--border-soft)';
    }, { passive: true });
  }

  /* ══════════════════════════════════════════
     9. INIT
  ══════════════════════════════════════════ */
  function init() {
    syncThemeBtn();
    buildNav();
    applyLang(lang);
    setupPageTransitions();
    setupProgressBar();
    setupReveal();
    setupCanvas();
    setupNavScroll();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();