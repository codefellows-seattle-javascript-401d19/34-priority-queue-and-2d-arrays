# Lab 34 Priority Queue and 2D Arrays

## Overview

This is a model of a Priority Queue and 2D Arrays.
***
## Getting Started

Basic understanding of git and npm is assumed. Clone down the repo and navigate to the directory. Install by running `npm i`. If you wish to use these modules, simply copy the desired module's file into your project and require it into the script in which you would like to use it. For example:

```const PriorityQueue = require('./lib/priority-queue')```

To run tests to check functionality, do an

```npm run test```

A new Priority Queue can be instatiated with `new PriorityQueue(`<`...options`>`)`. 
***
## Modules

The modules being exported are priority-queue and 2d-array.
***
### PriorityQueue:

info

#### PriorityQueue.enqueue:

method descriptions


***
### 2dArray:

info

#### 2dArray.method:

method descriptions

***
## Code Examples:

```javascript
const PriorityQueue = require('./lib/priority-queue');

const queue = new PriorityQueue();

queue.enqueue({priority: 5, value: 'a'});
queue.enqueue({priority: 8, value: 'b'});
queue.enqueue({priority: 3, value: 'c'});

queue.peek(); // 'c'
queue.dequeue(); // 'c'
queue.peek(); // 'a'
```
***
## Technology/Credits

By Andrew Bloom. Using jest to test functionality.