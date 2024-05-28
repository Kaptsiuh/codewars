function twoHighest(arr) {
  return [...new Set(arr)]
    .sort((a, b) => b - a)
    .reduce((acc, e, i) => (i < 2 ? (acc = [...acc, e]) : acc), []);
}
