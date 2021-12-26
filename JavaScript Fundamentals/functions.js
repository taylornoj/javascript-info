// FUNCTIONS


//// FUNCTION DECLARATION ////
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




//// LOCAL VARIABLES ////
// A variable declared inside a function is only visible inside that function

function showMessage() {
  let message = "Hello, I'm JavaScript!"; // local variable

  alert( message );
}

showMessage(); // Hello, I'm JavaScript!

alert( message ); // <-- Error! The variable is local to the function




//// OUTER VARIABLES ////
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




//// PARAMETERS ////
function showMessage(from, text) { // parameters: from, text
  alert(from + ': ' + text);
}

showMessage('Ann', 'Hello!'); // Ann: Hello! 
showMessage('Ann', "What's up?"); // Ann: What's up? 

/*
When the function is called in lines 106 & 107, the given values
are copied to local variables form and text.
The function then uses them
*/

// We have another example:
function showMessage(from, text) {

  from = '*' + from + '*'; // make "from" look nicer

  alert( from + ': ' + text );
}

let from = "Ann";

showMessage(from, "Hello"); // *Ann*: Hello

// the value of "from" is the same, the function modified a local copy
alert( from ); // Ann

/*
we have a variable from and pass it to the function.
The function changes from, but the change is not seen outside, because a
function always gets a copy of the value
*/




//// PARAMETERS VS. ARGUMENTS ////
/*
When a value is passed as a function parameter, it is also called an argument
- a parameter is the variable listed inside the parentheses in the function declaration
- an argument is the value that is passed to the function when it is called
*/

// We declare functions listing their parameters, then call them passing arguments

// In the example above, the function showMessage is declared with two parameteres,
// then called with two arguments: from and "Hello"





//// SUMMARY ////
/*
- values passed to a function as parameters are copied to its local variables
- a function mat access outer variables - but it works only from inside out, the code
outside of the function doesn't see it's local variables
- a function can return a value - if it doesn't then it's result is undefined


Function naming:
- a name should clearly describe what the function does
- a function is an action, so function names are usually verbal
*/




//// FUNCTION TASKS ////

// rewrite the following function without if, instead replacing it with ? and then ||
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}

// ternary operator:
function checkAge(age) {
  return (age > 18) ? true : confirm('Did parents allow you?');
}

// OR operator:
function checkAge(age) {
  return (age > 18) || confirm('Did parents allow you?');
}



// write a function min(a, b) which returns the least of the two numbers a and b
function min(a, b) {
  if (a > b) {
    return b;
  } else {
    return a;
  }
}

// * using ternary operator:
function min(a, b) {
  return (a > b) ? b : a;
}



// write a function pow(x, n) that returns x in power n
// aka - multiplies x by itself n times and returns the result
function pow(x, n) {
  return (x ** n);
}