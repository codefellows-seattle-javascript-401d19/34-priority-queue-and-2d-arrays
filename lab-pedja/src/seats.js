'use strict';

// _getHeight(str) function input can be "72 inches" or "5 feet 2 inches"
_getHeight = str => {
  let arrayStr = str.split(' ');
  let totalHeight;
  if(arrayStr.includes("feet")){
    totalHeight = parseInt(arrayStr[0] * 12) + parseInt(arrayStr[2]);
  } else{
    totalHeight = parseInt(arrayStr[0]);
  }

  return totalHeight;
}

let SEATS = [
  [ '1 feet 11 inches', '4 feet 8 inches', '2 feet 10 inches', '3 feet 5 inches', '2 inches', '3 inches', '11 inches' ],
  [ '5 feet 10 inches', '9 inches', '3 feet 5 inches', '3 inches', '9 inches', '1 feet 0 inches', '0 inches' ],
  [ '0 feet 5 inches', '5 feet 9 inches', '6 feet 1 inches', '1 inches', '1 inches', '5 feet 3 inches', '3 feet 5 inches' ],
  [ '1 inches', '0 feet 11 inches', '2 feet 5 inches', '5 feet 6 inches', '6 feet 6 inches', '6 inches', '5 feet 11 inches' ],
  [ '10 inches', '11 inches', '3 inches', '5 feet 2 inches', '9 inches', '4 inches', '1 feet 10 inches' ],
  [ '2 feet 10 inches', '11 inches', '7 inches', '2 feet 9 inches', '0 inches', '9 inches', '0 feet 2 inches' ],
  [ '3 inches', '1 inches', '5 feet 5 inches', '6 inches', '2 inches', '5 feet 7 inches', '8 inches' ]
]

seatsBlocked = (row, col, seats) => {
  let counter = 0;
  // find seat location
  let yourHeight = _getHeight(seats[row][col]);
  // loop over to see how many people are behind
  for(let i = row + 1; i <= seats[row][col]; i++){
    // compare the heights, add counter if smaller
    if(yourHeight > _getHeight(seats[i][col]))
      counter ++;
  }
  
  return counter;
}


