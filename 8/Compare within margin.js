function closeCompare(a, b, margin) {
  if (a === b) {
    return 0;
  }
  if (margin === undefined) {
    return a < b ? -1 : 1;
  }
  if (a < b) {
    return a + margin < b ? -1 : 0;
  }
  if (a > b) {
    return b + margin < a ? 1 : 0;
  }
}
