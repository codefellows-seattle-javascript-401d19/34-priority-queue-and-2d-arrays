'use strict';


const findBlocking = (seats, row, column) => {
  let seatsInInches = convertToInches(seats);
  console.log(seatsInInches);
  let numRows = seats.length;
  let seatToCheckAgainst = seatsInInches[row][column];

  let blocked = 0;

  for(let i = row + 1; i < numRows; i++) {
    let currentSeat = seatsInInches[i][column];
    if(currentSeat < seatToCheckAgainst) {
      blocked++;
    }
  }
  return blocked;
};

let convertToInches = (seats) => {
  return seats.map((row) => {
    return row.map((seat) => {
      let seatData = seat.split(' ');
      let inches = 0;
      if(seatData.length === 4) {
        inches = seatData[0] * 12 + parseInt(seatData[2]);
      }
      else if(seatData.length === 2) {
        if(seatData[1] === 'feet'){
          inches = seatData[0] * 12;
        } else {
          inches = parseInt(seatData[0]);
        }
      }
      return inches;
    });
  });
};

module.exports = findBlocking;
