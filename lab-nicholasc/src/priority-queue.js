'use strict';

const MinHeap = require('./min-heap');

class PQueue{
  constructor(){
    this.heap = new MinHeap();
  }

  enqueue(obj){
    this.heap.insert(obj);
  }
  dequeue(){
    return this.heap.extractMinimum().value;
  }
}

module.exports = PQueue;
