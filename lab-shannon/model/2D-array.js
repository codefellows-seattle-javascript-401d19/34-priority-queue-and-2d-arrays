'use strict';

class Theatre{
  findBlocking(theatre, row, seat){
    let blocking = 0;
    let column = [];
    for(let i = 0; i < theatre.length; i++){
      column.push(theatre[i][seat]);
    }
    for(let i = 0; i < column.length; i++){
      column[i] = this._convertHeightToInches(column[i]);
    }
    for(let i = row + 1; i < column.length; i++){
      if(column[row] > column[i]){
        blocking++;
      }
    }
    return blocking;
  }

  _convertHeightToInches(person){
    let height = person.split(' ');
    let heightInInches;
    if(height.length === 4){
      heightInInches = (height[0] * 12) + height[2];
    }else if(height.length === 2){
      heightInInches = height[0];
    }
    return heightInInches;
  }
}

module.exports = Theatre;
