function sumOfMinimums(arr) {
  return arr.map((e) => Math.min(...e)).reduce((acc, int) => acc + int);
}
