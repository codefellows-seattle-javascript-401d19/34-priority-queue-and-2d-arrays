'use strict';

const MinHeap = require('./min-heap');

class PriorityQueue {
  constructor(){
    this.heap = new MinHeap();
  }

  enqueue(node){
    this.heap.insert(node);
  }

  dequeue(){
    this.heap.extractMininum();
  }
}

module.exports = PriorityQueue;
