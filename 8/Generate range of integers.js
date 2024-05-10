function generateRange(min, max, step) {
  const arr = [];
  for (; min <= max; min += step) {
    arr.push(min);
  }
  return arr;
}
