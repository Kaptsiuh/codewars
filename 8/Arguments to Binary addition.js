function arr2bin(arr) {
  return arr
    .reduce((acc, e) => (typeof e === "number" ? (acc += e) : acc), 0)
    .toString(2);
}
