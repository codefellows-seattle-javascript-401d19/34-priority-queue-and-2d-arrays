'use strict';

const PriorityQueue = require('../src/priority-queue');

describe('testing priority queue', () => {
  test('testing priority queue', () => {
    let testPriorityQueue = new PriorityQueue.PriorityMinHeap();
    testPriorityQueue.insert({value: 'taco', priority: 5});
    testPriorityQueue.insert({value: 'pizza', priority: 4});
    testPriorityQueue.insert({value: 'bacon', priority: 3});
    testPriorityQueue.insert({value: 'gyro', priority: 1});
    testPriorityQueue.insert({value: 'pudding', priority: 2});
    testPriorityQueue.insert({value: 'hi', priority: 3});
    testPriorityQueue.extractMininum();
    testPriorityQueue.extractMininum();
    testPriorityQueue.extractMininum();
    testPriorityQueue.extractMininum();
    testPriorityQueue.extractMininum();
    console.log('test queue', testPriorityQueue.extractMininum());

  });
});
