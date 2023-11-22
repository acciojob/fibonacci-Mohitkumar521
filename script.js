function fibonacci(num) {
  if (num <= 0) {
    return "Input must be a positive integer";
  }

  // Initialize the first two Fibonacci numbers
  let fibNums = [0, 1];

  // Calculate Fibonacci numbers up to the num-th position
  while (fibNums.length <= num) {
    let nextFib = fibNums[fibNums.length - 1] + fibNums[fibNums.length - 2];
    fibNums.push(nextFib);
  }

  // Return the num-th Fibonacci number
  return fibNums[num - 1];
}

module.exports = fibonacci;

