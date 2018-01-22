# Priority Queue and 2D Arrays

## Exported Modules

### Max-Heap: 

#### insert() 
    -Arity: 1 - value, number only
    -If Valid input, pushes value to end and bubles it up to the correct level/index.
    -If Invalid input, a type error is thrown.
  #
#### extractMaximum() 
    -Arity: 0 - no parameter
    -If Valid called on a proper max-heap, returns the maximum value and removes it from the array, rearranges the array to be a proper max-heap after extraction.
    -If no heap is given, returns null as the array has a length of zero.
 # 
#### peek() 
    -Arity: 0 - no parameter
    -If Valid called on a proper max-heap, returns the maximum value.
    -If no heap is given, returns null as the array has a length of zero.
#
### Selection Sort: 
    -Arity: 1 - array , object only
    -If Valid input, sorts the array with a selection sort method
    -If Invalid input, a type error is thrown.
#
###  Insertion Sort: 
    -Arity: 1 - array , object only
    -If Valid input, sorts the array with a insertion sort method
    -If Invalid input, a type error is thrown.
#
###  Bubble Sort: 
    -Arity: 1 - array , object only
    -If Valid input, sorts the array with a bubble sort method
    -If Invalid input, a type error is thrown.


## Code style

js-standard-style

## Tech/framework used
- Eslint
- Node
- jest


#### Built with

VScode


#### To Run Tests, run these commands in terminal from lab-seth folder

- npm run test

## License
#### MIT © Seth Donohue