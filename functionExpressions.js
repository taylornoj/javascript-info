// Previously, to create a function we used the function declaration syntax:
function sayHi() {
  alert( "Hello" );
}

// there is another syntax for creating a function that is called
// a function expression, which allows us to create a new function in the
// middle of any expression
let sayHi = function() {
  alert( "Hello" );
};
// the variable, sayHi, is getting a value...the new function

/*
A function is a value
Both examples above store a function in the sayHi variable
*/

// because it's still a value, we can work with it like any other kinds of values
// we can copy a function to another variable:

function sayHi() {   // (1) create
  alert( "Hello" );
}

let func = sayHi;    // (2) copy

func(); // Hello     // (3) run the copy (it works)!
sayHi(); // Hello    //     this still works too (why wouldn't it)

/* (1) the Function Declaration  - it creates the function and puts it into the variable
                                  named sayHi
   (2) Copies it into the variable func. There are no parentheses after sayHi, if there
   were, then func = sayHi() would write the result of the call sayHi() into func, not the 
   function sayHi itself - as is what happens here:
*/
function sayHi() {
  alert( "Hello" );
}

alert( sayHi ); // shows the function code
// and (3) now the function can be called as both sayHi() and func()

// This leads us to...




//// CALLBACK FUNCTIONS ////
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

function showOk() {
  alert( "You agreed." );
}

function showCancel() {
  alert( "You canceled the execution." );
}

// usage: functions showOk, showCancel are passed as arguments to ask
ask("Do you agree?", showOk, showCancel);

/*
Given the parameters:
question - text of the question
yes - function to run if the answer is "Yes"
no - function to run if the answer is "No"
*/

// the arguments showOk and showCancel of ask, are callback functions
// we pass a function and expect it to be "called back" later if necessary

// we can use function expressions to write the same function, only much shorter:
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);

// here, functions are declared right inside the ask(...) call
// they have no name, and so are called anonymous