'use strict';

const PriorityQueue = require('../lib/priority-queue');

describe('tests for priority-queue.js', () => {
  test('testing that enqueue behaves properly and priority-queue stores highest priority objects in internal array at index 0, also testing that peek returns the highest priority queue in the heap', () => {
    let testQueue = new PriorityQueue();
    expect(testQueue.peek()).toBeNull();
    testQueue.enqueue();
    expect(testQueue.peek()).toEqual();
    testQueue.enqueue();
    expect(testQueue.peek()).toEqual();
    testQueue.enqueue();
    expect(testQueue.peek()).toEqual();
  });

  test('testing that dequeue method properly returns highest priority value in the priority-queue and removes that value', () => {
    let testQueue = new PriorityQueue();
    testQueue.enqueue();
    expect(testQueue.dequeue()).toEqual();
    expect(testQueue.dequeue()).toBeNull();
    testQueue.enqueue();
    testQueue.enqueue();
    testQueue.enqueue();
    testQueue.enqueue();
    testQueue.enqueue();
    testQueue.enqueue();
    expect(testQueue.dequeue()).toEqual();
    expect(testQueue.dequeue()).toEqual();
    expect(testQueue.dequeue()).toEqual();
    expect(testQueue.dequeue()).toEqual();
    expect(testQueue.dequeue()).toEqual();
    expect(testQueue.dequeue()).toEqual();

  });
});