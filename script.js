// ===== Initialize AOS animations =====
AOS.init({
  duration: 800,
  once: true
});

// ===== Mobile menu toggle =====
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// ===== Dynamic year in footer =====
document.getElementById('year').textContent = new Date().getFullYear();

// ===== Smooth scroll for navigation =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// ===== Back to Top button =====
const backToTopBtn = document.createElement('button');
backToTopBtn.innerHTML = '⬆';
backToTopBtn.id = 'backToTop';
backToTopBtn.style.cssText = `
  position: fixed; bottom: 20px; right: 20px;
  padding: 10px 12px; font-size: 1.2rem;
  background: #00bcd4; color: white; border: none;
  border-radius: 50%; cursor: pointer; display: none;
  box-shadow: 0 4px 8px rgba(0,0,0,0.3);
  z-index: 999;
`;
document.body.appendChild(backToTopBtn);
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
});
backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== Typing effect for role =====
const typedText = document.getElementById('typed');
const text = "Aspiring Full Stack Developer";
let index = 0;
function typeEffect() {
  if (index < text.length) {
    typedText.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 80);
  }
}
typedText.textContent = "";
typeEffect();

// ===== Scroll progress bar =====
const progressBar = document.createElement('div');
progressBar.id = 'progressBar';
progressBar.style.cssText = `
  position: fixed; top: 0; left: 0;
  height: 4px; background: #00bcd4;
  width: 0%; z-index: 1000;
`;
document.body.appendChild(progressBar);
window.addEventListener('scroll', () => {
  let scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  progressBar.style.width = scrollPercent + "%";
});

// ===== Project card hover animation =====
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'scale(1.02)';
    card.style.transition = 'transform 0.3s ease';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'scale(1)';
  });
});
