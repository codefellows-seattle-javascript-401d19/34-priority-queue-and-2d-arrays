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

  retrieveMinimum(){
    return this._data.pop();
  }

  _getParentIndex(index){
    if(index === 0){
      return null;
    }
    let parentIndex = Math.floor((index - 1) / 2);
    return parentIndex;
  }

  _swapValues(index1, index2){
    let tempValue = this._data[index1];
    this._data[index1] = this._data[index2];
    this._data[index2] = tempValue;
  }

  bubbleUp(index){
    let parentIndex = this._getParentIndex(index);

    if(parentIndex === null){
      return;
    }else if(this._data[index].priority < this._data[parentIndex].priority){
      this._swapValues(parentIndex, index);
      this.bubbleUp(parentIndex);
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
    this.bubbleUp(this._data.length - 1);
  }
}

module.exports = minHeap;
