function sumOfDifferences(arr) {
  return arr
    .sort((a, b) => b - a)
    .reduce((acc, e, i, arr) => {
      return i === 0 ? acc : (acc += arr[i - 1] - e);
    }, 0);
}
