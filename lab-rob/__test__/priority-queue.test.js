'use strict';

const PriorityQueue = require('../lib/priority-queue');

describe('priority-queue.js', () => {
  let testQueue = null;
  describe('Instantiation and helper functions.', () => {
    beforeEach(() => {
      testQueue = new PriorityQueue();
      testQueue.enqueue({priority: 3, value: 'first 3'});
      testQueue.enqueue({priority: 2, value: 'first 2'});
      testQueue.enqueue({priority: 2, value: 'second 2'});
      testQueue.enqueue({priority: 4, value: 'first 4'});
      testQueue.enqueue({priority: 5, value: 'first 5'});
    });

    test('Instantiation should return an object with an empty data array.', () => {
      let queue = new PriorityQueue();
      expect(queue._data.length).toEqual(0);
    });

    test('Enqueueing should allow you to add values to the queue', () => {
      let queue = new PriorityQueue();
      queue.enqueue({priority: 1, value: 'first'});
      queue.enqueue({priority: 2, value: 'first 2'});
      queue.enqueue({priority: 3, value: 'first 3'});
      expect(queue._data).toEqual([
        {priority: 1, value: 'first'},
        {priority: 2, value: 'first 2'},
        {priority: 3, value: 'first 3'},
      ]);
    });

    test('Enqueueing a new highest priority value should add it to the end and then bubble it to the top.', () => {
      testQueue.enqueue({priority: 1, value: 'first 1'});
      expect(testQueue._data).toEqual([
        {priority: 1, value: 'first 1'},
        {priority: 3, value: 'first 3'},
        {priority: 2, value: 'first 2'},
        {priority: 4, value: 'first 4'},
        {priority: 5, value: 'first 5'},
        {priority: 2, value: 'second 2'},
      ]);
    });
    
    test('Dequeueing should work with a duplicate priority', () => {
      testQueue.enqueue({priority: 1, value: 'first 1'});
      testQueue.enqueue({priority: 1, value: 'second 1'});
      expect(testQueue.dequeue()).toEqual('first 1');
    });

    test('Dequeueing should work with multiple priorities', () => {
      testQueue.enqueue({priority: 2, value: 'third 2'});
      testQueue.enqueue({priority: 2, value: 'fourth 2'});
      testQueue.enqueue({priority: 1, value: 'first 1'});
      expect(testQueue.dequeue()).toEqual('first 1');
    });

    test('Dequeueing with an empty queue should return null', () => {
      let queue = new PriorityQueue();
      expect(queue.dequeue()).toBeNull();
    });

    test('peek should return the priority of the queue', () => {
      expect(testQueue.peek()).toEqual('first 2');
    });

    test('peek should return null if the queue is empty', () => {
      let queue = new PriorityQueue();
      expect(queue.peek()).toBeNull();
    });

    test('isEmpty should return false if the thinger is not empty', () => {
      expect(testQueue.isEmpty()).toBeFalsy();
    });

    test('isEmpty should return true if the thinger is empty', () => {
      let queue = new PriorityQueue();
      expect(queue.isEmpty()).toBeTruthy();
    });

    test('enqueueing should throw if property <priority> is not a number', () => {
      let queue = new PriorityQueue();
      expect(() => {
        queue.enqueue({priority: 'nope', value: 123});
      }).toThrow();
    });

    test('enqueueing should throw if <priority> or <value> is not a number', () => {
      let queue = new PriorityQueue();
      expect(() => {
        queue.enqueue({priority: 3});
      }).toThrow();
    });
  });
});