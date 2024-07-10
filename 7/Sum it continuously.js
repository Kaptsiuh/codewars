function add(arr) {
  let sum = 0;
  return arr.reduce((acc, e, i) => [...acc, (sum = sum + e)], []);
}
