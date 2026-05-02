/* ==============================================================
   TRENDME – JavaScript
   Liten, vanilla. Ingen byggsteg, ingen avhengigheter.
   ============================================================== */

(function () {
  'use strict';

  // ---- Sticky nav state -------------------------------------------------
  const nav = document.getElementById('nav');
  const onScroll = () => {
    if (window.scrollY > 20) nav.classList.add('is-scrolled');
    else nav.classList.remove('is-scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ---- Mobil-meny -------------------------------------------------------
  const toggle = document.getElementById('navToggle');
  const navLinks = document.querySelectorAll('.nav__links a');
  if (toggle) {
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
  }
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      if (toggle) toggle.setAttribute('aria-expanded', 'false');
    });
  });

  // ---- Reveal-on-scroll -------------------------------------------------
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            // Liten staggered entrance for elementer i samme seksjon
            const delay = Math.min(i * 60, 240);
            setTimeout(() => entry.target.classList.add('is-visible'), delay);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add('is-visible'));
  }

  // ---- Auto-fyll årstall i footer --------------------------------------
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---- Sikre at hero-video spiller (kun for <video>-element, ikke iframe) ----
  const heroVideo = document.querySelector('video.hero__video');
  if (heroVideo && typeof heroVideo.play === 'function') {
    const tryPlay = () => {
      const p = heroVideo.play();
      if (p && typeof p.catch === 'function') p.catch(() => {});
    };
    tryPlay();
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden) tryPlay();
    });
  }
})();
