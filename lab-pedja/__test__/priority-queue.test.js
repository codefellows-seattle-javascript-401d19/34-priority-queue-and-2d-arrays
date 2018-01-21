'use strict'

const PriorityQueue = require('../src/priority-queue');

describe('priority-queue.js', () => {
  test('enqueue method should insert nodes based on their priority value', () => {
    let resultQueue = new PriorityQueue.MinHeap();

    resultQueue.enqueue({value: "luigi", priority: 5});
    resultQueue.enqueue({value: "mario", priority: 10});
    resultQueue.enqueue({value: "yoshi", priority: 1});

    expect(resultQueue._data[0].value).toEqual('yoshi');
    expect(resultQueue.dequeue()).toEqual({value: "yoshi", priority: 1});
    expect(resultQueue._data[0].value).toEqual('luigi');    
  });
  test('dequeue method should return node with the lowest priority value', () => {
    let resultQueue = new PriorityQueue.MinHeap();

    resultQueue.enqueue({value: "luigi", priority: 5});
    resultQueue.enqueue({value: "mario", priority: 10});
    resultQueue.enqueue({value: "yoshi", priority: 1});
    resultQueue.enqueue({value: "koopa troopa", priority: 2});

    expect(resultQueue.dequeue()).toEqual({value: "yoshi", priority: 1});
    expect(resultQueue._data[0].value).toEqual('koopa troopa');    
  });
  test('should throw an error if value or priority of inserted node is not provided', () => {
    let resultQueue = new PriorityQueue.MinHeap();

    expect(() => {
      resultQueue.enqueue(10);
    }).toThrow();
    
    expect(() => {
      resultQueue.enqueue('daisy');
    }).toThrow();
    
    expect(() => {
      resultQueue.enqueue({priority: 10});
    }).toThrow();

    expect(() => {
      resultQueue.enqueue({value: "bowser"});
    }).toThrow();
   
    expect(() => {
      resultQueue.enqueue({});
    }).toThrow();
  });
});