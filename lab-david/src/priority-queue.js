'use strict';

class PriorityQueue {
  constructor() {
    this._data = [];
  }


  _getParentIndex(index){
    if(index === 0)
      return null;

    return Math.floor((index - 1) / 2);
  }

  _getLeftIndex(index){
    return (2 * index) + 1;
  }

  _getRightIndex(index){
    return (2 * index) + 2;
  }

  enqueue(){

  }

  dequeue(){
    
  }

  _swapValues(indexA, indexB){
    let tempSwapValue = this._data[indexA];

    this._data[indexA] = this._data[indexB];
    this._data[indexB] = tempSwapValue;
  }



}