/* 
    The dice problem

    You are given a cubic dice with 6 faces. All the individual faces have a number printed on them. The numbers are in the range of 1 to 6, like any ordinary dice. You will be provided with a face of this cube, your task is to guess the number on the opposite face of the cube.

    Examples:

    Input: n = 2
    Output: 5
    Explanation: For dice facing number 5 opposite face will have the number 2.

    https://www.geeksforgeeks.org/the-dice-problem/
 */

function oppositeFaceOfDice(n) {
  let ans;
  if (n === 1) {
    ans = 6;
  } else if (n === 2) {
    ans = 5;
  } else if (n === 3) {
    ans = 4;
  } else if (n === 4) {
    ans = 3;
  } else if (n === 5) {
    ans = 2;
  } else {
    ans = 1;
  }
  return ans;
}
let n = 2;
console.log(oppositeFaceOfDice(n));
