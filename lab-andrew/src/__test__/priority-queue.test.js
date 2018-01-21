'use strict';

const PriorityQueue = require('../lib/priority-queue');

describe('tests for priority-queue.js', () => {
  test('testing that enqueue behaves properly and priority-queue stores highest priority objects in internal array at index 0, also testing that peek returns the highest priority queue in the heap', () => {
    let testQueue = new PriorityQueue();
    expect(testQueue.peek()).toBeNull();
    testQueue.enqueue({priority: 5, value: 'a'});
    expect(testQueue.peek()).toEqual('a');
    testQueue.enqueue({priority: 2, value: 'b'});
    expect(testQueue.peek()).toEqual('b');
    testQueue.enqueue({priority: 6, value: 'c'});
    expect(testQueue.peek()).toEqual('b');
  });

  test('testing that enqueue stores objects with the same priority in the queue order - FIFO', () => {
    let testQueue = new PriorityQueue();
    expect(testQueue.peek()).toBeNull();
    testQueue.enqueue({priority: 2, value: 'a'});
    testQueue.enqueue({priority: 2, value: 'b'});
    expect(testQueue.peek()).toEqual('a');
    testQueue.enqueue({priority: 6, value: 'c'});
    expect(testQueue.peek()).toEqual('a');
    testQueue.enqueue({priority: 1, value: 'd'});
    expect(testQueue.peek()).toEqual('d');
  });

  test('testing that dequeue method properly returns highest priority value in the priority-queue and removes that value', () => {
    let testQueue = new PriorityQueue();
    testQueue.enqueue({priority: 2, value: 'a'});
    expect(testQueue.dequeue()).toEqual('a');
    expect(testQueue.dequeue()).toBeNull();
    testQueue.enqueue({priority: 5, value: 'f'});
    console.log(testQueue._data);
    testQueue.enqueue({priority: 3, value: 'd'});
    console.log(testQueue._data);
    testQueue.enqueue({priority: 1, value: 'a'});
    console.log(testQueue._data);
    testQueue.enqueue({priority: 2, value: 'b'});
    console.log(testQueue._data);
    testQueue.enqueue({priority: 2, value: 'c'});
    console.log(testQueue._data);
    testQueue.enqueue({priority: 3, value: 'e'});
    console.log(testQueue._data);
    expect(testQueue.dequeue()).toEqual('a');
    console.log(testQueue._data);
    expect(testQueue.dequeue()).toEqual('b');
    console.log(testQueue._data);
    expect(testQueue.dequeue()).toEqual('c');
    console.log(testQueue._data);
    expect(testQueue.dequeue()).toEqual('d');
    console.log(testQueue._data);
    expect(testQueue.dequeue()).toEqual('e');
    console.log(testQueue._data);
    expect(testQueue.dequeue()).toEqual('f');
  });
});