'use strict';

const PriorityQueue = require('../model/priority-queue');

let myQueue = new PriorityQueue;

myQueue.enqueue({ priority: 3, value: 'three'});
myQueue.enqueue({ priority: 1, value: 'one'});
myQueue.enqueue({ priority: 6, value: 'six'});
myQueue.enqueue({ priority: 9, value: 'nine'});
myQueue.enqueue({ priority: 4, value: 'four'});
myQueue.enqueue({ priority: 2, value: 'two'});
myQueue.enqueue({ priority: 5, value: 'five'});
myQueue.enqueue({ priority: 0, value: 'zero'});
myQueue.enqueue({ priority: 7, value: 'seven'});
myQueue.enqueue({ priority: -100, value: '-100'});
myQueue.enqueue({ priority: 8, value: 'eight'});
myQueue.enqueue({ priority: 100, value: '100'});

describe('priority-queue.js', () => {
  test('peek returns the lowest priority value but doesn\t remove it', () => {
    expect(myQueue.peek()).toEqual({ priority: -100, value: '-100'});
    expect(myQueue.peek()).toEqual({ priority: -100, value: '-100'});
    expect(myQueue.peek()).toEqual({ priority: -100, value: '-100'});
  });
  test('priority queue focuses on lowest number as highest priority', () => {
    expect(myQueue.dequeue().priority).toEqual(-100);
    expect(myQueue.dequeue().priority).toEqual(0);
    expect(myQueue.dequeue().priority).toEqual(1);
    expect(myQueue.dequeue().priority).toEqual(2);
    expect(myQueue.dequeue().priority).toEqual(3);
    expect(myQueue.dequeue().priority).toEqual(4);
    expect(myQueue.dequeue().priority).toEqual(5);
    expect(myQueue.dequeue().priority).toEqual(6);
    expect(myQueue.dequeue().priority).toEqual(7);
    expect(myQueue.dequeue().priority).toEqual(8);
    expect(myQueue.dequeue().priority).toEqual(9);
    expect(myQueue.dequeue().priority).toEqual(100);
  });
  test('expect an empty priority queue to return null with .dequeue()', () => {
    expect(myQueue.dequeue()).toEqual(null);
  });
  test('expect an empty priority queue to return null with peek()', () => {
    expect(myQueue.peek()).toEqual(null);
  });
  test('expect an error if the object doesn\'t have a priority or value', () => {
    expect(() => {
      myQueue.enqueue({ priority: 0});
    }).toThrow();
    expect(() => {
      myQueue.enqueue({ value: 'zero'});
    }).toThrow();
  });
});
