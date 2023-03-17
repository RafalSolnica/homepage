{
  const welcome = () => {
    console.log("Witam na mojej pierwszej stronie!");
  };

  const handleClicks = (themeButton) => {
    const container = document.querySelector(".js-container");
    toggleBackground(container, themeButton);
    toggleButtontext(container);
  };

  const toggleBackground = (container, themeButton) => {
    const tableCaption = document.querySelector(".js-table__caption");
    const sectionHeaders = document.querySelectorAll(".js-section__header");

    container.classList.toggle("container--dark");
    themeButton.classList.toggle("themeButton--dark");
    tableCaption.classList.toggle("table__caption--dark");
    sectionHeaders.forEach((header) =>
      header.classList.toggle("section__header--dark")
    );
  };

  const toggleButtontext = (container) => {
    const themeButtonText = document.querySelector(".js-themeButton__text");
    themeButtonText.innerText = container.classList.contains("container--dark")
      ? (themeButtonText.innerText = "Tryb dzienny")
      : (themeButtonText.innerText = "Tryb nocny");
  };

  const init = () => {
    const themeButton = document.querySelector(".js-themeButton");
    themeButton.addEventListener("click", () => {
      handleClicks(themeButton);
    });

    welcome();
  };

  init();
}
