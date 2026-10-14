// Copy email to clipboard (falls back to mailto)
const toast = document.querySelector('.toast');
function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(showToast.t);
  showToast.t = setTimeout(() => toast.classList.remove('show'), 2000);
}

document.querySelectorAll('.copy-email').forEach((btn) => {
  btn.addEventListener('click', async () => {
    const email = btn.dataset.email;
    try {
      await navigator.clipboard.writeText(email);
      showToast('Email copied ✓');
    } catch {
      window.location.href = `mailto:${email}`;
    }
  });
});

// Show the floating dock once the hero is scrolled past
const dock = document.querySelector('.dock');
const hero = document.querySelector('.hero');
new IntersectionObserver(([entry]) => {
  dock.classList.toggle('show', !entry.isIntersecting);
}, { threshold: 0.15 }).observe(hero);

// Highlight the dock link for the section in view
const links = [...dock.querySelectorAll('a[href^="#"]')];
const sections = links.map((a) => document.querySelector(a.getAttribute('href')));
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (!e.isIntersecting) return;
    links.forEach((a) => a.classList.toggle('active', a.getAttribute('href') === `#${e.target.id}`));
  });
}, { rootMargin: '-45% 0px -50% 0px' });
sections.forEach((s) => s && sectionObserver.observe(s));

// Reveal-on-scroll for cards, headings and the career trace
const revealTargets = document.querySelectorAll('.section-head, .case, .proj, .about-text, .trace, .polaroids, .insta-row');
revealTargets.forEach((el) => el.classList.add('reveal'));
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });
revealTargets.forEach((el) => revealObserver.observe(el));
