function sumOfEvenSquares(numbers) {
  return numbers
    .filter((num) => num % 2 === 0)
    .reduce((sum, num) => (sum += num ** 2), 0);
}

module.exports = sumOfEvenSquares;
