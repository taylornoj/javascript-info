//// VARIABLE SCOPE, CLOSURE ////

// a function can access variables outside of it ('outer' variables)
// but what happens if outer variables change since a function is created?

// CODE BLOCKS
// if a variable is declared inside a code block {...}, it's only visible inside that block:
{
  // do some job with local variables that should not be seen outside
  let message = "Hello"; // only visible in this block
  alert(message); // Hello
}
alert(message); // Error: message is not defined

// we can use the above to isolate a piece of code that does its own task

// for if, for, while, etc, variables declared in {...} are also only visible inside
if (true) {
  let phrase = "Hello!";
  alert(phrase); // Hello!
}
alert(phrase); // Error, no such variable!

// same thing happens with for and while loops:
for (let i = 0; i < 3; i++) {
  // the variable i is only visible inside this for
  alert(i); // 0, then 1, then 2
}
alert(i); // Error, no such variable

// 'let i' looks like its outside of {...} but the 'for' construct is special, the variable,
// declared insdie of it, is considered a part of the block

//// CLOSURE
/* a closure is a function that remembers its outer variables
and can access them

they automatically remember where they were created using a hidden
[[Environment]] property & then their code can access outer variables



** Lexical Environments
When a function runs, at the beginning of the call, a new Lexical Environment
is created automatically to store local variables and parameters of the call

There are inner and outer Lexical Environments:
*/
let phrase = "Hello";
function say(name) {
  alert(`${phrase}, ${name}`);
}
say("John"); // Hello John
/*
The inner Lexical Environment corresponds to the current execution 
of say. It has a single property: name, the function argument. 
We called say("John"), so the value of the name is "John"

The outer Lexical Environment is the global Lexical Environment. 
It has the phrase variable and the function itself.

Usually a Lexical Environment is removed from memory with all
the variables after the function call finishes. Thats because there are 
no references to it
HOWEVER if there is a nested function that is still reachable after the end
of a function, then it has [[Environment]] property that references
the lexical environment

Example:
*/
function f() {
  let value = 123;

  return function() {
    alert(value);
  }
}
let g = f(); // g.[[Environment]] stores a reference to the Lexical Environment
// of the corresponding f() call

