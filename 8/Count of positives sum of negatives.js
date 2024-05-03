function countPositivesSumNegatives(input) {
  if (input === null) {
    return [];
  }
  const positive = input.reduce((acc, n) => (n > 0 ? (acc += 1) : acc), 0);
  const negative = input.reduce((acc, n) => (n < 0 ? (acc += n) : acc), 0);
  return positive === 0 && negative === 0 ? [] : [positive, negative];
}
