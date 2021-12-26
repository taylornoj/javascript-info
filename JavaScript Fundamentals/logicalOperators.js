// !(NOT)

/* The operator accepts a single argument and does the following:
1. converts the operand to boolean type
2. returns the inverse value
*/

alert( !true ); // false
alert( !0 ); // true

// What is the code below going to output?
alert( null || 2 || undefined );
  // 2



// What's the result of OR'ed alerts?
alert( alert(1) || 2 || alert(3) );
  // alert(1)