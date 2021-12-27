//// PARSEINT & PARSEFLOAT ////

/* parseInt and parseFloat 'read' a number from a string until they can't. In case
 of an error, the gathered number is returned.  
 The function parseInt returns an integer,
 whilst parseFloat will return a floating-point number
 */

alert( parseInt('100px') ); // 100
alert( parseFloat('12.5em') ); // 12.5

alert( parseInt('12.3') ); // 12, only the integer part is returned
alert( parseFloat('12.3.4') ); // 12.3, the second point stops the reading

// there are situations when parseInt/parseFloat will return NaN
// this happens when no digits could be read:
alert( parseInt('a123') ); // NaN, the first symbol stops the process


// parseInt(str, radix)
/*
parseInt() function has an optional second parameter
It specifies the base of the numeral system, so parseInt can also parse strings
of hex numbers, binary numbers and so on
*/
alert( parseInt('0xff', 16) ); // 255
alert( parseInt('ff', 16) ); // 255, without 0x also works

alert( parseInt('2n9c', 36) ); // 123456



//// Math Functions ////

// JS has a built in Math object which contains a small library of mathematical
// functions and constants

Math.random()
// returns a random number from 0 to 1 (not including 1)
alert( Math.random() ); // 0.1234567894322
alert( Math.random() ); // 0.5435252343232
alert( Math.random() ); // ... (any random numbers)



Math.max & Math.min
// returns the greatest/smallest from the arbitrary number of arguments
alert( Math.max(3, 5, -10, 0, 1) ); // 5
alert( Math.min(1, 2) ); // 1



Math.pow(n, power)
// returns n raised to the given power
alert( Math.pow(2, 10) ); // 2 in power 10 = 1024