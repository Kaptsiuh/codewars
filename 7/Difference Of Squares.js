function differenceOfSquares(n) {
  let squareOfSum = 0;
  let sumOfSquare = 0;
  for (let i = 1; i <= n; i++) {
    squareOfSum += i;
    sumOfSquare += i ** 2;
  }
  return squareOfSum ** 2 - sumOfSquare;
}
