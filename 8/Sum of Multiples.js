function sumMul(n, m) {
  let acc = 0;
  let step = n;
  while (step < m) {
    acc += step;
    step += n;
  }
  return acc === 0 ? "INVALID" : acc;
}
