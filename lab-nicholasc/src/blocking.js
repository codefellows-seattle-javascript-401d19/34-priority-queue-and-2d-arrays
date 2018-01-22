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
