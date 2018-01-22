# Lab 34 Heaps and height problems

## Author: Nicholas Carignan

## Node Package dependencies
1. "eslint": "^4.12.1",
1. "jest": "^21.2.1"

## Setup
  clone the repo by typing in

  `git clone https://github.com/ncarignan/34-priority-queue-and-2d-arrays.git`

  then install the packages with

   `npm install`

  then the app is ready to be tested by running

   `npm run test`

## models
### blocking
blocking exports a function that finds how many people you are blocking in a theater represented by a 2d array of height values stored as strings. If a row and column are passed in it checks against the heights of the people behind you to see who you are blocking. The function utilizes a helper function that returns the parsed height of an individual in inches.

### min-heap
min-heap exports a model of a min heap that creates a new MinHeap with an empty data set when its constructor is called. MinHeas contain an insert method that inserts a new value in the proper position. It expects a number as its input and will throw an error if it is not a number. It also contains an extractMinimum method that will take the minimum value out of the heap and restructure the heap properly. It also has a peek method that returns the minimum value of the heap.

### priority-heap
priority heap exports a model that creates a new priority heap. It utilizes min heap to store the values in priority order and when it dequeues a value it returns the value.
