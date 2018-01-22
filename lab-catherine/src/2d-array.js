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

  numberOfBlockedPeople(seat, row, theater) {
    if(typeof seat !== 'number' || typeof row !== 'number') {
      throw new TypeError('seat and row must be numbers');
    }

    if(typeof theater !== 'object') {
      throw new TypeError('theater must be an array');
    }

    if(seat < 0 || row < 0) {
      throw new Error('seat and row must be positive numbers');
    }

    let numberBlocked = 0;
    const column = [];

    for(let i = 0; i < theater.length; i++) {
      column.push(theater[i][seat]);
    }

    for(let i = 0; i < column.length; i++) {
      column[i] = this._convertFeetToInches(column[i]);
    }

    for(let i = row + 1; i < column.length; i++) {
      if(column[row] > column[i]) {
        numberBlocked++;
      }
    }
    return numberBlocked;
  }
}

module.exports = MovieTheater;