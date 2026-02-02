/**
 * File: main.js
 * Purpose: Global boot (dir/lang sanity, optional partials later)
 * Note: No header/footer logic here yet.
 */
import { isRTL } from './utils.js';

document.addEventListener('DOMContentLoaded', () => {
  // enforce RTL-first defaults
  if (!document.documentElement.hasAttribute('dir')) {
    document.documentElement.setAttribute('dir', 'rtl');
  }
  if (!document.documentElement.hasAttribute('lang')) {
    document.documentElement.setAttribute('lang', 'ar');
  }

  // data-action toggles (generic)
  document.addEventListener('click', (e) => {
    const t = e.target.closest('[data-toggle-class]');
    if (!t) return;
    const sel = t.getAttribute('data-target');
    const cls = t.getAttribute('data-toggle-class');
    if (sel && cls) document.querySelector(sel)?.classList.toggle(cls);
  });

  // Search toggle
  document.querySelectorAll(".js-search-toggle").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".ASHeaderSearch").forEach(s => s.classList.remove("is-active"));
      const searchWrap = btn.closest(".ASHeaderSearch");
      searchWrap.classList.toggle("is-active");
    });
  });

  // Close search if clicking outside
  document.addEventListener("click", e => {
    if (!e.target.closest(".ASHeaderSearch")) {
      document.querySelectorAll(".ASHeaderSearch").forEach(s => s.classList.remove("is-active"));
    }
  });
  // expose simple flag for debug if needed
  window.__AS_IS_RTL__ = isRTL();
});
