'use strict';

let SEATS = [
	['1 feet 11 inches', '4 feet 8 inches', '2 feet 10 inches', '3 feet 5 inches', '2 inches', '3 inches', '11 inches'],
	['5 feet 10 inches', '9 inches', '3 feet 5 inches', '3 inches', '9 inches', '1 feet 0 inches', '0 inches'],
	['0 feet 5 inches', '5 feet 9 inches', '6 feet 1 inches', '1 inches', '1 inches', '5 feet 3 inches', '3 feet 5 inches'],
	['1 inches', '0 feet 11 inches', '2 feet 5 inches', '5 feet 6 inches', '6 feet 6 inches', '6 inches', '5 feet 11 inches'],
	['10 inches', '11 inches', '3 inches', '5 feet 2 inches', '9 inches', '4 inches', '1 feet 10 inches'],
	['2 feet 10 inches', '11 inches', '7 inches', '2 feet 9 inches', '0 inches', '9 inches', '0 feet 2 inches'],
	['3 inches', '1 inches', '5 feet 5 inches', '6 inches', '2 inches', '5 feet 7 inches', '8 inches']
]
const findBlocked = (SEATS, row, column) => {

	let _findHeightInInches = (SEAT) => {
		let findFeet = (SEAT).split('feet');

		if (findFeet.length === 1) {
			return parseInt(findFeet[0].split('inches'));
		} 
		else {
		let findInches = findFeet[1].split('inches');
		return parseInt(findFeet[0] * 12) + parseInt(findFeet[1].split('inches'));
		}
	};

	
	let blocked = 0;
	let robsSeat = _findHeightInInches(SEATS[row][column]);

	for (let i = row + 1; i < SEATS.length; i++) {
		let amIBlocked = _findHeightInInches(SEATS[i][column]);

		if (robsSeat > amIBlocked) {
			blocked++
		}

	}
	
	return console.log ('# of people blocked by Rob', blocked);

};

