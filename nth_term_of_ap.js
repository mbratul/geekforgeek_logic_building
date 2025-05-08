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

/* const Person = () => {
  this.test = "hello";
};

const result = new Person();

console.log(result.test); */
