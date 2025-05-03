/* 
    Given a number n, check whether it is even or odd. Return true for even and false for odd.
    url: https://www.geeksforgeeks.org/check-whether-given-number-even-odd/
*/
// A simple Javascript program to
// check for even or odd
function isEven(n) {
  return n % 2 == 0;
}
// Driver code

let n = 101;
if (isEven(n)) {
  console.log("true");
} else {
  console.log("false");
}
