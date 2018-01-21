'use strict';

class PriorityQueue {
  constructor(){
    this._data = [];
  }
  
  peek(){
    if (!this._data.length){
      return null;
    }
  
    return this._data[0][0].value;
  }

  enqueue(data){
    //data = {priority, value}
    const queue = [];
    queue.push(data);
    this._data.push(queue);
    this._bubbleUp(this._data.length - 1);
  }

  _bubbleUp(index) {
    if (!index)
      return;

    let parentIndex = this._parentIndex(index);

    if (this._data[parentIndex][0].priority === this._data[index][0].priority){
      // deal with merging arrays and deleting extra spot in _data array
      this._data[parentIndex].concat(this._data[index]);
      let lastQueue = this._data.pop();
      if (this._data.length - 1 > index) {
        this._data[index] = lastQueue;
        this._bubbleDown(index);
      }
      return;
    }

    if (this._data[parentIndex][0].priority > this._data[index][0].priority) {
      this._swap(parentIndex, index);
      this._bubbleUp(parentIndex);
    }
  }

  _parentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  _swap(i, j) {
    let temp = this._data[i];

    this._data[i] = this._data[j];
    this._data[j] = temp;
  }

  dequeue() {
    if (!this._data.length){
      return null;
    }

    let max = this._data[0].shift().value;
    if (!this._data[0].length){
      let lastQueue = this._data.pop();
      if (this._data.length){
        this._data[0] = lastQueue;
        this._bubbleDown(0);
      }
    }
    return max;
  }

  _leftChildIndex(index) {
    return (2 * index) + 1;
  }

  _rightChildIndex(index) {
    return (2 * index) + 2;
  }

  _bubbleDown(index) {
    let maxIndex = index;
    let leftIndex = this._leftChildIndex(index);
    let rightIndex = this._rightChildIndex(index);

    if (leftIndex <= this._data.length - 1) {
      // needs to be [0].priority
      if (this._data[maxIndex][0].priority === this._data[leftIndex][0].priority){
        //merge arrays
      }
      if (this._data[maxIndex][0].priority > this._data[leftIndex][0].priority){
        maxIndex = leftIndex;
      }
    }
    if (rightIndex <= this._data.length - 1) {
      if (this._data[maxIndex][0].priority === this._data[rightIndex][0].priority) {
        //merge arrays
      }
      if (this._data[maxIndex][0].priority > this._data[rightIndex][0].priority){
        maxIndex = rightIndex;
      }
    }

    if (maxIndex !== index) {
      this._swap(index, maxIndex);
      this._bubbleDown(maxIndex);
    }
  }
}

module.exports = PriorityQueue;