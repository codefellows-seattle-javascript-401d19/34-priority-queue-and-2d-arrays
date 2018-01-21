const MinHeap = require('./min-heap');

const PriorityQueue1 = function() {
  const minHeap = new MinHeap();

  this.enqueue = item => {
    minHeap.insert(item);
  };

  this.dequeue = () => {
    return minHeap.extractMininum();
  };

  this.peek = () => {
    return minHeap.peek();
  };

  this.isEmpty = () => {
    return minHeap.isEmpty();
  };
};

const PriorityQueue2 = function() {
  const items = [];

  this.enqueue = item => {
    for (let i = 0; i < items.length; i++) {
      if (item.priority < items[i]) {
        items.splice(i, 0, item);
        return;
      }
    }

    items.push(item);
  };

  this.dequeue = () => {
    return items.shift();
  };

  this.peek = () => {
    return items[0];
  };

  this.isEmpty = () => {
    return items.length === 0;
  };
};
