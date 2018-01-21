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
    expect(testQueue.peek()).toEqual('b');
  });

  test('testing that dequeue method properly returns highest priority value in the priority-queue and removes that value', () => {
    let testQueue = new PriorityQueue();
    testQueue.enqueue({priority: 2, value: 'a'});
    expect(testQueue.dequeue()).toEqual('a');
    expect(testQueue.dequeue()).toBeNull();
    testQueue.enqueue({priority: 5, value: 'f'});
    testQueue.enqueue({priority: 3, value: 'd'});
    testQueue.enqueue({priority: 1, value: 'a'});
    testQueue.enqueue({priority: 2, value: 'b'});
    testQueue.enqueue({priority: 2, value: 'c'});
    testQueue.enqueue({priority: 3, value: 'e'});
    expect(testQueue.dequeue()).toEqual('a');
    expect(testQueue.dequeue()).toEqual('b');
    expect(testQueue.dequeue()).toEqual('c');
    expect(testQueue.dequeue()).toEqual('d');
    expect(testQueue.dequeue()).toEqual('e');
    expect(testQueue.dequeue()).toEqual('f');
  });
});