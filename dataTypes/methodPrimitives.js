//// METHODS OF PRIMITIVES ////

// primitives are not objects

/* 

a primitive:
  - is a value of a primitive type
  - 7 primitive types:
    string, number, bigint, boolean, symbol, null & undefined


an object:
  - is capable of storing multiple values as properties
  - can be created with {}
  - we can store a function as one of an objects properties
*/

//// A Primitive as an Object ----
// the paradox is that there are things we'd like to do to a primitive
// like a string or number - and it would be great to access them 
// using methods

// the solution is to have a special 'object wrapper' that provides the extra functionality

// these object wrappers are different for each primitive type
// an example of one would be:
let str = "Hello";

alert( str.toUpperCase() ); // HELLO
// str is primitive, so in the moment of accessing its property, a special
// object is created that knows the value of the string and has useful methods

// the method runs, and returns a new string

// the special object is destroyed, leaving the primitive str alone



// Numbers have methods of their own, an example of one:
let n = 1.23456;

alert( n.toFixed(2) ); // 1.23

// the exceptions to this rlue are primitives like null and undefined which have no
// corresponding wrapper objects and provide no methods