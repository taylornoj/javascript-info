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
