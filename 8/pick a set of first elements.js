function first(arr, n) {
  return n !== undefined ? arr.splice(0, n) : [arr[0]];
}
