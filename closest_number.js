/* Find the number closest to n and divisible by m 

    Given two integers n and m (m != 0). Find the number closest to n and divisible by m. If there is more than one such number, then output the one having maximum absolute value.

    Examples: 

    Input: n = 13, m = 4
    Output: 12
    Explanation: 12 is the closest to 13, divisible by 4.
*/

// JavaScript implementation to find the number closest to n
// and divisible by m

function closestNumber(n, m) {
  // find the quotient
  let closest = 0;
  let minDifference = Infinity;

  // Check numbers around n
  for (let i = n - Math.abs(m); i <= n + Math.abs(m); i++) {
    if (i % m === 0) {
      let difference = Math.abs(n - i);
      if (
        difference < minDifference ||
        (difference === minDifference && Math.abs(i) > Math.abs(closest))
      ) {
        closest = i;
        minDifference = difference;
      }
    }
  }
  return closest;
}

//driver code
let n = 13,
  m = 4;
console.log(closestNumber(n, m));

/* 
    Solution: [Naive Approach] Iterative Checking
    The basic idea is to start checking from n – m to n + m one by one and tack the closest number.
 */
