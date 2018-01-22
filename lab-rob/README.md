# Code Fellows: Code 401d19: Full-Stack JavaScript

## Lab 34: Priority Queue and 2D Arrays
### 1/21/18

The purpose of this lab is to implement a priority queue and to solve a problem involving a 2D array.

## Tech/frameworks/packages

- node 
- npm
- node packages
  - jest

## How to use?

Clone this repo, `cd` into `lab-rob`, run `npm i` to install dependencies. 

To use this library in a project, copy `lib/priority-queue.js` or `lib/movie.js` into your project and require / import it into your project.

## Test

After installing dependencies, run `npm test` to run tests. Tests verify that the priority queue functions properly and that the movie function returns the number of unhappy movie goers.

## Modules && Methods

### `priority-queue.js`

*NOTE:* This priority queue will always dequeue a value with the highest priority, but that doesn't necessarily mean it will dequeue the first enqueued item with that priority, in the case where there are multiple items with the same priority. If you need that functionality, use `priority-queue-fifo.js`.

#### Constructor

Create a new empty priority queue through instantiation.

```
let queue = new PriorityQueue()
```

#### enqueue(priorityObj)

<priorityObj> must be an object with the properties `priority: <number>` and `value: <anything>`. Adds the object to the last spot in the heap. Bubbles the object as far up as it needs to go. Throws an error if `priority` is not a number, or if either property is missing.

```
heap.insert({priority: 5, value: 'first 5'});
heap.insert({priority: 3, value: 'first 3'});
heap.insert({priority: 7, value: 'first 7'});

    3: 'first 3'
   /            \
  5: 'first 5'   7: 'first 7'
```

#### dequeue()

Takes no arguments, removes the priority object with the highest priority (lowest number) and returns the corresponding value from the heap. Moves the last object in the heap to the top and bubbles it down as needed. Returns null if the queue is empty.

```
heap.dequeue();
// returns 'first 3'
  5: 'first 5'
 /
7: 'first 7'
```

#### peek()

Takes no arguments, returns the value of the highest priority object. Returns null if the queue is empty.

```
heap.peek();
// returns 'first 5'
```

#### isEmpty()

Takes no arguments, returns true if the queue is empty, false otherwise.

```
heap.isEmpty();
// returns false
```

### `priority-queue-fifo.js`

This module has all of the same methods as `priority-queue.js`, except this class will maintain the order of duplicate priorities. If item A with priority X is added before item B with priority X, item A will always be dequeued before item B. 

In this class, each priority value that is added gets a node, and if values with the same priority are added they are pushed into that node's values array, ensuring that values with a common priority are dequeued in a FIFO-esque manner.

This implementation does not increase the worst case time complexity of any operation, and in many instances actually makes the operations' best cases constant time instead of logarithmic time.


### `movie.js`

#### (seats, row, col) => {...}
Exports a single function with an arity of 3. Takes in a seats array that should be 2-dimensional, and a row and column corresponding the the seats array. An error is thrown for the following reasons:

1. seats array is empty
2. row/col not in seat array
3. column is empty for any row
4. inconsistent number of columns in each row

Arrays should contain heights of movie goers in the format 'XXX inches' or 'XXX feet YYY inches'. If any height data is not in this format an error is thrown.

Returns the number of people who are strictly shorter than the person at (row, col) and are sitting directly behind them.


## Contribute

You can totally contribute to this project if you want. Fork the repo, make some cool changes and then submit a PR.

## License

MIT. Use it up!