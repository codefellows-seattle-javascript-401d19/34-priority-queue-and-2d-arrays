'use strict';

class minHeap{
  constructor(){
    this._data = [];
  }

  peek(){
    if(this._data.length === 0){
      return null;
    }
    return this._data[0];
  }

  _getParentIndex(index){
    if(index === 0){
      return null;
    }
    let parentIndex = Math.floor((index - 1) / 2);
    return parentIndex;
  }

  _getLeftIndex(index){
    return Math.floor((index * 2) + 1);
  }

  _getRightIndex(index){
    return Math.floor((index * 2) + 2);
  }

  _swapValues(index1, index2){
    let tempValue = this._data[index1];
    this._data[index1] = this._data[index2];
    this._data[index2] = tempValue;
  }

  _bubbleUp(index){
    let parentIndex = this._getParentIndex(index);

    if(parentIndex === null){
      return;
    }else if(this._data[index].priority < this._data[parentIndex].priority){
      this._swapValues(parentIndex, index);
      this._bubbleUp(parentIndex);
    }
  }

  findMinimumIndex(index){
    let leftIndex = this._getLeftIndex(index);
    let rightIndex = this._getRightIndex(index);

    let IndexOfLeftMinimum = index;
    let IndexOfRightMinimum = index;
    let rootIndex = index;

    if(this._data.length === 1){
      return rootIndex;
    }

    if(leftIndex <= (this._data.length - 1)){
      IndexOfLeftMinimum = this.findMinimumIndex(leftIndex);
    }

    if(rightIndex <= (this._data.length - 1)){
      IndexOfRightMinimum = this.findMinimumIndex(rightIndex);
    }

    if(this._data[rootIndex].priority < this._data[IndexOfLeftMinimum].priority && this._data[rootIndex].priority < this._data[IndexOfRightMinimum].priority){
      return rootIndex;
    }
    if(this._data[IndexOfLeftMinimum].priority < this._data[IndexOfRightMinimum].priority){
      return IndexOfLeftMinimum;
    } else {
      return IndexOfRightMinimum;
    }
  }

  insert(element){
    if(typeof element !== 'object'){
      throw new TypeError(`__ERROR__ element must be an object`);
    }
    if(!element.value || !element.priority){
      throw new Error('__ERROR__ element must have a value and a priority');
    }
    this._data.push(element);
    this._bubbleUp(this._data.length - 1);
  }

  retrieveMinimum(){
    if(this._data.length < 1){
      return null;
    }

    let min = this._data.shift();
    return min;
  }
}

module.exports = minHeap;
