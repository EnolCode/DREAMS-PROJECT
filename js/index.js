const button = document.querySelector(".dark-mode");
const contain = document.querySelector(".contain");
const cardName = document.querySelectorAll(".card__name");
const word = document.querySelectorAll(".card__word");
const description = document.querySelectorAll(".card__description");
const img = document.querySelectorAll(".card__img");
const icon = document.querySelectorAll(".icon-media");
const logo = document.querySelector(".header__logo");
const stack = document.querySelector(".stack__img");

button.addEventListener("click", (e) => {
  contain.classList.toggle("black");
  cardName.forEach((el) => el.classList.toggle("white"));
  cardName.forEach((el) => el.classList.toggle("border-bottom-white"));
  description.forEach((el) => el.classList.toggle("white"));
  word.forEach((el) => el.classList.toggle("white"));
  img.forEach((el) => el.classList.toggle("border-white"));
  icon.forEach((el) => el.classList.toggle("white"));
  stack.classList.toggle("filter-invert");
  logo.classList.toggle("filter-invert");
});
