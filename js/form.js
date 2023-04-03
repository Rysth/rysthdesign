//Form Variables
let form = document.querySelector("#form");
let game = document.querySelector("#game");
let platform = document.querySelector("#platform");
let seller = document.querySelector("#seller");
let price = document.querySelector("#price");
let type = document.querySelector("#type");

//Game list Variable
let gameList;

function validateForm() {
	const arrayValidator = [
		game,
		platform,
		seller,
		price,
		type,
	];

	//Check if the price is a number.
	if (parseFloat(price.value) < 0) {
		alert(
			"Please, insert a " +
				price.id.toUpperCase() +
				" more than 0"
		);
		return false;
	}

	//Check if a value is empty
	arrayValidator.forEach((element) => {
		if (element.value === "") {
			alert(
				"Please, fill the " +
					element.id.toUpperCase() +
					" data."
			);
			return false;
		}
	});

	return true;
}

//Function to get all the Game List from LocalStorage
function showData() {
	const localGameList = localStorage.getItem("gameList");
	const gameTable = document.querySelector(
		"#gameTable tbody"
	);

	if (localGameList == null) {
		gameList = [];
	} else {
		gameList = JSON.parse(localGameList);
	}

	let rowTable = "";

	gameList.forEach((element, index) => {
		let PRICE = parseFloat(element.price);
		let IVA = PRICE * 0.12;
		let SUBTOTAL = PRICE + IVA;
		let TOTAL = 0;

		if (element.type === "GAME") {
			TOTAL = SUBTOTAL + 2.0;
		} else {
			TOTAL = SUBTOTAL + 1.0;
		}
		let PROFIT = 0;
		if (element.seller === "CDKEYS") {
			PROFIT = Math.abs(TOTAL - SUBTOTAL) + IVA;
		} else {
			PROFIT = Math.abs(TOTAL - SUBTOTAL);
		}

		IVA = Math.round((IVA + Number.EPSILON) * 100) / 100;
		SUBTOTAL =
			Math.round((SUBTOTAL + Number.EPSILON) * 100) / 100;
		TOTAL = Math.round((TOTAL + Number.EPSILON) * 100) / 100;
		PROFIT =
			Math.round((PROFIT + Number.EPSILON) * 100) / 100;

		rowTable +=
			"<tr class='table__content table__content--game'>";
		rowTable +=
			"<td class='content__data'>" +
			element.game.toUpperCase() +
			"</td>";
		rowTable +=
			"<td class='content__data'>" +
			element.platform +
			"</td>";
		rowTable +=
			"<td class='content__data'>" + element.seller + "</td>";
		rowTable +=
			"<td class='content__data'>$" + PRICE + "</td>";
		rowTable += "<td class='content__data'>$" + IVA + "</td>";
		rowTable +=
			"<td class='content__data'>$" + SUBTOTAL + "</td>";
		rowTable +=
			"<td class='content__data'>$" + TOTAL + "</td>";
		rowTable +=
			"<td class='content__data'>$" + PROFIT + "</td>";
		rowTable +=
			"<td class='content__data'><i class='fas fa-remove button button-action' onclick='deleteData(" +
			index +
			")'></i></td>";
		rowTable += "</tr>";
	});

	gameTable.innerHTML = rowTable;
}

//Charge all the game list.
document.onload = showData();

//Function to add a new Game
function addData() {
	if (validateForm() == true) {
		let IVA = price.value * 0.12;
		let SUBTOTAL = price.value + IVA;
		let TOTAL = 0;
		if (type.value === "GAME") {
			TOTAL = SUBTOTAL + 2;
		} else {
			TOTAL = SUBTOTAL + 1;
		}
		let PROFIT = 0;
		if (seller.value === "CDKEYS") {
			PROFIT = Math.abs(TOTAL - SUBTOTAL) + IVA;
		} else {
			PROFIT = Math.abs(TOTAL - SUBTOTAL);
		}
		IVA = Math.round((IVA + Number.EPSILON) * 100) / 100;
		SUBTOTAL =
			Math.round((SUBTOTAL + Number.EPSILON) * 100) / 100;
		TOTAL = Math.round((TOTAL + Number.EPSILON) * 100) / 100;
		PROFIT =
			Math.round((PROFIT + Number.EPSILON) * 100) / 100;

		gameList.push({
			game: game.value,
			platform: platform.value,
			seller: seller.value,
			price: price.value,
			iva: IVA,
			subtotal: SUBTOTAL,
			total: TOTAL,
			profit: PROFIT,
			type: type.value,
		});

		localStorage.setItem(
			"gameList",
			JSON.stringify(gameList)
		);

		showData();

		//Reset the form
		form.reset();
	}
}

//Function to delete a Game
function deleteData(index) {
	gameList.splice(index, 1);
	localStorage.setItem("gameList", JSON.stringify(gameList));
	showData();
}
