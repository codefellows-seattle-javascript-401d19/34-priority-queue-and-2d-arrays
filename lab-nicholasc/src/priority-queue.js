'use strict';

const MinHeap = require('./min-heap');

class PQueue{
  constructor(){
    this.heap = new MinHeap();
  }
}

module.exports = PQueue;
