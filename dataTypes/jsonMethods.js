//// JSON Methods, toJSON ////

// lets say we have a complex object, we'd like to convert it to a string,
// to send it over a network, or output it for logging purposes
// Maybe you'd want to do this:
toString() 
  return `{name: "${this.name}", age: ${this.age}}`;

// however, new properties could be added, old properties renamed, etc

//-- JSON.stringigy
// The JSON (JavaScript Object Notation) is a general format to represent
// values and objects

// JavaScript provides methods:
// JSON.stringigy to convert object into JSON
// JSON.parse to convert JASON back to an object

let student = {
  name: 'John',
  age: 30,
  isAdmin: false,
  courses: ['html', 'css', 'js'],
  wife: null
};

let json = JSON.stringify(student);

console.log(typeof json); // we've got a string!

console.log(json); // {"name":"John","age":30,"isAdmin":false,"courses":["html","css","js"],"wife":null}
// this result is called a JSON encoded or serialized or stringified object

// rules for JSON enoded objects:
// use double quotes - no single quotes or backtics

// JSON supports the following data types:
/*
- Objects {}
- Arrays []
- Primitives:
  - strings
  - numbers
  - boolean values
  - null
*/

// a number in JSON is just a number
alert( JSON.stringify(1) ) // 1

// a string in JSON is still a string, but double-quoted
alert( JSON.stringify('test') ) // "test"

alert( JSON.stringify(true) ); // true

alert( JSON.stringify([1, 2, 3]) ); // [1,2,3]



//-- excluding and transforming: replacer
// full syntax of JSON.stringify is:
let json = JSON.stringify(value[ replacer, space])

// value: a value to encode
// replacer: array of properties to encode or a mapping function
// space: amount of space to use for formatting

// most of the time JSON.stringify is used with first argument only, but 
// if we need to fine tune the replacement process, we can use second argument


let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  participants: [{name: "John"}, {name: "Alice"}],
  place: room // meetup references room
};

room.occupiedBy = meetup; // room references meetup

alert( JSON.stringify(meetup, ['title', 'participants']) );
// {"title":"Conference","participants":[{},{}]}

// the above is being too strict, participants is empty because name 
// is not on the list. So we do this:

let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  participants: [{name: "John"}, {name: "Alice"}],
  place: room // meetup references room
};

room.occupiedBy = meetup; // room references meetup

alert( JSON.stringify(meetup, ['title', 'participants', 'place', 'name', 'number']) );
/*
{
  "title":"Conference",
  "participants":[{"name":"John"},{"name":"Alice"}],
  "place":{"number":23}
}
*/


// using replacer:
let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  participants: [{name: "John"}, {name: "Alice"}],
  place: room // meetup references room
};

room.occupiedBy = meetup; // room references meetup

alert( JSON.stringify(meetup, function replacer(key, value) {
  alert(`${key}: ${value}`);
  return (key == 'occupiedBy') ? undefined : value;
}));

/* key:value pairs that come to replacer:
:             [object Object]
title:        Conference
participants: [object Object],[object Object]
0:            [object Object]
name:         John
1:            [object Object]
name:         Alice
place:        [object Object]
number:       23
occupiedBy: [object Object]
*/

// formatting: space
/*
The third argument of JSON.stringify(value, replacer, space) is the 
number of spaces to use for pretty formatting.

Previously, all stringified objects had no indents and extra spaces. 
That’s fine if we want to send an object over a network. The space 
argument is used exclusively for a nice output.

Here space = 2 tells JavaScript to show nested objects on multiple 
lines, with indentation of 2 spaces inside an object:
*/
let user = {
  name: "John",
  age: 25,
  roles: {
    isAdmin: false,
    isEditor: true
  }
};

alert(JSON.stringify(user, null, 2));
/* two-space indents:
{
  "name": "John",
  "age": 25,
  "roles": {
    "isAdmin": false,
    "isEditor": true
  }
}
*/

/* for JSON.stringify(user, null, 4) the result would be more indented:
{
    "name": "John",
    "age": 25,
    "roles": {
        "isAdmin": false,
        "isEditor": true
    }
}
*/



// 

// JSON is a data format that has its own independent standard
// and libraries for most programming languages

// JSON supports plain objects, arrays, strings, numbers, booleans, and null

// JavaScript provides methods JSON.stringify to serialize into JSON and
// JSON.parse to read from JSON
// both methods support transformer functions for smart reading/writing

// if an object has toJSON then it is called by JSON.stringify