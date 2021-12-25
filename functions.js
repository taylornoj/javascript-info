// FUNCTIONS


//// Function Declaration ////
function showMessage() {
  alert( 'Hello everyone!' );
}
/* function keyword goes first,
then the name of the function,
then a list of parameters between parentheses,
and the code of the function, the function body in between {}
*/
function showMessage() {
  alert( 'Hello everyone!' );
}

showMessage();
showMessage();
/* The call showMessage() executes the code of the function.
If we ever need to change the message or the way it's shown,
it's enough to modify the code in one place: the function
which outputs it
*/




//// Local Variables ////
// A variable declared inside a function is only visible inside that function

function showMessage() {
  let message = "Hello, I'm JavaScript!"; // local variable

  alert( message );
}

showMessage(); // Hello, I'm JavaScript!

alert( message ); // <-- Error! The variable is local to the function




//// Outer Variables ////
// a function can access an outer variable:
let userName = 'John';

function showMessage() {
  let message = 'Hello, ' + userName;
  alert(message);
}

showMessage(); // Hello, John


// the function can modify the outer variable:
let userName = 'John';

function showMessage() {
  userName = "Bob"; // (1) changed the outer variable

  let message = 'Hello, ' + userName;
  alert(message);
}

alert( userName ); // John before the function call

showMessage();

alert( userName ); // Bob, the value was modified by the function


// the outer variable is only used if there's no local one
// if a same named variable is declared (let userName = "Bob") inside
// the function, then it shadows the outer one.
let userName = 'John';

function showMessage() {
  let userName = "Bob"; // declare a local variable

  let message = 'Hello, ' + userName; // Bob
  alert(message);
}

// the function will create and use its own userName
showMessage();

alert( userName ); // John, unchanged, the function did not access the outer variable


/*
Variables declared outside of any function, such as the outer userName in 
the code above, as called global.
Global variables are visible from any function (unless shadowed by locals)
It's good practice to minimize the use of global variables
*/