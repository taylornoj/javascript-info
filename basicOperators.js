// What are the final values of all variables a, b, c & d?

let a = 1, b = 1;

let c = ++a; // 2
let d = b++; // 1
// a = 2
// b = 2


// What are the values of a and x after the code?

let a = 2;

let x = 1 + (a *= 2);

// a = 4
// x = 5


// What are the results of these expressions?

"" + 1 + 0 //= "10"
"" - 1 + 0 //= -1      -- subtraction only works with numbers so it converts empty string "" to 0
true + false //= 1
6 / "3" //= 2
"2" * "3" //= 6
4 + 5 + "px" //= "9px"
"$" + 4 + 5 //= "$45"
"4" - 2 //= 2
"4px" - 2 //= NaN
"  -9  " + 5 //= "  -9  5" 
"  -9  " - 5 //= -14
null + 1 //= 1
undefined + 1 //= NaN
" \t \n" - 2 //= -2