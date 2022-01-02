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