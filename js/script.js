/* Navbar Show/Hide - Scripts */

const navbar__button = document.querySelector(
	"#navbar__toggle"
);
const navbar__list =
	document.querySelector(".navbar__list");

document.addEventListener("click", (e) => {
	if (e.target !== navbar__button) {
		navbar__list.classList.remove("show");
	}
});

navbar__button.addEventListener("click", () => {
	navbar__list.classList.toggle("show");
});

/* Home Section - Back to Top of Document*/

const home__button =
	document.querySelector("#home__button");

home__button.addEventListener("click", () => {
	window.scroll(0, 0);
});

/* Portfolio Section - Popup Image */

const viewer = document.querySelector(".viewer");
const viewer__icon =
	document.querySelector(".viewer__icon");
const viewer__image = document.querySelector(
	".viewer__image"
);
const card__image =
	document.querySelectorAll(".card__image");

card__image.forEach((image) => {
	image.addEventListener("click", () => {
		viewer__image.src = image.getAttribute("src");
		viewer.classList.add("viewer--active");
	});
});

viewer__icon.addEventListener("click", () => {
	viewer__image.src = "";
	viewer.classList.remove("viewer--active");
});

/* Scroll Reveal Animations */

const verticalScroll = ScrollReveal({
	duration: 1500,
	reset: false,
});

verticalScroll.reveal(".section", {
	delay: 300,
});

verticalScroll.reveal(".card, .form", {
	delay: 400,
});
