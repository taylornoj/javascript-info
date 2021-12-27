//// ARRAYS ////

// syntax for creating an empty array:
let arr = new Array();
let arr = [];




// METHODS
// -- push - adds element to the end
let fruits = ["Apple", "Orange"];
fruits.push("Pear");
alert( fruits ); // Apple, Orange, Pear


// -- pop - extracts the last element of the array and returns it
let fruits = ["Apple", "Orange", "Pear"];
alert( fruits.pop() ); // remove "Pear" and alert it
alert( fruits ); // Apple, Orange


// -- shift - extract first element of the array and returns it
let fruits = ["Apple", "Orange", "Pear"];
alert( fruits.shift() ); // remove Apple and alert it
alert( fruits ); // Orange, Pear


// -- unshift - adds element to the beginning of the array
let fruits = ["Orange", "Pear"];
fruits.unshift('Apple');
alert( fruits ); // Apple, Orange, Pear


// -- splice - can insert, remove and replace elements
let arr = ["I", "study", "JavaScript"];
arr.splice(1, 1); // from index 1 remove 1 element
alert( arr ); // ["I", "JavaScript"]

let arr = ["I", "study", "JavaScript", "right", "now"];
// remove 3 first elements and replace them with another
arr.splice(0, 3, "Let's", "dance");
alert( arr ) // now ["Let's", "dance", "right", "now"]

let arr = ["I", "study", "JavaScript"];
// from index 2
// delete 0
// then insert "complex" and "language"
arr.splice(2, 0, "complex", "language");
alert( arr ); // "I", "study", "complex", "language", "JavaScript"


// -- slice - returns a new array copying to it all items from index start - end (not inclusive)
let arr = ["t", "e", "s", "t"];
alert( arr.slice(1, 3) ); // e,s (copy from 1 to 3)
alert( arr.slice(-2) ); // s,t (copy from -2 till the end)

arr.slice() // will just create a copy of arr


// -- find & filter
// find method looks for a single (first) element that makes the function return true
// in the filter method, there may be many, so we use .filter
let result = arr.find(function(item, index, array) {
  // if true is returned, item is returned and iteration is stopped
  // for falsy scenario returns undefined
});
//    vs.
let results = arr.filter(function(item, index, array) {
  // if true item is pushed to results and the iteration continues
  // returns empty array if nothing found
});


// -- map - calls the function for each element of the array and returns results
let result = arr.map(function(item, index, array) {
  // returns the new value instead of item
});
// ex:
let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
alert(lengths); // 5,7,6


// -- sort - sorts the array in place, changing its element order
let arr = [ 1, 2, 15 ];
arr.sort( (a, b) => a - b );
alert(arr);  // 1, 2, 15


// -- reduce - used to calculate a single value based on an array
let value = arr.reduce(function(accumulator, item, index, array) {
  // ...
}, [initial]);
// the function is applied to all array elements one after another and
// 'carries on' its result to the next call
let arr = [1, 2, 3, 4, 5];
let result = arr.reduce((sum, current) => sum + current);
alert( result ); // 15


// loops
// for...of loop - doesn't give access to the index
let fruits = ["Apple", "Orange", "Plum"];
// iterates over array elements
for (let fruit of fruits) {
  alert( fruit );
}
