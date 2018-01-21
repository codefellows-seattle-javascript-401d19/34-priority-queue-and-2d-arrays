const Queue = function() {
  const items = [];

  this.enqueue = item => {
    items.push(item);
  };

  this.dequeue = () => {
    return items.shift();
  };

  this.front = () => {
    return items[0];
  };

  this.size = () => {
    return items.length;
  };

  this.toString = () => {
    return items.toString();
  };

  this.print = () => {
    console.log(this.toString());
  };
};

module.exports = Queue;
