'use strict';

const arr2d = {};

arr2d._heightParse = height => {
  const heightArr = height.split(' ');
  if (heightArr.length === 4){
    return ((Number(heightArr[0]) * 12) + Number(heightArr[2]));
  }
  return Number(heightArr[0]);
};

arr2d.blockedPeople = (theater, row, col) => {
  const heightMap = theater.map(e => {
    return arr2d._heightParse(e[col]);
  });
  let counter = 0;
  for (let i = row; i < heightMap.length; i++){
    if (heightMap[i] < heightMap[row]){
      counter++;
    }
  }
  return counter;
};

module.exports = arr2d.blockedPeople;