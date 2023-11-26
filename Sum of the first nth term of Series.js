function SeriesSum(n) {
  let x = 1;
  let y = 4;
  for (let i = 2; i <= n; i++) {
    if (i === 2) {
      x += 1 / y;
    } else {
      x += 1 / (y + 3);
      y += 3;
    }
  }
  if (n === 0) {
    return '0.00';
  }
  return String(x.toFixed(2));
}
