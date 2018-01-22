'use strict';

class Element {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class MinHeap {
  constructor() {
    this._data = [];
  }

  _getParentIndex(index) {
    if(index === 0)
      return null;

    return Math.floor((index - 1) / 2);
  }

  _getLeftIndex(index) {
    return (2 * index) + 1;
  }

  _getRightIndex(index) {
    return (2 * index) + 2;
  }

  enqueue(node) {
    if(typeof node !== 'object' || node.value === undefined || node.priority === undefined )
      throw new TypeError('node must be an object, node.value and node.priority must not be undefined');

    this._data.push(new Element(node.value, node.priority));
    this._bubbleUp(this._data.length - 1);
  }

  _swapValues(indexA,indexB) {
    let tempSwapValue = this._data[indexA];

    this._data[indexA] = this._data[indexB];
    this._data[indexB] = tempSwapValue;
  }

  _bubbleUp(index) {
    if(this._getParentIndex(index) === null)
      return;

    let parentIndex = this._getParentIndex(index);

    if(this._data[parentIndex].priority > this._data[index].priority) {
      this._swapValues(parentIndex, index);
      this._bubbleUp(parentIndex);
    }
  }

  _bubbleDown(index) {
    let minIndex = index;
    let leftIndex = this._getLeftIndex(index);
    let rightIndex = this._getRightIndex(index);

    if(leftIndex <= this._data.length - 1) {
      if(this._data[minIndex].priority > this._data[leftIndex].priority)
        minIndex = leftIndex;
    }
    if(rightIndex <= this._data.length - 1) {
      if(this._data[minIndex].priority > this._data[rightIndex].priority)
        minIndex = rightIndex;
    }

    if(minIndex != index) {
      this._swapValues(index, minIndex);
      this._bubbleDown(minIndex);
    }
  }

  dequeue() {
    if(this._data.length <= 0)
      return null;
    
    let min = this._data[0];
    let lastValue = this._data.pop();
    this._data[0] = lastValue;
    this._bubbleDown(0);
    return min;
  }

  peek() {
    if(this._data.length <= 0)
      return null;
    
    return this._data[0];
  }

}

module.exports = {Element, MinHeap};