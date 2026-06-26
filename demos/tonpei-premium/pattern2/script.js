// 千楽 本店 Premium — 共通スクリプト
const nav = document.getElementById('nav');
if (nav) addEventListener('scroll', () => nav.classList.toggle('scrolled', scrollY > 50));

const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');
if (toggle && links) toggle.addEventListener('click', () => links.classList.toggle('open'));

const io = new IntersectionObserver(e => {
  e.forEach(x => { if (x.isIntersecting) x.target.classList.add('visible'); });
}, { threshold: .15 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));
