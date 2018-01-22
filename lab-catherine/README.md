# Code Fellows: Seattle 401 JavaScript - 401d19

## Lab 34: Priority Queues and 2D Arrays


### Author: 
Catherine Looper

### Motivation

This project contains a Priority Queue implemented with an ES6 class and a Min-Heap used internally for data storage. This project also includes a solution to the following problem:

```
* You’re given a 2D array of seats and people’s heights
* People’s heights are written either like "72 inches" or "5 feet 2 inches"
* You’re given one persons seat coordinate (row, col)
* Return how many people they are blocking (they are taller than people behind them)
* Index zero represents the front of the theater
* Access seats like seats[row][col]

```

### Build

#### Priority Queue

A priority queue is a data structure based on a min-heap. Priority queues accept objects that have priority values. The objects that have the highest priority, are stored in the top of the heap.This file has a class `PriorityQueue` and a class `MinHeap`.
The `enqueue` and `dequeue` methods have a Big O(n) for time complexity. The `peek` method has a time and space Big O(1).  

#### 2D Array

This file contains a helper method `_convertFeetToInches` that takes an argument of height and converts the result into inches to be used in the method `numberOfBlockedPeople`. The `numberOfBlockedPeople` method accepts three arguments: theater, row, and column. The method takes an array of heights and a seat coordinate in the theater, and returns the number of people who are being blocked by the height of that person. This method has a Big O(n) in both time and space.

### Limitations

To use this app - it is assumed that the user has familiarity with the tech and frameworks listed below.

### Code Style

Standard JavaScript with ES6.

### Tech/Framework Used

* eslint
* jest

### How to use?

* Step 1. Fork and Clone the Repository.
* Step 2. `npm install`
* Step 3. To test this application: `npm run test`


### Credits

* Code Fellows

### License

MIT © Catherine Looper

