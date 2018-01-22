'use strict';

const MinHeap = require('./min-heap');

class PriorityQueue {
  constructor() {
    this._queue = null;
    this._data = [];
  }

  enqueue(value) {
    this._data.push(value);
  }

  dequeue() {
    return this._data.shift();
  }
}

module.exports = PriorityQueue;