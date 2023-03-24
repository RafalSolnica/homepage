{
	const welcome = () => {
		console.log("Witam na mojej pierwszej stronie!");
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

	const toggleButtonText = (container) => {
		const themeButtonText = document.querySelector(".js-themeButton__text");
		themeButtonText.innerText = container.classList.contains("container--dark")
			? "Tryb dzienny"
			: "Tryb nocny";
	};

	const handleClickToggleTheme = (themeButton) => {
		const container = document.querySelector(".js-container");
		toggleBackground(container, themeButton);
		toggleButtonText(container);
	};

	const init = () => {
		const themeButton = document.querySelector(".js-themeButton");
		themeButton.addEventListener("click", () => {
			handleClickToggleTheme(themeButton);
		});

		welcome();
	};

	init();
}
