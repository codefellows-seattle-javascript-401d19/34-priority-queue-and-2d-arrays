'use strict';

class MinHeap {
  constructor() {
    this._data = [];
  }

  _getParentIndex(index) {
    return index === 0 ? null : Math.floor((index - 1) / 2);
  }
  
  _getLeftIndex(index) {
    return 2 * index + 1;
  }

  _getRightIndex(index) {
    return 2 * index + 2;
  }

  _swapValues(indexA, indexB) {
    [this._data[indexA], this._data[indexB]] =
      [this._data[indexB], this._data[indexA]];
  }

  _bubbleUp(index) {
    let parentIndex = this._getParentIndex(index);

    if(parentIndex === null)
      return;

    if(this._data[parentIndex] > this._data[index]) {
      this._swapValues(parentIndex, index);
      this._bubbleUp(parentIndex);
    }
  }

  _bubbleDown(index) {
    let minIndex = index;
    let leftIndex = this._getLeftIndex(index);
    let rightIndex = this._getRightIndex(index);

    if(leftIndex <= this._data.length - 1) {
      if(this._data[minIndex] > this._data[leftIndex])
        minIndex = leftIndex;
    }

    if(rightIndex <= this._data.length - 1) {
      if(this._data[minIndex] > this._data[rightIndex])
        minIndex = rightIndex;
    }

    if(minIndex !== index) {
      this._swapValues(minIndex, index);
      this._bubbleDown(minIndex);
    }
  }

  extractMinimum() {
    if(this._data.length === 0)
      return null;

    let min = this._data.shift();

    this._data.unshift(this._data.pop());
    this._bubbleDown(0);
    return min;
  }

  insert(value) {
    this._data.push(value);
    this._bubbleUp(this._data.length - 1);
  }

  peek() {
    return this._data[0];
  }
}

module.exports = MinHeap;