'use strict';

const blockedPeople = require('../lib/2d-array');

describe('tests for 2d-array.js', () => {
  const seats = [
    ['1 feet 11 inches', '4 feet 8 inches', '2 feet 10 inches', '3 feet 5 inches', '2 inches', '3 inches', '11 inches'],
    ['5 feet 10 inches', '9 inches', '3 feet 5 inches', '3 inches', '9 inches', '1 feet 0 inches', '0 inches'],
    ['0 feet 5 inches', '5 feet 9 inches', '6 feet 1 inches', '1 inches', '1 inches', '5 feet 3 inches', '3 feet 5 inches'],
    ['1 inches', '0 feet 11 inches', '2 feet 5 inches', '5 feet 6 inches', '6 feet 6 inches', '6 inches', '5 feet 11 inches'],
    ['10 inches', '11 inches', '3 inches', '5 feet 2 inches', '9 inches', '4 inches', '1 feet 10 inches'],
    ['2 feet 10 inches', '11 inches', '7 inches', '2 feet 9 inches', '0 inches', '9 inches', '0 feet 2 inches'],
    ['3 inches', '1 inches', '5 feet 5 inches', '6 inches', '2 inches', '5 feet 7 inches', '8 inches'],
  ];
  test('testing that isEmpty behaves as expected', () => {
    expect(blockedPeople(seats, 0, 0)).toEqual(4);
    expect(blockedPeople(seats, 6, 6)).toEqual(0);
    expect(blockedPeople(seats, 1, 6)).toEqual(0);
    expect(blockedPeople(seats, 0, 1)).toEqual(5);
  });
});