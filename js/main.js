// Mobile nav toggle
const hamburger = document.querySelector('.hamburger');
const navList   = document.querySelector('nav ul');
if (hamburger && navList) {
  hamburger.addEventListener('click', () => {
    navList.classList.toggle('open');
  });
}

// Mark active nav link
const links = document.querySelectorAll('nav ul a');
links.forEach(link => {
  if (link.href === window.location.href) link.classList.add('active');
});

// FAQ accordion
document.querySelectorAll('.faq-question').forEach(q => {
  q.addEventListener('click', () => {
    const item = q.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

// Audience popup — fires once per session after user scrolls past hero (homepage only)
(function () {
  const popup   = document.getElementById('audiencePopup');
  const overlay = document.getElementById('audienceOverlay');
  if (!popup || !overlay) return;
  if (sessionStorage.getItem('audienceSeen')) return;

  const closeBtn = document.getElementById('popupClose');
  const skipBtn  = document.getElementById('popupSkip');

  function showPopup() {
    popup.classList.add('visible');
    overlay.classList.add('visible');
    document.body.style.overflow = 'hidden';
  }
  function hidePopup() {
    popup.classList.remove('visible');
    overlay.classList.remove('visible');
    document.body.style.overflow = '';
    sessionStorage.setItem('audienceSeen', '1');
  }

  let fired = false;
  window.addEventListener('scroll', function onScroll() {
    if (fired) return;
    if (window.scrollY > window.innerHeight * 0.65) {
      fired = true;
      showPopup();
      window.removeEventListener('scroll', onScroll);
    }
  }, { passive: true });

  if (closeBtn) closeBtn.addEventListener('click', hidePopup);
  if (skipBtn)  skipBtn.addEventListener('click', hidePopup);
  overlay.addEventListener('click', hidePopup);

  document.querySelectorAll('.popup-choice').forEach(function (c) {
    c.addEventListener('click', function () {
      sessionStorage.setItem('audienceSeen', '1');
      document.body.style.overflow = '';
    });
  });
}());

// Contact form submission (placeholder — wire to backend or email service)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    const btn = contactForm.querySelector('button[type="submit"]');
    btn.textContent = 'Message Sent!';
    btn.disabled = true;
    btn.style.background = '#2e7d32';
    // TODO: Replace with real form submission (EmailJS, Formspree, backend API, etc.)
  });
}
