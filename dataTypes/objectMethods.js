//// OBJECT.KEYS, VALUES, ENTRIES ////

// for plain objects, the following methods are available:
Object.keys(obj)    // returns an array of keys
Object.values(obj)  // returns an array of values
Object.entries(obj) // returns an array of [key, value] pairs

let user = {
  name: "John",
  age: 30
};
Object.keys(user)    // = ["name", "age"]
Object.values(user)  // = ["John", 30]
Object.entries(user) // = [ ["name","John"], ["age",30] ]

// using Object.values to loop over property values
let user = {
  name: "John",
  age: 30
};
// loop over values
for (let value of Object.values(user)) {
  alert(value); // John, then 30
}



// write a function that returns the sum of all salaries using
// Object.values and the for...of loop
function sumSalaries(salaries) {
  let sum = 0;
  for (let salary of Object.values(salaries)) {
    sum += salary;
  }
  return sum; // 650
}
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
console.log( sumSalaries(salaries) ); // 650



// write a function that returns the number of properties in an object
function count(obj) {
  return Object.keys(obj).length
};