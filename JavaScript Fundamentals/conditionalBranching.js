// Ternary operator - because the operator has three operands
// Syntax:
     let result = condition ? value1 : value2;

// condition is evaluated and if truthy, then value1 is returned
// and otherwise, value2 is returned

/* The purpose of the ? operator is to return one value or another
 depending on its condition. 
 Use if when you need to execute different branches of code. */


// Will the following alert be shown:

 if ("0") {
   alert( 'Hello' );
 }

// Yes - any string except an empty one ("0" is not empty) becomes
// in the logical context.


// Rewrite 'if' into '?':

let result;
if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}

// rewrite:

let result = (a + b < 4) ? 'Below' : 'Over';