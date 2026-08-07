// アリラン食堂 Premium パターン5 SHOWCASE

// ハンバーガーメニュー開閉
document.addEventListener('DOMContentLoaded', function () {
  var burger = document.querySelector('.hamburger');
  var navLeft = document.querySelector('.nav-left');
  if (burger && navLeft) {
    burger.addEventListener('click', function () {
      var open = navLeft.classList.toggle('open');
      burger.classList.toggle('active', open);
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    // ナビリンククリックで閉じる
    navLeft.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        navLeft.classList.remove('open');
        burger.classList.remove('active');
        burger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // reveal（IntersectionObserver）
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.14, rootMargin: '0px 0px -8% 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('visible'); });
  }
});
