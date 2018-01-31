'use strict';

// assumption - theatre always full

class Theatre{
  constructor(seats, row, col){
    let currentHeight = heightChecker(seats, row, col);
    let counter = 0;

    for(let i = row + 1; i < seats.length; i++){
      if (heightChecker(seats, i, col) < currentHeight){
        counter++;
      }
    }

    return counter;
    
    
    _heightChecker(seats, row, col){
      let string = seats[row][col];
      let words = string.split(" ");

      let feet = 0;
      if (string.includes("feet")){
        feet = parseInt(words[0], 10)
      }

      let index = words.length - 2;
      let inches = parseInt(words[index], 10)

      return inches + 12 * feet

      }
  }
}
