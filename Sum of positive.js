function positiveSum(arr) {
  return arr.reduce((acc, e) => {
    return e < 0 ? acc : (acc += e);
  }, 0);
}
