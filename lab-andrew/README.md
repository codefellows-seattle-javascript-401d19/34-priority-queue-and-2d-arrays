# Lab 34 Priority Queue and 2D Arrays

## Overview

This is a model of a priority queue and the solution to a simple 2D array problem.
***
## Getting Started

Basic understanding of git and npm is assumed. Clone down the repo and navigate to the directory. Install by running `npm i`. If you wish to use these modules, simply copy the desired module's file into your project and require it into the script in which you would like to use it. For example:

```const PriorityQueue = require('./lib/priority-queue')```

To run tests to check functionality, do an

```npm run test```

A new Priority Queue can be instatiated with `new PriorityQueue(`<`...options`>`)`. 
***
## Modules

The modules being exported are priority-queue and the 2d-array blockedPeople method.
***
### PriorityQueue:

The priority queue is a data structure which is based on a min-heap. This structure takes objects with a priority and a value. The highest priority objects will be stored in the top of the heap, and if there are multiple objects with the same priority, they will be returned in the order they were placed in the priority queue.

#### PriorityQueue.enqueue:

The enqueue method takes an object with a priority property and a value property. Each input is assigned an order number property which is taken from the class (the class's order number is incremented with each enqueue call). This will push that object into a queue array and then push that to the end of the internal data array. Then based on the priority property, that will bubble up to the appropriate place in the heap. If during bubbling up, any nodes with the same priority are found, the arrays in those nodes will be merged according to the order values assigned at the beginning of the enqueue method. This is done in order to preserve a FIFO ordering for objects with the same priority. The worst case time complexity is O(n); potentially a priority queue could contain all the same priority, and that array would need to be looped through in its entirety. Space complexity should be constant. However, the average complexity should be O(log(n)), assuming most objects in the priority queue have different priority numbers. In the future, this data structure could be altered to use a min heap to internally store objects with the same priority in order to improve the enqueue and dequeue methods to have a better time complexity.

#### PriorityQueue.dequeue:

The dequeue method will return the next value in the queue, simultaneously removing it. If that empties the queue inside the top node, that node is replaced with the last node in the heap, which is then bubbled down. The bubbling down will merge any nodes that have the same priority. The time and space complexity will be comparable to the enqueue method here.

#### PriorityQueue.peek:

This method checks the value of the internal data array, and will return the value of the next item in line to be dequeued. It will return null if the internal array is empty. This operation has both a time and space complexity of O(1).

#### PriorityQueue.isEmpty:

This method checks to see if the queue has any objects stored in its internal array. If it doesn't, it will return true, otherwise it will return false. This operation has both a time and space complexity of O(1).

***
### 2dArray:

This module attempts to solve a simple theater problem: there is a full theater; given the height information of each movie-goer in the form of a 2d array and the coordinates of a given seat, find how many people behind that person that are being blocked. i.e. how many people behind that person are shorter than them?

#### 2dArray.peopleBlocked:

This method has an arity of three and takes an input of the theater seats, and the row and column of a given seat. The theater is expected to be an array of arrays, with each index of the internal array containing a string of the movie-goer's height as a string in the form of 'x inches' or 'x feet y inches'. The seat coordinates are both expected to be numbers. The peopleBlocked method uses a private heightParse method which takes the string and turns it into a height in inches as a number. This method loops through each of the arrays, looking at the seats in a given column, and creates an array of numbers based on the heights in each of those positions. Then this new array is looped through starting at the row given. For each number that is smaller than the height of the coordinate seat, a counter is incremented. Then that counter is returned. In the worst case, this method has a runtime complexity of O(n), as it must loop through an entire array which is potentially the size of the entire theater (if there is only one column of seats in the theater). The space complexity will be O(n) also, as a copy is made of the array.

***
## Code Examples:

```javascript
const PriorityQueue = require('./lib/priority-queue');

const queue = new PriorityQueue();

queue.enqueue({priority: 5, value: 'a'});
queue.enqueue({priority: 5, value: 'b'});
queue.enqueue({priority: 3, value: 'c'});

queue.peek(); // 'c'
queue.dequeue(); // 'c'
queue.isEmpty(); // false
queue.dequeue(); // 'a'
```
***
## Technology/Credits

By Andrew Bloom. Using jest to test functionality.