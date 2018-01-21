![cf](https://i.imgur.com/7v5ASc8.png) Lab 34: Priority Queue and theater whiteboard problem
======

* Purpose of this lab is to practice implementation of priority queue using min heap internally for data storage.
* Second part of the lab is whiteboard challange that involves looping through 2D array as well as parsing && comparing data passed in the array. Goal of the assignment is to return how many people behind given person's seat coordinates are blocked by the person. 

## Code Style
* Javascript ES6 and Jest for testing


## Tech / framework used

* [npm package jest](http://facebook.github.io/jest/) used for TDD
* [npm package eslint](https://www.npmjs.com/package/eslint) used as a JS linter


## Installation and How To Use

  * Fork || clone this repo to you computer.

  * Run `npm install`

  * To run tests run `npm test` command.


## Priority queue methods

`enqueue`
* The enqueue method takes javascript object with a `priority` key and a `value` key and adds it to the internal min-heap.

`dequeue`
* The dequeue method returns (and removes) the value associated with the smaller priority inside the priority queue.


## Licence
MIT © Pedja Josifovic
