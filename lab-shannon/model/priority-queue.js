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
    // console.log(this._queue, `queue`);
  }
  // dequeue(){
  //   this._queue.retrieveMinimum();
  // }
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
