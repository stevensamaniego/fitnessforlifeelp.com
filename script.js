// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('nav');

navToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('active');
  navToggle.classList.toggle('active');
  navToggle.setAttribute('aria-expanded', isOpen);
});

// Close mobile nav on link click
nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
    navToggle.classList.remove('active');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Header background on scroll
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.style.background = 'rgba(10, 10, 10, 0.98)';
  } else {
    header.style.background = 'rgba(10, 10, 10, 0.85)';
  }
}, { passive: true });

// Animate elements on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Apply fade-in to cards
document.querySelectorAll('.feature-card, .amenity-card, .pricing-card').forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`;
  observer.observe(el);
});
