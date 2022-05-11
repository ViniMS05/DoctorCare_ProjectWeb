function onScroll() {
  var navigation = document.querySelector("#navigation");

  if (scrollY > 0) {
    navigation.classList.add("scroll");
  } else {
    navigation.classList.remove("scroll");
  }
}

function openMenu() {
  document.body.classList.add("menu-expanded");
}

function closeMenu() {
  document.body.classList.remove("menu-expanded");
}

ScrollReveal({
  origin: "top",
  distance: "50px",
  durstion: 700,
}).reveal(
  "#home, #home img, #home .datas, #services, #services header, #services .card, #about header, #about .content"
);
