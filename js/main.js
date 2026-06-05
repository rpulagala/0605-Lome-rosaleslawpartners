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
