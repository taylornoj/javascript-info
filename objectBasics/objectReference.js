//// comparison by reference:

// two objects are equal only if they are the same object
// for example, a and b reference the same object, thus they are equal:
let a = {};
let b = a; // copy the reference

alert( a == b ); // true, both variables reference the same object
alert( a === b ); // true

// and here are two independent objects which are not equal:
let a = {};
let b = {}; // two independent objects

alert( a == b ); // false