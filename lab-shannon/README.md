## Purpose
This program implements a priority queue built on a min heap data structure and provides a function to find how many people's views are blocked by a tall person in a theatre.

## Set Up
1. clone the repo into whatever directory you choose
2. 'npm i' (to install all dependencies)
4. run 'npm run test' to run all tests

## Methods
1. Priority Queue
  * enqueue(element): Takes an object as a single argument and adds it to the priority queue. The element object must have a priority property and a value property. If either of the properties are not included an error will occur. The value property can be of any type; the priority property must be a number.
  * dequeue: Removes the highest priority element from the queue and returns it in a FIFO order; takes no arguments.
  * peek: Returns the element with the highest priority in the queue without removing it or altering the queue; takes no arguments.
  * isEmpty: Returns true if the queue is empty or false if there are elements in the queue; takes no arguments.
2. Movie Theatre
  * findBlocking(theatre, row, seat): Takes three arguments and finds how many people's views are blocked in the theatre by the person in the specified row and seat. The theatre must be a 2D array or an error will occur. The row and seat provided must be positive integers or an error will occur.
  * convertHeightToInches(person): Takes a string of a person's height as the single argument, converts it to height in inches, and returns it as a number. The string must be in the form "5 feet 4 inches" or "64 inches".

## Technologies Used
  ES6
  jest

## License
MIT

## Credits
* Vinicio Vladimir Sanchez Trejo & the Code Fellows curriculum provided the base .babelrc, .eslintrc, .eslintignore, and .gitignore files.
