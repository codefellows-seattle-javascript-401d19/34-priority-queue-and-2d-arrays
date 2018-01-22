'use strict';

const howManyAmIBlocking = (arrDD, row, col) => {
  let result = 0;
  let myHeight = _height(arrDD, row, col);
  let rowLength = arrDD.length;
  while(row < rowLength){
    console.log('row :', row);
    if(_height(arrDD, row, col) < myHeight)
      result ++;
    row++;
  }
  console.log('blocking: ', result);
  return result;
};

const _height= (arrDD, row, col) =>{
  let height;
  let stringHeight = arrDD[row][col];
  let strArr = stringHeight.split(' ');
  if(strArr.length === 2){
    height = parseInt(strArr[0]);
  }else if(strArr.length === 4){
    height = parseInt(strArr[0]) * 12 + parseInt(strArr[2]);
  }else{
    throw new Error('invalid 2D array inputs');
  }
  return height;
};


module.exports = howManyAmIBlocking;

let arrDD = [
  [ '1 feet 11 inches', '4 feet 8 inches', '2 feet 10 inches', '3 feet 5 inches', '2 inches', '3 inches', '11 inches' ],
  [ '5 feet 10 inches', '9 inches', '3 feet 5 inches', '3 inches', '9 inches', '1 feet 0 inches', '0 inches' ],
  [ '0 feet 5 inches', '5 feet 9 inches', '6 feet 1 inches', '1 inches', '1 inches', '5 feet 3 inches', '3 feet 5 inches' ],
  [ '1 inches', '0 feet 11 inches', '2 feet 5 inches', '5 feet 6 inches', '6 feet 6 inches', '6 inches', '5 feet 11 inches' ],
  [ '10 inches', '11 inches', '3 inches', '5 feet 2 inches', '9 inches', '4 inches', '1 feet 10 inches' ],
  [ '2 feet 10 inches', '11 inches', '7 inches', '2 feet 9 inches', '0 inches', '9 inches', '0 feet 2 inches' ],
  [ '3 inches', '1 inches', '5 feet 5 inches', '6 inches', '2 inches', '5 feet 7 inches', '8 inches' ],
];

howManyAmIBlocking(arrDD, 1, 0);
howManyAmIBlocking(arrDD, 3, 0);
