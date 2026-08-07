/* アリラン食堂 Pattern3 - MAGAZINE : ハンバーガー + reveal(stagger) */
(function () {
  "use strict";

  /* ---- ハンバーガーメニュー開閉 ---- */
  var burger = document.querySelector(".hamburger");
  var links = document.querySelector(".nav-links");
  if (burger && links) {
    burger.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      burger.classList.toggle("open", open);
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    });
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        links.classList.remove("open");
        burger.classList.remove("open");
        burger.setAttribute("aria-expanded", "false");
      });
    });

    /* #4 ESCキー / 外側クリックで閉じる */
    function closeMenu() {
      links.classList.remove("open");
      burger.classList.remove("open");
      burger.setAttribute("aria-expanded", "false");
    }
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && links.classList.contains("open")) { closeMenu(); burger.focus(); }
    });
    document.addEventListener("click", function (e) {
      if (links.classList.contains("open") && !links.contains(e.target) && !burger.contains(e.target)) { closeMenu(); }
    });
  }

  /* ---- reveal (IntersectionObserver / スタガー対応) ---- */
  var targets = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && targets.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    targets.forEach(function (t) {
      io.observe(t);
    });
  } else {
    targets.forEach(function (t) {
      t.classList.add("visible");
    });
  }
})();
