{
  /**
   * Program for Sum of squares of first n natural numbers
   * Given a positive integer n, we have to find the sum of squares of first n natural numbers.
   * Examples :
   * Input : n = 2
   * Output: 5
   * Explanation: 1^2+2^2 = 5
   * url : https://www.geeksforgeeks.org/dsa/sum-of-squares-of-first-n-natural-numbers/
   */

  function summation(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i * i;
    }
    return sum;
  }
  let n = 2;
  console.log(summation(8));
}
