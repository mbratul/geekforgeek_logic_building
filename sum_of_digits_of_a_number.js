/**
 * Sum of Digits of a Number : Given a number n, find the sum of its digits.
 * url : https://www.geeksforgeeks.org/dsa/program-for-sum-of-the-digits-of-a-given-number/
 * Examples :
 * Input: n = 687
 * Output: 21
 * Explanation: The sum of its digits are: 6 + 8 + 7 = 21
 * Approach 1 : We can sum the digits of a number by repeatedly extracting the last digit using n % 10, adding it to the sum, and then removing it by dividing n by 10 using integer division.
 */

function sumofDigits(n) {
  let sum = 0;
  while (n !== 0) {
    //extract the last digit
    let last = n % 10;
    //add last digit to the sum
    sum += last;
    //remove the last digit
    n = Math.floor(n / 10);
  }
  return sum;
}

console.log(sumofDigits(68));
