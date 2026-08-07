// アリラン食堂 Premium — 共通スクリプト
(function(){
  // nav solid on scroll
  var nav=document.querySelector('.nav');
  if(nav){window.addEventListener('scroll',function(){nav.classList.toggle('solid',window.scrollY>60)});}
  // burger toggle
  var burger=document.querySelector('.burger'),links=document.querySelector('.navlinks');
  if(burger&&links){
    burger.addEventListener('click',function(){links.classList.toggle('open')});
    links.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){links.classList.remove('open')})});
  }
  // reveal on scroll
  var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting)x.target.classList.add('visible')})},{threshold:.14});
  document.querySelectorAll('.reveal').forEach(function(el){io.observe(el)});
})();
