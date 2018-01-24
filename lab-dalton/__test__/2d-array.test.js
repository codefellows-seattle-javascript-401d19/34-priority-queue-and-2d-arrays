'use strict';

const MovieTheater = require('../src/2d-array');

describe('2D Array - Movie Theater', () => {
  test('Movie Theater should throw an error if theater is not an array', () => {
    let theater = 'notAnArray';
    let movieTheater = new MovieTheater();
    expect(() => {
      movieTheater(theater, 2, 3);
    }).toThrow();
  });

  test('Movie Theater should throw an error if row is not a number', () => {
    let theater = [
      [ '1 feet 11 inches', '4 feet 8 inches', '2 feet 10 inches', '3 feet 5 inches', '2 inches', '3 inches', '11 inches' ],
      [ '5 feet 10 inches', '9 inches', '3 feet 5 inches', '3 inches', '9 inches', '1 feet 0 inches', '0 inches' ],
      [ '0 feet 5 inches', '5 feet 9 inches', '6 feet 1 inches', '1 inches', '1 inches', '5 feet 3 inches', '3 feet 5 inches' ],
      [ '1 inches', '0 feet 11 inches', '2 feet 5 inches', '5 feet 6 inches', '6 feet 6 inches', '6 inches', '5 feet 11 inches' ],
      [ '10 inches', '11 inches', '3 inches', '5 feet 2 inches', '9 inches', '4 inches', '1 feet 10 inches' ],
      [ '2 feet 10 inches', '11 inches', '7 inches', '2 feet 9 inches', '0 inches', '9 inches', '0 feet 2 inches' ],
      [ '3 inches', '1 inches', '5 feet 5 inches', '6 inches', '2 inches', '5 feet 7 inches', '8 inches' ],
    ];
    let movieTheater = new MovieTheater();
    expect(() => {
      movieTheater('notANumber', 3, theater);
    }).toThrow();
  });

  test('Movie Theater should throw an error if column is not a number', () => {
    let theater = [
      [ '1 feet 11 inches', '4 feet 8 inches', '2 feet 10 inches', '3 feet 5 inches', '2 inches', '3 inches', '11 inches' ],
      [ '5 feet 10 inches', '9 inches', '3 feet 5 inches', '3 inches', '9 inches', '1 feet 0 inches', '0 inches' ],
      [ '0 feet 5 inches', '5 feet 9 inches', '6 feet 1 inches', '1 inches', '1 inches', '5 feet 3 inches', '3 feet 5 inches' ],
      [ '1 inches', '0 feet 11 inches', '2 feet 5 inches', '5 feet 6 inches', '6 feet 6 inches', '6 inches', '5 feet 11 inches' ],
      [ '10 inches', '11 inches', '3 inches', '5 feet 2 inches', '9 inches', '4 inches', '1 feet 10 inches' ],
      [ '2 feet 10 inches', '11 inches', '7 inches', '2 feet 9 inches', '0 inches', '9 inches', '0 feet 2 inches' ],
      [ '3 inches', '1 inches', '5 feet 5 inches', '6 inches', '2 inches', '5 feet 7 inches', '8 inches' ],
    ];
    let movieTheater = new MovieTheater();
    expect(() => {
      movieTheater(2, 'notANumber', theater);
    }).toThrow();
  });

  test('Movie Theater should return the number of blocked people', () => {
    let theater = [
      [ '1 feet 11 inches', '4 feet 8 inches', '2 feet 10 inches', '3 feet 5 inches', '2 inches', '3 inches', '11 inches' ],
      [ '5 feet 10 inches', '9 inches', '3 feet 5 inches', '3 inches', '9 inches', '1 feet 0 inches', '0 inches' ],
      [ '0 feet 5 inches', '5 feet 9 inches', '6 feet 1 inches', '1 inches', '1 inches', '5 feet 3 inches', '3 feet 5 inches' ],
      [ '1 inches', '0 feet 11 inches', '2 feet 5 inches', '5 feet 6 inches', '6 feet 6 inches', '6 inches', '5 feet 11 inches' ],
      [ '10 inches', '11 inches', '3 inches', '5 feet 2 inches', '9 inches', '4 inches', '1 feet 10 inches' ],
      [ '2 feet 10 inches', '11 inches', '7 inches', '2 feet 9 inches', '0 inches', '9 inches', '0 feet 2 inches' ],
      [ '3 inches', '1 inches', '5 feet 5 inches', '6 inches', '2 inches', '5 feet 7 inches', '8 inches' ],
    ];
    let movieTheater = new MovieTheater();
    expect(movieTheater.numberOfBlockedPeople(theater, 0, 0)).toEqual(4);      
    expect(movieTheater.numberOfBlockedPeople(theater, 0, 1)).toEqual(5);          
    expect(movieTheater.numberOfBlockedPeople(theater, 1, 2)).toEqual(3);
    expect(movieTheater.numberOfBlockedPeople(theater, 5, 0)).toEqual(1);  
    expect(movieTheater.numberOfBlockedPeople(theater, 5, 2)).toEqual(0);  
  });
});