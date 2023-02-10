const themeButton = document.querySelector(".js-themeButton");

themeButton.addEventListener("click", () => {
  const themeButtonText = document.querySelector(".js-themeButton__text");

  document.querySelector(".js-container").classList.toggle("container--dark");

  themeButton.classList.toggle("themeButton--dark");

  themeButton.classList.contains("themeButton--dark")
    ? (themeButtonText.innerText = "Tryb dzienny")
    : (themeButtonText.innerText = "Tryb nocny");

  document
    .querySelectorAll(".js-section__header")
    .forEach((header) => header.classList.toggle("section__header--dark"));

  document
    .querySelector(".js-table__caption")
    .classList.toggle("table__caption--dark");
});
