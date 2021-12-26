//// OBJECTS ////

// Object Literal:
let user = {};  // "object literal" syntax

let user = {     // an object
  name: "John",  // by key "name" store value "John"
  age: 30        // by key "age" store value 30
};

// get property values of the object using dot notation:
alert( user.name ); // John
alert( user.age ); // 30

// adding a property:
user.isAdmin = true;

// to delete a property:
delete user.age;

// properties can be multiword but must be quoted:
let user = {
  name: "John",
  age: 30,
  "likes birds": true  // multiword property name must be quoted
};

// however dot notation won't work:
// this would give a syntax error
// user.likes birds = true

// the alernative is using square bracket notation:
let user = {};

// set
user["likes birds"] = true;

// get
alert(user["likes birds"]); // true

// delete
delete user["likes birds"];



// Property Value Shorthand //
// we often use existing variables as values for property names:
function makeUser(name, age) {
  return {
    name: name,
    age: age,
    // ...other properties
  };
}

let user = makeUser("John", 30);
alert(user.name); // John

// properties in above object have same name as variables. The use-case of
// making a property from a variable is so common, that there's a special property
// value shorthand to make it shorter - just write the key:
function makeUser(name, age) {
  return {
    name, // same as name: name
    age,  // same as age: age
    // ...
  };
}

// both normal properties and shorthand can be in the same object
let user = {
  name,  // same as name:name
  age: 30
};



//// for...in loop ////
// to walk over all keys of an object, there exists a special form of the 
// loop: for...in

// syntax:
for (key in object) {
  // executes the body for each key among object properties
}

let user = {
  name: "John",
  age: 30,
  isAdmin: true
};

for (let key in user) {
  // keys
  alert( key );  // name, age, isAdmin
  // values for the keys
  alert( user[key] ); // John, 30, true
}
// in alert this outputs as "name" "John" "age" "30" "isAdmin" "true"
// we can also use another variable name here instead of key - like 
// "for (let prop in obj)"




//// TASKS ////

// 1. write the code, one line for each action:
let user = {
  name = "John",
  surname = "Smith",
};

user.name = "Pete";
delete user.name;



// 2. write the function isEmpty(obj) which returns true is the object
// has no properties, false if otherwise

function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

// here, if the loop starts, there is a property and therefore we can return
// false right away



// 3. we have an object storing salaries of our team. Write the code to sum
// all salaries and store in the variable sum
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}

alert(sum); //390



// crate a function multiplyNumeric(obj) that multiplies all numberic
// property values of obj by 2
// example:
// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

// after the call
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};

function multiplyNumeric(obj) {
  for (let key in obj) {
    if(typeof obj[key] == 'number') {
      obj[key] *= 2;
    }
  }
}