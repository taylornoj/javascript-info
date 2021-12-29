//// RECURSION AND STACK //// 

// when a function solves a task, in the process it can call many other
// functions. A partial case of this is when a function calls itself, that is
// called recursion

// Two ways of thinking:
/*
  If we want to write a function that raises x to a natural power of
  n (multiplies x by itself, n times), there are two ways to implement it:
*/
function pow(x, n) {
  let result = 1;
  // multiply result by x n times in the loop
  for (let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
}
alert( pow(2, 3) ); // 8

//--- OR, using recursion:

function pow(x, n) {
  if (n == 1) {
    return x;
  } else {
    return x * pow(x, n - 1);
  }
}
alert( pow(2, 3) ); // 8