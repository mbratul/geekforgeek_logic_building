/* 
    Program to print multiplication table of a number

    Problem: Given a number n, we need to print its table. 
    https://www.geeksforgeeks.org/program-to-print-multiplication-table-of-a-number/

    Examples : 
    
    Input:  5
    Output: 
    5 * 1 = 5
    5 * 2 = 10
    5 * 3 = 15
    5 * 4 = 20
    5 * 5 = 25
    5 * 6 = 30
    5 * 7 = 35
    5 * 8 = 40
    5 * 9 = 45
    5 * 10 = 50
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
