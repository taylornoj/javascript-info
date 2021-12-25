//// THE WHILE LOOP ////

// syntax:
while (condition) {
  // code
  // so-called "loop body"
}

// while the condition is truthy, the code from the loop body is executed

let i = 0;
while (i < 3) { // shows 0, then 1, then 2
  alert( i );
  i++;
}

// a single execution of the loop body is called an iteration
// the above loop makes 3 iterations




//// THE DO...WHILE LOOP ////

// the condition check can be moved below the loop body
// syntax:
do {
  // loop body
} while (condition);

// the loop will first execute the body, then check the condition
// and while its truthy, execute it again and again

let i = 0;
do {
  alert( i );
  i++;
} while (i < 3);

// this form of syntax should only be used when you want the body
// of the loop to execute at least once regardless of the condition
// being truthy. The while loop is preferred.




//// THE FOR LOOP ////

// syntax:
for (begin; condition; step) {
  // ... loop body ...
}
// begin -- executes once upon entering the loop
// condition -- checked before every loop iteration. If false, the loop stops
// body -- runs again and again while the condition is truthy
// step -- executes after the body on each iteration

// The general loop algorithm works like this:
/*Run begin
→ (if condition → run body and run step)
→ (if condition → run body and run step)
→ (if condition → run body and run step)
→ ...

So begin executes once, and then it iterates after each condition test,
body and step are executed
*/

// the loop below runs alert(i) for i from 0 up to, but not including, 3:
for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
  alert(i);
}

// run begin
let i = 0
// if condition → run body and run step
if (i < 3) { alert(i); i++ }
// if condition → run body and run step
if (i < 3) { alert(i); i++ }
// if condition → run body and run step
if (i < 3) { alert(i); i++ }
// ...finish, because now i == 3
