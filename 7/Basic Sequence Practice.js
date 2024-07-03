function sumOfN(n) {
  const arr = [];
  for (let i = 0; i <= Math.abs(n) + 1; i++) {
    arr.length === 0 ? arr.push(0) : arr.push(arr.reduce((acc, e, i) => (acc += i)));
  }
  arr.shift();
  if (n < 0) {
    return arr.map((e) => -e);
  }
  return arr;
}
