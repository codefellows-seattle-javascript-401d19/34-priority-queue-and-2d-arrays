const priorityQueue = require('../model/priority-queue');

describe(`Priority Queue`, () => {
  test(`enqueue method should add elements from lowest to highest number for priority property`, () => {
    let queue = new priorityQueue();
    queue.enqueue({priority: 4, value: 'thing'});
    queue.enqueue({priority: 1, value: 'stuff'});
    queue.enqueue({priority: 5, value: 'moreThings'});
    queue.enqueue({priority: 2, value: 'blah'});
    expect(queue._queue._data[0]).toEqual({priority: 1, value: 'stuff'});
  });
  test.only(`dequeue method should remove the element with the lowest number priority property`, () => {
    let queue = new priorityQueue();
    queue.enqueue({priority: 4, value: 'thing'});
    queue.enqueue({priority: 1, value: 'stuff'});
    queue.enqueue({priority: 5, value: 'moreThings'});
    queue.enqueue({priority: 2, value: 'blah'});
    expect(queue.dequeue()).toEqual({priority: 1, value: 'stuff'});
    expect(queue.dequeue()).toEqual({priority: 2, value: 'blah'});
    expect(queue.dequeue()).toEqual({priority: 4, value: 'thing'});
    console.log(`starting last one now`);
    expect(queue.dequeue()).toEqual({priority: 5, value: 'moreThings'});
  });
  test(`isEmpty method should return true if there are no elements in the queue`, () => {
    let queue = new priorityQueue();
    expect(queue.isEmpty()).toEqual(true);
  });
  test(`isEmpty method should return false if there are elements in the queue`, () => {
    let queue = new priorityQueue();
    queue.enqueue({priority: 4, value: 'thing'});
    expect(queue.isEmpty()).toEqual(false);
  });
  test(`peek method should return the first element in the queue without removing it`, () => {
    let queue = new priorityQueue();
    queue.enqueue({priority: 4, value: 'thing'});
    expect(queue.peek()).toEqual({priority: 4, value: 'thing'});
    expect(queue.isEmpty()).toEqual(false);
  });
});
