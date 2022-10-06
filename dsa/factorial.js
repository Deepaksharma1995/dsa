function findFactorialRecursion(num) {
  if (num === 0) {
    return 1;
  }
  return num * findFactorialRecursion(num - 1);
}

function findFactorialIterative(num) {
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact *= i;
  }
  return fact;
}
