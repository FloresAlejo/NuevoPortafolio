const hamburgerIcon = document.querySelector(".nav__hamburguer");
const navOverlay = document.querySelector(".nav__overlay");
const btnSobreMi = document.querySelector(".btnSobreMi");
const btnEsYex = document.querySelector(".btnesyex");
const btnSkills = document.querySelector(".btnskills");
const btnPro = document.querySelector(".btnpro");
const btnCon = document.querySelector(".btncon");

hamburgerIcon.addEventListener("click", () => {
  hamburgerIcon.classList.toggle("nav__hamburguer--open");
  navOverlay.classList.toggle("nav__overlay--show");
});

btnSobreMi.addEventListener("click", () => {
  hamburgerIcon.classList.toggle("nav__hamburguer--open");
  navOverlay.classList.toggle("nav__overlay--show");
});

btnEsYex.addEventListener("click", () => {
  hamburgerIcon.classList.toggle("nav__hamburguer--open");
  navOverlay.classList.toggle("nav__overlay--show");
});

btnSkills.addEventListener("click", () => {
  hamburgerIcon.classList.toggle("nav__hamburguer--open");
  navOverlay.classList.toggle("nav__overlay--show");
});

btnPro.addEventListener("click", () => {
  hamburgerIcon.classList.toggle("nav__hamburguer--open");
  navOverlay.classList.toggle("nav__overlay--show");
});

btnCon.addEventListener("click", () => {
  hamburgerIcon.classList.toggle("nav__hamburguer--open");
  navOverlay.classList.toggle("nav__overlay--show");
});
