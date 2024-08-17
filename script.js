const getSquareAt = (x, y) => {
	let row = "";
	let col = "";

	switch(x) {
		case 0:
			col = "left";
			break;
		case 1:
			col = "mid";
			break;
		case 2:
			col = "right";
			break;
	}

	switch(y) {
		case 0:
			row = "top";
			break;
		case 1:
			row = "mid";
			break;
		case 2:
			row = "bot";
			break;
	}

	let position = row + "-" + col;

	const square = document.querySelector(`.${position}`);

	return square;
}

function chooseSquare(square, crossTurn) {
	// square has already been set
	if (!square.classList.contains("none")) {
		return;
	}

	const imgClass = (crossTurn) ? "cross" : "circle";
	square.classList.remove("none");
	square.classList.add(imgClass);
}

() => {
	squares =  (() => {
		let squares = [];
		for (let x = 0; x < 3; x++) {
			for (let y = 0; y < 3; y++){

				const square = getSquareAt(x, y);
				square.addEventListener("click", () => {
					chooseSquare(square, crossTurn);
					toggleTurnFunc();
				});
				squares.push(square);

			}
		}
		return squares;
	})();
};




const gameController = (() => {
	const board = (() => {
		squares =  (() => {
			let squares = [];
			for (let x = 0; x < 3; x++) {
				for (let y = 0; y < 3; y++){

					const square = getSquareAt(x, y);
					square.addEventListener("click", () => {
						chooseSquare(square, crossTurn);
						if (checkForWinner()) {
							console.log("You Win!");
						}
						toggleTurn();
					});
					squares.push(square);
				}
			}
			
			const checkForWinner = () => {
				let currPlayer = 
					(getSquareAt(0, 0).classList.contains("cross")) ? "cross" : "circle";

				for (let x = 0; x < 3; x++) {
					for (let y = 0; y < 3; y++) {
						let square = getSquareAt(x, y);	
						if (!square.classList.contains(currPlayer)) {
							break;
						}
					}
					return true;

				}
				return false;
			}

		})();
	})();

	let crossTurn = true;

	const toggleTurn = () => {
		crossTurn = !crossTurn;
	};

})();
