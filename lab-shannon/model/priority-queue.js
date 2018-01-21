'use strict';
const minHeap = require('./min-heap');

class priorityQueue{
  constructor(){
    this._queue = null;
  }
  enqueue(element){
    if(this._queue === null){
      this._queue = new minHeap();
      this._queue.insert(element);
    }else{
      this._queue.insert(element);
    }
  }
  dequeue(){
    console.log(this._queue, `before`);
    let minimum = this._queue.retrieveMinimum();
    let newMinimum = this._queue.findMinimum(0);
    console.log(newMinimum, `new minimum`);
    this._queue._data.shift(newMinimum);
    console.log(this._queue, `after`);
    return minimum;
  }
  isEmpty(){
    if(this._queue === null || this._queue._data.length < 1){
      return true;
    }else{
      return false;
    }
  }
  peek(){
    return this._queue.peek();
  }
}

module.exports = priorityQueue;
