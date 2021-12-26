//// Object methods: "this" ////

// objects are usually created to represent entities of the real world,
// like users, orders and so on:
let user = {
  name: "John",
  age: 30
};
// a user can act, select something from the shopping card, login,
// logout, etc
// these actions are represented in JavaScript by functions in properties


// method examples

let user = {
  name: "John",
  age: 30
};

user.sayHi = function() {
  alert("Hello!");
};

user.sayHi(); // Hello!
// above, we've used a function expression to create a function and assign
// it to the property user.sayHi of the object
// a function that is a property of an object is called its METHOD
// so here, the method is sayHi of the object user

//// OOP ------
// when we write our code using objects to represent entities, thats
// called object oriented programming




// "this" in methods
// its common that an object method needs to access the information stored in the
// object to do its job
// for example, the code inside user.sayHi() may need the name of the user
// to access the object, a method can use the 'this' keyword
// the value of 'this' is the object "before dot"
let user = {
  name: "John",
  age: 30,

  sayHi() {
    // "this" is the "current object"
    alert(this.name);
  }

};

user.sayHi(); // John
// you can technically drop 'this' and use user.name however if user is 
// copied to another variable and we overwrite user with something else, then
// it will access the wrong object


// Arrow functions have no "this"
// if we reference this from such a function, it's taken from the outer
// normal function. An example:
let user = {
  firstName: "Ilya",
  sayHi() {
    let arrow = () => alert(this.firstName);
    arrow();
  }
};

user.sayHi(); // Ilya

// this is useful when we actually do not want to have a separate this, but
// rather to take it form the outer context

// the value of "this" is defined at runtime 