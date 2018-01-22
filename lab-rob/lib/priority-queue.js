'use strict';

class PriorityQueue {
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

    if(minIndex !== index) {
      this._swapValues(minIndex, index);
      this._bubbleDown(minIndex);
    }
  }

  dequeue() {
    if(this.isEmpty())
      return null;

    let min = this._data.shift();

    this._data.unshift(this._data.pop());
    this._bubbleDown(0);
    return min.value;
  }

  enqueue(priorityObj) {
    if(priorityObj.priority === undefined || priorityObj.value === undefined)
      throw new TypeError('priorityObj must contain properties <priority> and <value>');

    if(typeof priorityObj.priority !== 'number')
      throw new TypeError('priority must be a number');

    this._data.push(priorityObj);
    this._bubbleUp(this._data.length - 1);
  }

  peek() {
    return this.isEmpty() ? null : this._data[0].value;
  }

  isEmpty() {
    return this._data.length === 0 ? true : false;
  }
}

module.exports = PriorityQueue;