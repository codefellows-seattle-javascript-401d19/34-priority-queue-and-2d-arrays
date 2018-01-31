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

  enqueue(priority){
      if (typeof priority.priority !== number)
        throw new TypeError('__ERROR___ priority should be numeric');

      this._data.push(priority);
      this._bubbleUp(this._data.length - 1);

  }

  dequeue(){
    if (this._data.length <= 0)
      return null;

    let firstPriority = this._data[0].value;
    let finalValue = this._data.pop();
    this._data[0] = finalValue;
    this._bubbleDown(0);
    return firstPriority;
  }

  _swapValues(indexA, indexB){
    let tempSwapValue = this._data[indexA];

    this._data[indexA] = this._data[indexB];
    this._data[indexB] = tempSwapValue;
  }
}

_bubbleUp(index){ 
  if (this._getParentIndex(index) === null)
    return;
  
  let parentIndex = this._getParentIndex(index);

  if(this._data[parentIndex].priority > this._data[index].priority) {
    this._swapValues(parentIndex, index);
    this._bubbleUp(parentIndex);
  }


_bubbleDown(index){
  let minIndex = index;
  let leftIndex = this._getLeftIndex(index);
  let rightIndex = this._getRightIndex(index);

  if(leftIndex <= this._data.length - 1){
    if(this._data[minIndex].priority > this._data[leftIndex].priority)
      minIndex = rightIndex;
  }

  if(minIndex != index){
    this._swapValues(index, minIndex);
    this._bubbleDown(minIndex);
  }
}


module.exports = PriorityQueue;