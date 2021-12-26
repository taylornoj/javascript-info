/*
String Conversion ---- 
  String conversion happens when we need the string form of a value
  Occurs when we output something
  Example: alert(value) does it to show the value
  We can also call the String(value) function to convert a value to a string:
*/
let value = true;
alert(typeof value); // boolean

value = String(value); // now value is a string "true"
alert(typeof value); // string


/*
Numeric Conversion ---- 
  Happens in mathematical functions and expressions automatically.
  For example, when division is applied to non numbers:
*/
alert( "6" / "2" ); // 3, strings are converted to numbers

// We can use Number(value) function to explicitly convert a value to a number
let str = "123";
alert(typeof str); // string

let num = Number(str); // becomes a number 123

alert(typeof num); // number
/*
Explicit conversion is usually required when we read a value from a string-
based source like a text form but expect a number to be entered

If the string is not a valid number, the result of such a conversion
is NaN. For example:
*/
let age = Number("an arbitrary string instead of a number");

alert(age); // NaN, conversion failed

// further examples:
alert( Number("   123   ") ); // 123
alert( Number("123z") );      // NaN (error reading a number at "z")
alert( Number(true) );        // 1
alert( Number(false) );       // 0

/*
Boolean Conversion ----
  Values that are intuitively "empty" like 0, an empty string,
  null, undefined and NaN become false
  Other values become true
  Occurs in logical operations
*/
alert( Boolean(1) ); // true
alert( Boolean(0) ); // false

alert( Boolean("hello") ); // true
alert( Boolean("") ); // false

alert( Boolean("0") ); // true
alert( Boolean(" ") ); // spaces, also true (any non-empty string is true)