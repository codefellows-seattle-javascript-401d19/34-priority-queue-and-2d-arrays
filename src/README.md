![cf](https://i.imgur.com/7v5ASc8.png) 34: Priority Queues and 2D Arrays
======

## Submission Instructions
  * Work in a fork of this repository
  * Work in a branch on your fork
  * Write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-susan`
  * Submit a pull request to this repository
  * Submit a link to your pull request on canvas
  * Submit a question, observation, and how long you spent on canvas  


# Resources
* [Priority Queues](https://en.wikipedia.org/wiki/Priority_queue)
* [Multi-dimensional Javascript Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections)


  
## Requirements  
### Configuration  
Your lab directory must include  
* **README.md** -- with a documention about your lab
* **.eslintrc.json** -- with the class .eslintrc.json file
* **.gitignore** -- with a robust gitignore
* **.eslintignore** -- with the class .eslintignore
* **package.json** -- with all dependencies and dev-dependencies 
* **src/** -- containing the front end code

## Feature Tasks 
### Priority Queue
From Wikipedia:


>In computer science, a priority queue is an abstract data type which is like a regular queue or stack data structure, but where additionally each element has a "priority" associated with it. In a priority queue, an element with high priority is served before an element with low priority. If two elements have the same priority, they are served according to their order in the queue.


* Implement a priority queue ES6 class using a Binary Heap internally for data storage. Use a Min-Heap.

  * Implement a `enqueue` method with an arity of one. 
    * The enqueue method takes javascript object with a `priority` key and a `value` key and adds it to the internal min-heap.
  * Implement a `dequeue` method with an arity of zero.
    * The enqueue method returns (and removes) the value associated with the smaller priority inside the priority queue.

#### Usage example
![priority queue](https://raw.githubusercontent.com/codefellows-seattle-javascript-401d19/34-priority-queue-and-2d-arrays/master/dequeue.png)
#### Stretch Goals
* Add the `peek` and `isEmpty` member functions.
  * The `peek` function returns the root of the internal heap without removing it. 

### Solve the following problem:
- You’re given a 2D array of seats and people’s heights
- People’s heights are written either like `"72 inches"` or `"5 feet 2 inches"`
- You’re given one persons seat coordinate (row, col)
- Return how many people they are blocking (they are taller than people behind them)
- Index zero represents the front of the theater
- Access seats like seats[row][col]

#### Dealing with empty seats

You may choose to assume any of the following about empty seats in the theater:

- Assume the theater is always full
- Or, assume empty seats are filled with `null`
- Or, assume empty seats are filled with `undefined`
- Or, assume empty seats are filled with the string `"empty"`

#### Sample Input
```javascript
let SEATS = [
  [ '1 feet 11 inches', '4 feet 8 inches', '2 feet 10 inches', '3 feet 5 inches', '2 inches', '3 inches', '11 inches' ],
  [ '5 feet 10 inches', '9 inches', '3 feet 5 inches', '3 inches', '9 inches', '1 feet 0 inches', '0 inches' ],
  [ '0 feet 5 inches', '5 feet 9 inches', '6 feet 1 inches', '1 inches', '1 inches', '5 feet 3 inches', '3 feet 5 inches' ],
  [ '1 inches', '0 feet 11 inches', '2 feet 5 inches', '5 feet 6 inches', '6 feet 6 inches', '6 inches', '5 feet 11 inches' ],
  [ '10 inches', '11 inches', '3 inches', '5 feet 2 inches', '9 inches', '4 inches', '1 feet 10 inches' ],
  [ '2 feet 10 inches', '11 inches', '7 inches', '2 feet 9 inches', '0 inches', '9 inches', '0 feet 2 inches' ],
  [ '3 inches', '1 inches', '5 feet 5 inches', '6 inches', '2 inches', '5 feet 7 inches', '8 inches' ]
]
```

##  Documentation  
Write a description of the project in your README.md
