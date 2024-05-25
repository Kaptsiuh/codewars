function findDifference(a, b) {
  const vol1 = a.reduce((acc, e) => (acc *= e), 1);
  const vol2 = b.reduce((acc, e) => (acc *= e), 1);
  return vol1 > vol2 ? vol1 - vol2 : vol2 - vol1;
}
