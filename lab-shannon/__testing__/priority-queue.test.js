const priorityQueue = require('../model/priority-queue');

describe(`Priority Queue`, () => {
  // test(`priority queue should add elements from lowest to highest number for priority property`, () => {
  //   let queue = new priorityQueue();
  //   queue.enqueue({priority: 4, value: 'thing'});
  //   queue.enqueue({priority: 1, value: 'stuff'});
  //   queue.enqueue({priority: 5, value: 'moreThings'});
  //   queue.enqueue({priority: 2, value: 'blah'});
  //   // expect(queue._queue._data[2]).toEqual({priority: 4, value: 'thing'});
  // });
  test(`priority queue isEmpty should return true if there are no elements in the queue`, () => {
    let queue = new priorityQueue();
    expect(queue.isEmpty()).toEqual(true);
  });
  test(`priority queue isEmpty should return false if there are elements in the queue`, () => {
    let queue = new priorityQueue();
    queue.enqueue({priority: 4, value: 'thing'});
    expect(queue.isEmpty()).toEqual(false);
  });
  test(`priority queue peek should return the first element in the queue without removing it`, () => {
    let queue = new priorityQueue();
    queue.enqueue({priority: 4, value: 'thing'});
    expect(queue.peek()).toEqual({priority: 4, value: 'thing'});
    expect(queue.isEmpty()).toEqual(false);
  });
});
