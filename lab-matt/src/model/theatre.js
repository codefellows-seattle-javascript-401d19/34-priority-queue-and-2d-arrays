'use strict';

class Theatre {
  constructor() {
    let SEATS = [
      [ '1 feet 11 inches', '4 feet 8 inches', '2 feet 10 inches', '3 feet 5 inches', '2 inches', '3 inches', '11 inches' ],
      [ '5 feet 10 inches', '9 inches', '3 feet 5 inches', '3 inches', '9 inches', '1 feet 0 inches', '0 inches' ],
      [ '0 feet 5 inches', '5 feet 9 inches', '6 feet 1 inches', '1 inches', '1 inches', '5 feet 3 inches', '3 feet 5 inches' ],
      [ '1 inches', '0 feet 11 inches', '2 feet 5 inches', '5 feet 6 inches', '6 feet 6 inches', '6 inches', '5 feet 11 inches' ],
      [ '10 inches', '11 inches', '3 inches', '5 feet 2 inches', '9 inches', '4 inches', '1 feet 10 inches' ],
      [ '2 feet 10 inches', '11 inches', '7 inches', '2 feet 9 inches', '0 inches', '9 inches', '0 feet 2 inches' ],
      [ '3 inches', '1 inches', '5 feet 5 inches', '6 inches', '2 inches', '5 feet 7 inches', '8 inches' ]
    ]
  }

  parseHeight(str) {
    let height
    if (str.match(feet)) {
      height = str.match(/(\d+) \D+ (\d+)/);
      feet = height[1];
      inches = height[2];
      return ((feet * 12) + inches);
    } else {
      
    }
  };
}

module.exports = Theatre;