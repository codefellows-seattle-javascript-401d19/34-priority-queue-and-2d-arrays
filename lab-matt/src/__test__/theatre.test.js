'use strict';

const Theatre = require('../model/theatre');

let myTheatre = new Theatre;

describe('theatre.js', () => {
  test('theatre howManyBlocking function returns a number based on how many people are blocked behind the person selected', () => {
    expect(myTheatre.howManyBlocking(0, 1)).toEqual(5);
    expect(myTheatre.howManyBlocking(0, 2)).toEqual(3);
    expect(myTheatre.howManyBlocking(0, 6)).toEqual(0);
  });
});