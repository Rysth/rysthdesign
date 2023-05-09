/* Navbar Show/Hide - Scripts */

const headerToggle = document.querySelector("#header__toggle");
const headerList = document.querySelector(".header__list");

document.addEventListener("click", (e) => {
	if (e.target !== headerToggle) {
		headerList.classList.remove("show");
	}
});

headerToggle.addEventListener("click", () => {
	headerList.classList.toggle("show");
});

/* Portfolio Section - Cards */

const customerCards = document.querySelector("#customer__cards");

/* Portfolio Section - Viewer Popup Image */

const viewer = document.querySelector(".viewer");
const viewer__icon = document.querySelector(".viewer__icon");

//Setting up image element
const viewerImage = document.createElement("img");
viewerImage.className = "viewer__image";
viewerImage.setAttribute("alt", "Viewer image popup");

/* Loads every Customer Card */

window.addEventListener("load", () => {
	for (let index = 1; index <= 12; index++) {
		const newCard = document.createElement("div");
		newCard.classList.add("card", "padding-0");

		const newContent = document.createElement("div");
		newContent.classList.add("card__content", "padding-0");

		const newPicture = document.createElement("picture");
		const newSource = document.createElement("source");
		newSource.srcset = `img/steam/PNG/steam_0"${index}".png`;
		newSource.type = "image/png";

		const newImage = document.createElement("img");
		newImage.setAttribute(
			"src",
			"img/steam/WEBP/steam_" + index + ".webp"
		);
		newImage.setAttribute("loading", "lazy");
		newImage.setAttribute("alt", "Customer evidence number " + index);
		newImage.addEventListener("click", () => {
			viewerImage.src = newImage.getAttribute("src");
			viewer.appendChild(viewerImage);
			toggleViewer(viewer);
		});

		newPicture.appendChild(newImage);
		newPicture.appendChild(newSource);

		newContent.appendChild(newPicture);
		newCard.appendChild(newContent);

		customerCards.appendChild(newCard);
	}
});

window.addEventListener("keyup", (event) => {
	if (
		event.key === "Escape" &&
		viewer.classList.contains("viewer--active")
	) {
		toggleViewer(viewer);
	}
});

viewer__icon.addEventListener("click", () => {
	viewer.removeChild(viewerImage);
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
	delay: 300,
});
