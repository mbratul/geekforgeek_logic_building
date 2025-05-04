/* 
    Check whether a given number is even or odd
    Given a number n, check whether it is even or odd. Return true for even and false for odd.
    url: https://www.geeksforgeeks.org/check-whether-given-number-even-odd/

    Examples: 
    
    Input: 2 
    Output: true

    Input: 5
    Output: false
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
/* 
  Solution : Approach: By Finding the Remainder
  We can check the remainder when divided by 2. If the remainder is 0, the number is even; otherwise, it is odd
 */
