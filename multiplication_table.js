/* 
    Program to print multiplication table of a number

    Problem: Given a number n, we need to print its table. 
    https://www.geeksforgeeks.org/program-to-print-multiplication-table-of-a-number/
 */

// Javascript program to print
// table of a number

function printTable(n) {
  for (let i = 0; i <= 10; ++i) {
    console.log(n + "*" + i + "=" + n * i);
  }
}
let n = 5;
printTable(n);
/* 
    Solution: Iterative Approach
    The iterative approach for printing a multiplication table involves using a loop to calculate and print the product of a given number and the numbers in range from 1 to 10. In this method, you begin with the number whose table you want to print and use a loop to multiply it with increasing values.
*/
