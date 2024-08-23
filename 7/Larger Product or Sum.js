function sumOrProduct(array, n) {
  const arr = array.sort((a, b) => a - b);
  const sum = arr.slice(-n).reduce((acc, e) => (acc += e));
  const product = arr.slice(0, n).reduce((acc, e) => (acc *= e));
  return sum > product ? "sum" : sum === product ? "same" : "product";
}
