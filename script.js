window.addEventListener('scroll', onScroll)

onScroll()

function onScroll() {
  showNavOnScroll()
  showBackToTopOnScroll()
};

function showNavOnScroll() {
  var navigation = document.querySelector("#navigation");

  if (scrollY > 0) {
    navigation.classList.add("scroll");
  } else {
    navigation.classList.remove("scroll");
  }
};

function showBackToTopOnScroll () {
  var backToTopButton = document.querySelector("#backToTopButton");

  if (scrollY > 800) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }

  if (scrollY > 4420) {
    backToTopButton.classList.add("change");
  } else {
    backToTopButton.classList.remove("change");
  }
};

function openMenu() {
  document.body.classList.add("menu-expanded");
};

function closeMenu() {
  document.body.classList.remove("menu-expanded");
};

ScrollReveal({
  origin: "top",
  distance: "50px",
  durstion: 700,
}).reveal(
  "#home, #home img, #home .datas, #services, #services header, #services .card, #about header, #about .content"
);
