var hotpo = function (n) {
  let acc = 0;
  for (; n > 1; ) {
    if (n % 2 === 0) {
      n /= 2;
      acc++;
    } else {
      n = 3 * n + 1;
      acc++;
    }
  }
  return acc;
};
