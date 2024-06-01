function nthEven(n) {
  return n * 2 - (1 % 2) === 0 ? n * 2 - 1 : n * 2 - 2;
}
