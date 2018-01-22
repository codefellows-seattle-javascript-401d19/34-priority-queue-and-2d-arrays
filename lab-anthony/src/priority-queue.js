'use strict';

const MinHeap = require('./min-heap');

class PriorityQueue {
  constructor(){
    this.heap = new MinHeap.MinHeap();
  }

  enqueue(node){
    this.heap.insert(node);
  }

  dequeue(){
    return this.heap.extractMininum();
  }
}

module.exports = PriorityQueue;
