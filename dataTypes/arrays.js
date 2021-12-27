//// ARRAYS ////

// syntax for creating an empty array:
let arr = new Array();
let arr = [];


// methods
// push - adds element to the end
let fruits = ["Apple", "Orange"];
fruits.push("Pear");
alert( fruits ); // Apple, Orange, Pear

// pop - extracts the last element of the array and returns it
let fruits = ["Apple", "Orange", "Pear"];
alert( fruits.pop() ); // remove "Pear" and alert it
alert( fruits ); // Apple, Orange

// shift - extract first element of the array and returns it
let fruits = ["Apple", "Orange", "Pear"];
alert( fruits.shift() ); // remove Apple and alert it
alert( fruits ); // Orange, Pear

// unshift - adds element to the beginning of the array
let fruits = ["Orange", "Pear"];
fruits.unshift('Apple');
alert( fruits ); // Apple, Orange, Pear