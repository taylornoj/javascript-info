//// REST PARAMETERS AND SPREAD SYNTAX ////

// we can call a function with any number of arguments no matter how it is defined
function sum(a, b) {
  return a + b;
}
console.log(sum(1, 2, 3, 4, 5));

// however in the above example, there will be no error BUT only the first two
// arguments will be counted and summed

// but if we rewrite the function, the rest of the parameters can be included
// in the function:

function sumAll(...args) {  // '...' means gathe the remaining parameters into an array
  let sum = 0;

  for (let arg of args) sum += arg;

  return sum;
}
console.log(sumAll(1));
console.log(sumAll(1, 2, 3));

// this means you can also set the first parameters as variables, and gather only the rest
// example below: the first two arguments go into variables and the rest go into titles array:

function showName(firstName, lastName, ...titles) {
  console.log(firstName + ' ' + lastName); // Julius Caesar

  // the rest go into titles array:
  // ex. titles = ["Consul", "Imperator"]
  console.log(titles[0]); // Consul
  console.log(titles[1]); // Imperator
  console.log(titles.length); // 2
}
showName("Julius", "Caesar", "Consul", "Imperator");

// ** the rest parameters must be at the end

//// SPREAD SYNTAX ////
// we know about Math.max:
console.log( Math.max(3, 5, 1) ); // 5

// but if we have an array [3, 5, 1] how do we call Math.max with it?
// this wont work because Math.max expects a list of 
// numeric arguments, not a single array:
let arr = [3, 5, 1];
console.log( Math.max(arr) ); // NaN

/*
So we can use spread syntax!
It looks similar to rest parameters, also using '...'
but it does the opposite.

When ...arr is used in the function call, it 'expands' an
iterable object arr into the list of arguments

However for Math.max:
*/
let arr = [3, 5, 1];
console.log( Math.max(...arr) ); // 5 (spread turns array into a list of arguments)

// further examples of how it can be used:
let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];
console.log( Math.max(...arr1, ...arr2) ); // 8

let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];
console.log( Math.max(1, ...arr1, 2, ...arr2, 25) ); // 25

// can also be used to merge arrays:
let arr = [3, 5, 1];
let arr2 = [8, 9, 15];
let merged = [0, ...arr, 2, ...arr2];
console.log(merged); // 0,3,5,1,2,8,9,15 (0, then arr, then 2, then arr2)

// can use spread syntax to turn the string into an array of characters:
let str = "Hello";
console.log( [...str] ); // H,e,l,l,o



// using spread to copy an array/object:
// COPY AN ARRAY:
let arr = [1, 2, 3];
let arrCopy = [...arr]; // spread the array into a list of parameters
                        // then put the result into a new array

// do the arrays have the same contents?
alert(JSON.stringify(arr) === JSON.stringify(arrCopy)); // true

// are the arrays equal?
alert(arr === arrCopy); // false (not same reference)

// modifying our initial array does not modify the copy:
arr.push(4);
alert(arr); // 1, 2, 3, 4
alert(arrCopy); // 1, 2, 3

// COPY AN OBJECT:
let obj = { a: 1, b: 2, c: 3 };
let objCopy = { ...obj }; // spread the object into a list of parameters
                          // then return the result in a new object

// do the objects have the same contents?
alert(JSON.stringify(obj) === JSON.stringify(objCopy)); // true

// are the objects equal?
alert(obj === objCopy); // false (not same reference)

// modifying our initial object does not modify the copy:
obj.d = 4;
alert(JSON.stringify(obj)); // {"a":1,"b":2,"c":3,"d":4}
alert(JSON.stringify(objCopy)); // {"a":1,"b":2,"c":3}


// '...' in code can mean either rest parameter OR spread syntax:
/*
When ... is at the end of function parameters, 
it’s “rest parameters” and gathers the rest of 
the list of arguments into an array.


When ... occurs in a function call or alike, 
it’s called a “spread syntax” and expands an array into a list.
*/

/*
Use patterns:

Rest parameters are used to create functions 
that accept any number of arguments.

The spread syntax is used to pass an array to functions 
that normally require a list of many arguments.
*/