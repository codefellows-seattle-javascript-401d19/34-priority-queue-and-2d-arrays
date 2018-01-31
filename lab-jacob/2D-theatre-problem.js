'use strict';

let seats = [['1 feet 11 inches', '4 feet 8 inches'],['2 feet 10 inches', '3 feet 5 inches'], ['2 inches', '3 inches', '11 inches']];

const conversionToInteger = (string) => {
  let heightArr = string.split(' ');
  let height;
  if (heightArr.length === 4){
    height = parseInt(heightArr[0] * 12 + parseInt(heightArr[2]));
  }else{
    height = parseInt(heightArr[0]);
  }
  return height;
};
console.log(conversionToInteger(seats[0][0]));

const personsBlocked = (seats, row, col) => {
  let blocked = [];
  const blockingPersonHeight = conversionToInteger(seats[row][col]);

  for (let i = row + 1; i < seats.length; i++) {
    if (blockerHeight > conversionToInteger(seats[i][col])) {
      blocked.push(conversionToInteger(seats[i][col])
    }
  }
 
  return blocked;
};
console.log(blocked);
