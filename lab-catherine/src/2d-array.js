'use strict';

const convertFeetToInches = string => {
  const individualWords = string.split(' ');

  if(individualWords.includes('feet')) {
    const feetToInches = parseInt(individualWords[0]) * 12;
    const conversionTotal = feetToInches + parseInt(individualWords[2]);
    return conversionTotal;
  } else {
    return parseInt(individualWords[0]);
  }
};

convertFeetToInches('1 feet 11 inches');