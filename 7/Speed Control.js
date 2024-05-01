function gps(s, x) {
  if (x.length <= 1) {
    return 0;
  }
  let arr = [];
  for (let i = 1; i < x.length; i++) {
    arr.push(x[i] - x[i - 1]);
  }
  return Math.floor((3600 * arr.sort((a, b) => a - b)[arr.length - 1]) / s);
}
