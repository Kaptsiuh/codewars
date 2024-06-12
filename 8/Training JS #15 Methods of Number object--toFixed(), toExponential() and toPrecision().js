function howManySmaller(arr, n) {
  return arr.map((e) => +e.toFixed(2)).reduce((acc, e) => (e < n ? (acc += 1) : acc), 0);
}
