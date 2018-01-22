'use strict';

class MovieTheater {

  _convertFeetToInches(height) {
    const individualWords = height.split(' ');

    if(individualWords.includes('feet')) {
      const feetToInches = parseInt(individualWords[0]) * 12;
      const conversionTotal = feetToInches + parseInt(individualWords[2]);
      return conversionTotal;
    } else {
      return parseInt(individualWords[0]);
    }
  }

  numberOfBlockedPeople(theater, row, column) {
    if(typeof row !== 'number' || typeof column !== 'number') {
      throw new TypeError('row and column must be numbers');
    }

    if(typeof theater !== 'object') {
      throw new TypeError('theater must be an array');
    }

    if(row < 0 || column < 0) {
      throw new Error('row and column must be positive numbers');
    }

    let numberBlocked = 0;
    const heights = theater.map(height => {
      return this._convertFeetToInches(height[column]);
    });

    for(let i = row; i < heights.length; i++) {
      if(heights[i] < heights[row]) {
        numberBlocked++;
      }
    }
    return numberBlocked;
  }
}

module.exports = MovieTheater;