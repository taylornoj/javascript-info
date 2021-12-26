//// FUNCTIONS === COMMENTS ////

/*
Functions should be short and do exactly one thing.
Sometimes its worth splitting up the function into a few smaller
functions.
A separate function is not only easier to test and debug, it's very
existence is a great comment
*/

// For example:
// two functions showPrimes(n) - each one outputs prime numbers up to n

// first variant uses a label:
function showPrimes(n) {
  nextPrime: for (let i = 2; i < n; i++) {

    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }

    alert( i ); // a prime
  }
}

// second variant uses an additional function (isPrime(n))
function showPrimes(n) {

  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;

    alert(i);  // a prime
  }
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if ( n % i == 0) return false;
  }
  return true;
}

// this second variant is easier to understand - instead of the code piece
// we see a name of the action (isPrime) the code is self describing

