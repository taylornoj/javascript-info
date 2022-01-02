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