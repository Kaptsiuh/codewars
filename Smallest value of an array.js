function min(arr, toReturn) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === Math.min(...arr) && toReturn === 'value') {
      return arr[i];
    }
    if (arr[i] === Math.min(...arr) && toReturn === 'index') {
      return i;
    }
  }
}
