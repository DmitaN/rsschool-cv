hljs.highlightAll();

let burger = document.querySelector(".header__burger");
let menu = document.querySelector(".nav__list");
let menuLinks = menu.querySelectorAll(".nav__link");

burger.addEventListener('click',
  function () {
    burger.classList.toggle("header__burger--active");
    menu.classList.toggle("nav__list--active");
    document.body.classList.toggle("stop-scroll")
  }
);

menuLinks.forEach(function (el) {
  el.addEventListener('click',
    function () {
      burger.classList.remove("header__burger--active");
      menu.classList.remove("nav__list--active");
      document.body.classList.remove("stop-scroll");
    })
});
