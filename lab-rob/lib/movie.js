'use strict';

const getInches = height => {
  if(!height || height === 'empty')
    return 0;

  let match = height.match(/^ *\d+ *inches *$/) || height.match(/^ *\d+ *feet *\d+ *inches *$/);

  if(!match)
    throw new TypeError('Bad seat data');

  let inches = null;

  height = height.split('feet');

  if(height.length === 1) {
    inches = parseFloat(height[0]);
  } else {
    inches = parseFloat(height[0]) * 12;
    inches += parseFloat(height[1]);
  }

  return inches;
};

module.exports = (seats, row, col) => {
  // ---------------------------------------------------------------
  // Error checking

  if(seats.length === 0)
    throw new TypeError('Theatre has no seats');

  if(row > seats.length - 1 || col > seats[0].length - 1)
    throw new TypeError('row / seat not in theatre');

  let seatsInRow = seats[0].length;

  seats.forEach(row => {
    if(row.length === 0)
      throw new TypeError('No seats in row.');
    if(row.length !== seatsInRow)
      throw new TypeError('Inconsistent number of seats in rows');
  });

  // ---------------------------------------------------------------
  // Actual solution

  if(row === seats.length - 1)
    return 0;
  
  let blockerHeight = getInches(seats[row][col]);
  let count = 0;

  for(let i = row + 1; i < seats.length; i++) {
    let newHeight = getInches(seats[i][col]);
    if(newHeight < blockerHeight)
      count++;
  }

  return count;
};