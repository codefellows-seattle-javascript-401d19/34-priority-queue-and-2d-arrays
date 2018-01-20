const twoDArray = require('../model/2D-array');

describe(`2D Array`, () => {
  test(`2D array should return the number of people being blocked by the person at the coordinate provided`, () => {
    let theatre = [
      ['5 ft 4 inches', '6 ft 0 inches', '65 inches'],
      ['6 ft 1 inches', '5 ft 10 inches', '63 inches'],
      ['5 ft 1 inches', '68 inches', '6 ft 2 inches'],
      ['5 ft 6 inches', '5 ft 2 inches', '70 inches'],
      ['4 ft 11 inches', '73 inches', '6 ft 0 inches'],
      ['5 ft 4 inches', '5 ft 6 inches', '62 inches'],
    ];
    let movieTheatre = new twoDArray();
    expect(movieTheatre.findBlocking(theatre, 2, 1)).toEqual(2);
    expect(movieTheatre.findBlocking(theatre, 0, 0)).toEqual(2);
    expect(movieTheatre.findBlocking(theatre, 5, 2)).toEqual(0);
  });
  test(`2D array should throw an error if theatre provided is not an array (or object)`, () => {
    let movieTheatre = new twoDArray();
    let theatre = 'fish';
    expect(() => {
      movieTheatre(theatre, 2, 4);
    }).toThrow();
  });
  test(`2D array should throw an error if theatre provided is not an array (or object)`, () => {
    let movieTheatre = new twoDArray();
    let theatre = [
      ['5 ft 4 inches', '6 ft 0 inches', '65 inches'],
      ['6 ft 1 inches', '5 ft 10 inches', '63 inches'],
      ['5 ft 1 inches', '68 inches', '6 ft 2 inches'],
      ['5 ft 6 inches', '5 ft 2 inches', '70 inches'],
      ['4 ft 11 inches', '73 inches', '6 ft 0 inches'],
      ['5 ft 4 inches', '5 ft 6 inches', '62 inches'],
    ];
    expect(() => {
      movieTheatre(theatre, [1], 4);
    }).toThrow();
  });
});
