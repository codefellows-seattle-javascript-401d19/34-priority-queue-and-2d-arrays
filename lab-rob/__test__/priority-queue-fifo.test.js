'use strict';

const PriorityQueueFifo = require('../lib/priority-queue-fifo');

describe('priority-queue-fifo.js', () => {
  let testQueue = null;

  describe('Instantiation and helper functions.', () => {
    beforeEach(() => {
      testQueue = new PriorityQueueFifo();
      testQueue.enqueue({priority: 3, value: 'first 3'});
      testQueue.enqueue({priority: 2, value: 'first 2'});
      testQueue.enqueue({priority: 2, value: 'second 2'});
      testQueue.enqueue({priority: 4, value: 'first 4'});
      testQueue.enqueue({priority: 5, value: 'first 5'});
    });

    test('Instantiation should return an object with an empty data array and empty dataMap object.', () => {
      let queue = new PriorityQueueFifo();
      expect(queue._data.length).toEqual(0);
      expect(queue._dataMap).toEqual({});
    });

    test('Enqueueing should allow you to add values to the queue', () => {
      let queue = new PriorityQueueFifo();
      queue.enqueue({priority: 1, value: 'first'});
      queue.enqueue({priority: 2, value: 'first 2'});
      queue.enqueue({priority: 3, value: 'first 3'});
      expect(queue._data).toEqual([
        {priority: 1, values: ['first']},
        {priority: 2, values: ['first 2']},
        {priority: 3, values: ['first 3']},
      ]);
    });

    test('Enqueueing a new highest priority value should add it to the end and then bubble it to the top.', () => {
      testQueue.enqueue({priority: 1, value: 'first 1'});
      expect(testQueue._data).toEqual([
        {priority: 1, values: ['first 1']},
        {priority: 2, values: ['first 2', 'second 2']},
        {priority: 4, values: ['first 4']},
        {priority: 5, values: ['first 5']},
        {priority: 3, values: ['first 3']},
      ]);
    });

    test('When there are multiple highest priorities, dequeueing the first priority should return the first from the queue and remove it from that priority\'s values array.', () => {
      expect(testQueue.dequeue()).toEqual('first 2');
      expect(testQueue._data).toEqual([
        {priority: 2, values: ['second 2']},
        {priority: 3, values: ['first 3']},
        {priority: 4, values: ['first 4']},
        {priority: 5, values: ['first 5']},
      ]);
    });
    
    test('Dequeueing should work with a more complicated queue', () => {
      testQueue.enqueue({priority: 6, value: 'first 6'});
      testQueue.enqueue({priority: 7, value: 'first 7'});
      testQueue.enqueue({priority: 7, value: 'second 7'});
      testQueue.enqueue({priority: 7, value: 'third 7'});
      testQueue.enqueue({priority: 1, value: 'first 1'});
      testQueue.enqueue({priority: 6, value: 'second 6'});
      testQueue.enqueue({priority: 7, value: 'fourth 7'});
      testQueue.enqueue({priority: 7, value: 'fifth 7'});
      testQueue.enqueue({priority: 7, value: 'sixth 7'});
      testQueue.enqueue({priority: 1, value: 'second 1'});
      expect(testQueue.dequeue()).toEqual('first 1');
    });

    test('Dequeueing should work with a more complicated queue', () => {
      testQueue.enqueue({priority: 6, value: 'first 6'});
      testQueue.enqueue({priority: 7, value: 'first 7'});
      testQueue.enqueue({priority: 8, value: 'first 8'});
      testQueue.enqueue({priority: 9, value: 'first 9'});
      testQueue.enqueue({priority: 10, value: 'first 10'});
      testQueue.enqueue({priority: 9, value: 'second 9'});
      testQueue.enqueue({priority: 2, value: 'third 2'});
      testQueue.enqueue({priority: 2, value: 'fourth 2'});
      testQueue.enqueue({priority: 1, value: 'first 1'});
      expect(testQueue.dequeue()).toEqual('first 1');
    });

    test('Dequeueing with an empty queue should return null', () => {
      let queue = new PriorityQueueFifo();
      expect(queue.dequeue()).toBeNull();
    });

    test('peek should return the first enqueued priority of the queue', () => {
      expect(testQueue.peek()).toEqual('first 2');
    });

    test('peek should return null if the queue is empty', () => {
      let queue = new PriorityQueueFifo();
      expect(queue.peek()).toBeNull();
    });

    test('isEmpty should return false if the thinger is not empty', () => {
      expect(testQueue.isEmpty()).toBeFalsy();
    });

    test('isEmpty should return true if the thinger is empty', () => {
      let queue = new PriorityQueueFifo();
      expect(queue.isEmpty()).toBeTruthy();
    });

    test('enqueueing should throw if property <priority> is not a number', () => {
      let queue = new PriorityQueueFifo();
      expect(() => {
        queue.enqueue({priority: 'nope', value: 123});
      }).toThrow();
    });

    test('enqueueing should throw if <priority> or <value> is not defined', () => {
      let queue = new PriorityQueueFifo();
      expect(() => {
        queue.enqueue({priority: 3});
      }).toThrow();
    });
  });
});