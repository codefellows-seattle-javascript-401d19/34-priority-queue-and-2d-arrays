'use strict';

const findUnhappyMovieGoers = require('../lib/movie');

describe('movie.js', () => {
  let SEATS = [
    [ '1 feet 11 inches', '4 feet 8 inches', '2 feet 10 inches', '3 feet 5 inches', '2 inches', '3 inches', '11 inches' ],
    [ '5 feet 10 inches', '9 inches', '3 feet 5 inches', '3 inches', '9 inches', '1 feet 0 inches', '0 inches' ],
    [ '0 feet 5 inches', '5 feet 9 inches', '6 feet 1 inches', '1 inches', '1 inches', '5 feet 3 inches', '3 feet 5 inches' ],
    [ '1 inches', '0 feet 11 inches', '2 feet 5 inches', '5 feet 6 inches', '6 feet 6 inches', '6 inches', '5 feet 11 inches' ],
    [ '10 inches', '11 inches', '3 inches', '5 feet 2 inches', '9 inches', '4 inches', '1 feet 10 inches' ],
    [ '2 feet 10 inches', '11 inches', '7 inches', '2 feet 9 inches', '0 inches', '9 inches', '0 feet 2 inches' ],
    [ '3 inches', '1 inches', '5 feet 5 inches', '6 inches', '2 inches', '5 feet 7 inches', '8 inches' ],
  ];

  test('should return the number of unhappy people', () => {
    expect(findUnhappyMovieGoers(SEATS, 0, 0)).toEqual(4);
    expect(findUnhappyMovieGoers(SEATS, 1, 1)).toEqual(1);
  });

  test('should throw if you check a seat that is not in the theatre', () => {
    expect(() => {
      findUnhappyMovieGoers(SEATS, 100, 100);
    }).toThrow();
  });

  test('should throw if the seats array is empty', () => {
    expect(() => {
      findUnhappyMovieGoers([], 0, 0);
    }).toThrow();
  });

  test('should throw if there is an empty columns array', () => {
    expect(() => {
      findUnhappyMovieGoers([['12 inches'], []], 0, 0);
    }).toThrow();
  });

  test('should throw if there is an inconsistent number of seats in a row', () => {
    expect(() => {
      findUnhappyMovieGoers([['12 inches'], ['13 inches', '14 inches']], 0, 0);
    }).toThrow();
  });

  test('should return 0 if the last row is provided', () => {
    expect(findUnhappyMovieGoers(SEATS, SEATS.length - 1, [0])).toEqual(0);
  });

  test('getInches helper should coerce an empty seat into a height of 0', () => {
    expect(findUnhappyMovieGoers([['empty'], [undefined]], 0, 0)).toEqual(0);
  });

  test('should throw if there is an improperly formatted height in any of the checked seats', () => {
    expect(() => {
      findUnhappyMovieGoers([['12 inches', '123'], ['13 inches', '14 inches']], 0, 1);
    }).toThrow();
  });
});