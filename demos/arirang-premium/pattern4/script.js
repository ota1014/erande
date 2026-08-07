(function(){
  'use strict';

  // ---- hamburger ----
  var toggle = document.querySelector('.nav__toggle');
  var links = document.querySelector('.nav__links');
  if(toggle && links){
    toggle.addEventListener('click', function(){
      links.classList.toggle('open');
    });
    links.addEventListener('click', function(e){
      if(e.target.tagName === 'A') links.classList.remove('open');
    });
  }

  // ---- reveal (horizontal slide-in) ----
  var revealEls = document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(en){
        if(en.isIntersecting){
          en.target.classList.add('visible');
          io.unobserve(en.target);
        }
      });
    }, {threshold:0.14, rootMargin:'0px 0px -8% 0px'});
    revealEls.forEach(function(el){ io.observe(el); });
  } else {
    revealEls.forEach(function(el){ el.classList.add('visible'); });
  }

  // ---- visual slideshow ----
  var slides = document.querySelectorAll('.visual__slide');
  if(slides.length > 1){
    var reduce = window.matchMedia('(prefers-reduced-motion:reduce)').matches;
    if(!reduce){
      var i = 0;
      setInterval(function(){
        slides[i].classList.remove('on');
        i = (i + 1) % slides.length;
        slides[i].classList.add('on');
      }, 4500);
    }
  }
})();
