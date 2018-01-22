'use strict';

const PriorityQueue = require('../src/priority-queue');

describe('priority-queue.js', () => {
  test('should throw an error if node is not an object', () => {
    let priorityQueue = new PriorityQueue.MinHeap();
    expect(() => {
      priorityQueue.enqueue('notAnObject');
    }).toThrow();
  });

  test('enqueue method should insert a node based on priority value', () => {
    let priorityQueue = new PriorityQueue.MinHeap();
    priorityQueue.enqueue({value: 'three', priority: 3});
    priorityQueue.enqueue({value: 'two', priority: 2});
    priorityQueue.enqueue({value: 'ten', priority: 10});
    priorityQueue.enqueue({value: 'eight', priority: 8});
     
    expect(priorityQueue._data[0].value).toEqual('two');
    expect(priorityQueue.dequeue()).toEqual({value: 'two', priority: 2});
    expect(priorityQueue._data[0].value).toEqual('three');
    expect(priorityQueue.dequeue()).toEqual({value: 'three', priority: 3});
    expect(priorityQueue._data[0].value).toEqual('eight');
    expect(priorityQueue.dequeue()).toEqual({value: 'eight', priority: 8});
    expect(priorityQueue._data[0].value).toEqual('ten');
    expect(priorityQueue.dequeue()).toEqual({value: 'ten', priority: 10});
  });
});