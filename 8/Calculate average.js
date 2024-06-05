function findAverage(array) {
  return array.length === 0
    ? 0
    : array.reduce((acc, e) => (acc += e), 0) / array.length;
}
