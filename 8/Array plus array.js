function arrayPlusArray(arr1, arr2) {
  return [...arr1, ...arr2].reduce((acc, n) => acc + n);
}
