{
  const welcome = () => {
    console.log("Witam na mojej pierwszej stronie!");
  };

  const toggleBackground = (themeButton) => {
    const container = document.querySelector(".js-container");
    const tableCaption = document.querySelector(".js-table__caption");
    const sectionHeaders = document.querySelectorAll(".js-section__header");
    const themeButtonText = document.querySelector(".js-themeButton__text");

    container.classList.toggle("container--dark");
    themeButton.classList.toggle("themeButton--dark");
    tableCaption.classList.toggle("table__caption--dark");
    sectionHeaders.forEach((header) =>
      header.classList.toggle("section__header--dark")
    );

    themeButtonText.innerText = container.classList.contains("container--dark")
      ? (themeButtonText.innerText = "Tryb dzienny")
      : (themeButtonText.innerText = "Tryb nocny");
  };

  const init = () => {
    const themeButton = document.querySelector(".js-themeButton");
    themeButton.addEventListener("click", (e) => {
      toggleBackground(e.target);
    });

    welcome();
  };

  init();
}
