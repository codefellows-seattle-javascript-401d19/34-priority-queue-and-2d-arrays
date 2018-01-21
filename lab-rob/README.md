# Code Fellows: Code 401d19: Full-Stack JavaScript

## Lab 30: Max Heap & Basic Sorting
### 1/14/18

The purpose of this lab is to implement a max-heap and simple sorting algorithms.

## Tech/frameworks/packages

- node 
- npm
- node packages
  - eslint
  - jest

## How to use?

Clone this repo, `cd` into `lab-rob`, run `npm i` to install dependencies. 

If all you want to do is use this library, copy `lib/max-heap.js` or `lib/array-sorts.js` into your project and require / import it into your project.

## Test

After installing dependencies, run `npm test` to run tests. Tests verify that the heap methods work and that the array sorts properly sort the arrays

## Modules && Methods

### `max-heap.js`

#### Constructor

Create a new empty heap through instantiation.

```
let heap = new MaxHeap()
```

#### insert(value)

<value> must be a number. Adds the value to the last spot in the heap. Bubbles the number as far up as it needs to go.

```
heap.insert(5);
heap.insert(3);
heap.insert(7);

    7
   / \
  3   5
```

#### extractMinimum()

Takes no arguments, removes and returns the maximum value from the heap. Moves the last value in the heap to the top and bubbles it down as needed.

```
heap.extractMinimum();
// returns 7
  5
 /
7
```

### `array-sorts.js`

#### bubbleSort(array)

Takes an array of numbers as an argument. There is no error checking, so if you feed it bad data it will crash your app. Performs a bubble sort on the array, mutating the original array and returning it.

Average performance is O(n^2).

#### insertionSort(array)

Takes an array of numbers as an argument. There is no error checking, so if you feed it bad data it will crash your app. Performs an insertion sort on the array, mutating the original array and returning it.

Average performance is O(n^2).

#### selectionSort(array)

Takes an array of numbers as an argument. There is no error checking, so if you feed it bad data it will crash your app. Performs a selection sort on the array, mutating the original array and returning it.

Average performance is O(n^2).

## Contribute

You can totally contribute to this project if you want. Fork the repo, make some cool changes and then submit a PR.

## License

MIT. Use it up!