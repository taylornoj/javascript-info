//// NUMBERS ////


// Rounding
// there are multiple built-in functions for rounding:

Math.floor
// Rounds down - 3.1 becomes 3 and -1.1 becomes -2

Math.ceil
// Rounds up - 3.1 becomes 4 and -1.1 becomes -1

Math.round
// Rounds to nearest integer - 3.1 becomes 3, 3.6 becomes 4, 3.5 becomes 4

Math.trunc
// Removes anything after decimal point without rounding - 3.1 becomes 3


// What if we want to round the number to the n-th digit after decimal?
// for example, we have 1.2345 and want to round to 2 digits, getting 1.23

/*
Option #1 - Multiply and divide:
  to round the number to 2nd digit we can multiple number be 100,
  call the rounding function then divide it back:
*/
let num = 1.23456;

alert( Math.round(num * 100) / 100 ); // 1.23456 -> 123.456 -> 123 -> 1.23


/*
Option #2 - toFixed(n) rounds the number to n digits after the point and
returns a string representation of the result
*/
let num = 12.34;
alert( num.toFixed(1) ); // "12.3"
//notice that the result of toFixed is a string - we can conver it to a number
// by using +num.toFixed(1)

