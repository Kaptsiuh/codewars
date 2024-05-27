function multipleOfIndex(array) {
  return array.filter(
    (e, i) => Number.isInteger(e / i) || (i === e && i === 0)
  );
}
