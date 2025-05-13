"use strict";
/* 
    Problem: Nth term of AP from First Two Terms

    Given two integers a1 and a2, the first and second terms of an Arithmetic Series respectively, the problem is to find the nth term of the series. 
    Examples :

    Input : a1 = 2,  a2 = 3,  n = 4
    Output : 5
    Explanation : The series is 2, 3, 4, 5, 6, ....   , thus the 4th term is 5. 

    https://www.geeksforgeeks.org/nth-term-of-ap-from-first-two-terms/
 */

function nthTermOfAP(a1, a2, n) {
  let nthTerm = a1;
  let d = a2 - a1;
  for (let i = 1; i < n; i++) {
    nthTerm += d;
  }
  return nthTerm;
}
let a1 = 2,
  a2 = 3;
let n = 4;
console.log(nthTermOfAP(a1, a2, n));

/* 
    Solution: [Naive Approach] - Using for Loop
    In an Arithmetic Series, the difference between all pair of consecutive terms is same, for example, 2, 5, 8, 11, 14,,,,, The common difference is 3.

    Find the common difference of the series, common difference d = a2 - a1
    Run a loop to iterate over each term in the series from a1, keep adding common difference d until the n-th term is reached. 
*/
