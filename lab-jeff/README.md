# Code 401 lab 34

This lab was to build a priority queue and solve a problem where you are given a 2D array which contains heights given as strings of either "XX inches" or "XX feet XX inches". When given a position in the 2D array, return the number of people behind that location that are blocked.

## Code Style

Standard Javascript with ES6.

## Getting Started

Copy the two .js files.

To use the priority queue, put `const PriorityQueue = require('../priority-queue');` into your javacript file. You will then have access to the methods by using the constructor with the 'new' callout. For example, `let priorityQueue = new PriorityQueue()` creates a new instance of a max heap. To append a value to this heap with the value 2 and priority 1, `priorityQueue.enqueue({priority: 1, value: 2})`.

To use the theater function, put `const tallCheck = require('../theater').tallCheck;` into your javascript file. Create an array of heights in a 2D array. An example is in the test file. Then pass in the seats array, a row, and a column.

To run the tests, also copy the test folder. You will also need to install jest via npm at the command line by typing `npm install -D jest`. Then, you can type `npm run test` to run the tests.

## PriorityQueue methods

### enqueue({priority: , value: })

This method has an arity of 1. It expects an object which contains the keys 'priority' and 'value'. The priority must be a number. The value cannot be undefined.

### dequeue()

This method has an arity of 0. This method returns the value which has the lowest priority number (which is always at index [0]) and rearranges the priority queue such that the value at index [0] is again the value with the lowest priority number. If the priority queue contains no values, null is returned.

## Theater function

### tallCheck(seats, row, col)

This function has an arity of 3. Seats is a 2d array which contains heights given as either "XX inches" or "XX feet XX inches". An internal function parses those to an integer height in inches. The function returns the number of seats behind the seat position that is passed in that are smaller than the seat position passed in.
