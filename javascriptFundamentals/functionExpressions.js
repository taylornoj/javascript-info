// Previously, to create a function we used the function DECLARATION syntax:
function sayHi() {
  alert( "Hello" );
}

// there is another syntax for creating a function that is called
// a function EXPRESSION, which allows us to create a new function in the
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




//// FUNCTION EXPRESSION VS FUNCTION DECLARATION ////
/* - syntax is different
   - difference in when a function is created
      - function expression is created when the execution reaches it and 
      is usable only from that moment on
      - a function declaration can be called earlier than it is defined (because
        they are processed before the code block is executed, they are visible 
        everywhere in the block)
      - however a function declaration is only visible inside the code block 
      in which it resides
*/

let age = 16; // take 16 as an example

if (age < 18) {
  welcome();               // \   (runs)
                           //  |
  function welcome() {     //  |
    alert("Hello!");       //  |  Function Declaration is available
  }                        //  |  everywhere in the block where it's declared
                           //  |
  welcome();               // /   (runs)

} else {

  function welcome() {
    alert("Greetings!");
  }
}

// Here we're out of curly braces,
// so we can not see Function Declarations made inside of them.

welcome(); // Error: welcome is not defined

// what can we do to make welcome visible outside of if?
// use a function expression and assign welcome to the variable that is 
// declared outside of if and has the proper visibility:
let age = prompt("What is your age?", 18);

let welcome;

if (age < 18) {

  welcome = function() {
    alert("Hello!");
  };

} else {

  welcome = function() {
    alert("Greetings!");
  };

}

welcome(); // ok now