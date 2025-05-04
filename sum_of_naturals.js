/* 
    Program to find sum of first n natural numbers

    Problem : Given a number n, find the sum of the first n natural numbers. 
    https://www.geeksforgeeks.org/program-find-sum-first-n-natural-numbers/

    Examples : 
    
    Input  : 5
    Output : 15 
    Explanation : Note that 1 + 2 + 3 + 4 + 5 = 15
 */

// Javascript program to find sum of first n natural numbers.

function find_sum(n) {
  let sum = 0;
  for (let x = 1; x <= n; x++) {
    sum = sum + x;
  }
  return sum;
}
let n = 3;
console.log(find_sum(n));

/* 
    Solution: [Naive Approach] Loop Based Summation
    Calculate the sum of all integers from 1 to n by iterating through a loop.
 */
