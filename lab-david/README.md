# Code Fellows 401
## Priority Queue + 2D Arrays in Movie Theatres


## Description
This is a priority queue and a solver to figure out how many people are obstructed in a movie theatre based on a set seating assignment in a 2D array. 

## Tech Used
Javascript, Jest for Testing

## Components:
- NoteForm : this allows a user to complete a note
- NoteList : this tracks all the notes made
- NoteItem : this is for each item
- App : this controls the application
- Dashboard : This controls the routing for the routes.
- Landing : this is the main landing page.
- Modal : this is a pop up that initiates when a user clicks to edit a note. 

## Movie Theatre
### Assume the theatre is full always.
### access seats via `[row][col]`
### Returns how many people are behind in seat that was inputted into the function

### Theatre layout - 2D Array
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

## Tests
### Dashboard
A test runs to make sure the dashboard has initial state.

### Note Form
A test runs to make sure the note form has initial state. 

## Dependencies
- 

- devDependencies
  - 
  - jest: ^22.0.5

## License
MIT License