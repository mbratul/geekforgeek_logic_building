/* 
    Swap Two Numbers
    Problem: Given two numbers a and b, the task is to swap them.

    Examples:
    Input: a = 2, b = 3
    Output: a = 3, b = 2

    https://www.geeksforgeeks.org/swap-two-numbers/
 */

// JavaScript Code to swap two numbers using third variable

let a = 2,
  b = 3;
console.log("a = " + a + " and b = " + b);

// Swap a and b using temp variable
let temp = a;
a = b;
b = temp;
console.log("a = " + a + " and b = " + b);

/* 
    Solution: [Naive Approach] Using Third Variable
    The idea is to use a third variable, say temp to store the original value of one of the variables during the swap.

    Store the value of a in temp.
    Assign the value of b to a.
    Assign the value of temp to b.
*/
