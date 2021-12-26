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