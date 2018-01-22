'use strict';

class PriorityQueueFifo {
  constructor() {
    this._data = [];
    this._dataMap = {};
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
    let priorityA = this._data[indexA].priority;
    let priorityB = this._data[indexB].priority;

    // The swap has to happen in this order, otherwise the map will be wrong
    [this._dataMap[priorityA], this._dataMap[priorityB]] =
      [this._dataMap[priorityB], this._dataMap[priorityA]];

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

    let min = null;
    // If only one value for this priority, delete the priority key from the map and adjust the index of the new priority object
    if(this._data[0].values.length === 1) {
      let priorityKey = this._data[0].priority;
      min = this._data.shift().values[0];
      this._data.unshift(this._data.pop());
      delete this._dataMap[priorityKey];
      this._dataMap[this._data[0].priority] = 0;
      this._bubbleDown(0);
    } else { // If more than one value just take the first of the priorities
      min = this._data[0].values.shift();
    }

    return min;
  }

  enqueue(priorityObj) {
    if(priorityObj.priority === undefined || priorityObj.value === undefined)
      throw new TypeError('priorityObj must contain properties <priority> and <value>');

    if(typeof priorityObj.priority !== 'number')
      throw new TypeError('priority must be a number');
    
    let {priority, value} = priorityObj;

    let priorityIndex = this._dataMap[priority];

    if(priorityIndex === undefined) { //first of this priority, create new node and add to map
      this._dataMap[priority] = this._data.length; // keep this line above the push
      this._data.push({
        priority,
        values: [value],
      });
      this._bubbleUp(this._data.length - 1);
    } else { // duplicate priority, push to priority's existing array
      this._data[priorityIndex].values.push(value);
    }
  }

  peek() {
    return this.isEmpty() ? null : this._data[0].values[0];
  }

  isEmpty() {
    return this._data.length === 0 ? true : false;
  }
}

module.exports = PriorityQueueFifo;