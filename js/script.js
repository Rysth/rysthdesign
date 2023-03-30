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

/* Portfolio Section - Cards */

const portfolio__cards = document.querySelector(
	"#portfolio__cards"
);

/* Portfolio Section - Viewer Popup Image */

const viewer = document.querySelector(".viewer");
const viewer__icon =
	document.querySelector(".viewer__icon");

//Setting up image element
const viewer__image = document.createElement("img");
viewer__image.className = "viewer__image";
viewer__image.setAttribute("alt", "Viewer image popup");

/* Loads every Customer Card */

window.addEventListener("load", () => {
	for (let index = 1; index <= 8; index++) {
		const customer__card = document.createElement("div");
		customer__card.classList.add("card", "padding-0");
		const card__content = document.createElement("div");
		card__content.classList.add("card__content", "padding-0");
		const picture = document.createElement("picture");
		const source = document.createElement("source");
		source.srcset = "img/steam/PNG/steam_0" + index + ".png";
		source.type = "image/png";
		const card__image = document.createElement("img");
		card__image.classList.add("card__image");
		card__image.setAttribute(
			"src",
			"img/steam/WEBP/steam_0" + index + ".webp"
		);
		card__image.setAttribute("loading", "lazy");
		card__image.setAttribute(
			"alt",
			"Customer evidence number " + index
		);
		card__image.addEventListener("click", () => {
			viewer__image.src = card__image.getAttribute("src");
			viewer.appendChild(viewer__image);
			toggleViewer(viewer);
		});
		picture.appendChild(card__image);
		picture.appendChild(source);
		card__content.appendChild(picture);
		customer__card.appendChild(card__content);
		portfolio__cards.appendChild(customer__card);
	}
});

viewer__icon.addEventListener("click", () => {
	viewer.removeChild(viewer__image);
	toggleViewer(viewer);
});

function toggleViewer(element) {
	element.classList.toggle("viewer--active");
}

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
