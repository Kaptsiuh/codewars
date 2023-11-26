function sumArray(array) {
  if (array === null || array === undefined) {
    return 0;
  }
  if (array.length < 3) {
    return 0;
  }
  const arr = array.sort((a, b) => a - b);
  arr.shift();
  arr.pop();
  return arr.reduce((acc, item) => {
    return (acc += item);
  }, 0);
}
