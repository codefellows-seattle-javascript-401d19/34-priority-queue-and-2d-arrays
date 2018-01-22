'use strict';

class Theater {
	_toIntegerInches(string) {
		let heightArray = string.split(' ');
		let height;
		if (heightArray.length === 4) {
			height = parseInt(heightArray[0]) * 12 + parseInt(heightArray[2]);
		} else {
			height = parseInt(heightArray[0]);
		}
		return height;
	}
	tallCheck(seats, row, col) {
		let blocked = 0;
		const blockerHeight = _toIntegerInches(seats[row][col]);

		for (let i = row + 1; i < seats.length; i++) {
			if (blockerHeight > _toIntegerInches(seats[i][col])) blocked++;
		}
		return blocked;
	}
}
module.exports = Theater;
