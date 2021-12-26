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
user.likes birds = true

// the alernative is using square bracket notation:
let user = {};

// set
user["likes birds"] = true;

// get
alert(user["likes birds"]); // true

// delete
delete user["likes birds"];