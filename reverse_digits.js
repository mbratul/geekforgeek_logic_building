/**
 * Write a program to reverse digits of a number
 * Given an Integer n, find the reverse of its digits.
 * Examples:
 * Input: n = 122
 * Output: 221
 * Explanation: By reversing the digits of number, number will change into 221.
 * url: https://www.geeksforgeeks.org/dsa/write-a-program-to-reverse-digits-of-a-number/
 */
/**
 * Reversing Digit by Digit
This idea for this approach is to repeatedly extract the last digit of n using the modulus operator (n % 10) and appending it to the reverse number (revNum). After extracting the digit, the number n is reduced by dividing it by 10 (n = n / 10). This process continues until n becomes 0. Finally, the reversed number (revNum) is returned.
 * @param {number} 
 * @returns {number} 
 */
function reverseDigits(n) {
  let revNum = 0;
  while (n > 0) {
    revNum = revNum * 10 + (n % 10);
    n = Math.floor(n / 10);
  }
  return revNum;
}
let n = 122;
console.log(reverseDigits(n));
