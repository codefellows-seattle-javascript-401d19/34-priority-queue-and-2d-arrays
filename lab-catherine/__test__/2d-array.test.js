'use strict';

const MovieTheater = require('../src/2d-array');

describe('2D Array - Movie Theater', () => {
  test('Movie Theater should return the number of blocked people', () => {
    let theater = [
      [ '1 feet 11 inches', '4 feet 8 inches', '2 feet 10 inches'], 
      ['3 feet 5 inches', '2 inches', '3 inches', '11 inches' ],
      [ '2 feet 10 inches', '11 inches', '7 inches'],
      ['2 feet 9 inches', '0 inches', '9 inches'],
      [ '3 inches', '1 inches', '5 feet 5 inches'],
      ['6 inches', '2 inches', '5 feet 7 inches'],
    ];
    let movieTheater = new MovieTheater();
    expect(movieTheater.numberOfBlockedPeople(2, 3, theater)).toEqual(0);
    expect(movieTheater.numberOfBlockedPeople(6, 0, theater)).toEqual(0);    
  });
});