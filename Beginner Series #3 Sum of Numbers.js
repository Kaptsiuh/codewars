function getSum(a, b) {
  let res = 0;
  if (a < b) {
    for (; a <= b; a++) {
      res += a;
    }
  } else {
    for (; a >= b; a--) {
      res += a;
    }
  }
  return res;
}
