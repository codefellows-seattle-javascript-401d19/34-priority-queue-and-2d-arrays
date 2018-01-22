'use strict';

const PriorityQueue = require('../src/priority-queue');

describe('testing priority queue', () => {

  let testPriorityQueue = new PriorityQueue();
  testPriorityQueue.enqueue({value: 'taco', priority: 5});
  testPriorityQueue.enqueue({value: 'pizza', priority: 4});
  testPriorityQueue.enqueue({value: 'bacon', priority: 3});
  testPriorityQueue.enqueue({value: 'gyro', priority: 1});
  testPriorityQueue.enqueue({value: 'pudding', priority: 2});
  testPriorityQueue.enqueue({value: 'hi', priority: 3});

  test('priority queue should return the lowest value priority on dequeue', () => {
    expect(testPriorityQueue.dequeue()).toEqual({value: 'gyro', priority: 1});
  });

  test('priority queue should return the second lowest priority value when returning dequeue for the second time', () => {
    expect(testPriorityQueue.dequeue()).toEqual({value: 'pudding', priority: 2});
  });
});
