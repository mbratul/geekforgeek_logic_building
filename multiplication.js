function multiply(n, m) {
  let result = 0;
  for (let i = 1; i <= m; i++) {
    result = `${n} * ${i} = ${n * i}`;
    console.log(result);
  }
  return result;
}
console.log(multiply(15, 20));
