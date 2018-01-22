# Lab 30 Heaps and Sorting

## Author: Nicholas Carignan

## Node Package dependencies
1. "eslint": "^4.12.1",
1. "jest": "^21.2.1"

## Setup
  clone the repo by typing in

  `git clone https://github.com/ncarignan/30-heaps-and-basic-sorting.git`

  then install the packages with

   `npm install`

  then the app is ready to be tested by running

   `npm run test`

## models
### insertion-sort
insertion sort exports a function that can be used to sort an array. The function takes in an array and then calls an insertion sort method in place on the array that sorts the values. The function expects the input to be an array or else it will throw an error. This function has an O(n) = nlog(n) where n is the length of the array. At its worst performance it has an O(n) = n^2 if it has to resort the entire array every time which is highly improbable.

### max-heap
max-heap exports a model of a max heap that creates a new MaxHeap with an empty data set when its constructor is called. MaxHeas contain an insert method that inserts a new value in the proper position. It expects a number as its input and will throw an error if it is not a number. It also contains an extractMaximum method that will take the maximum value out of the heap and restructure the heap properly. It also has a peek method that returns the maximum value of the heap.
