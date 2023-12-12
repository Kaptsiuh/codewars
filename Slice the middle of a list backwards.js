function reverseMiddle(array) {
  for (i = Math.floor(array.length / 2); i > 1; i--) {
    array.shift();
    array.pop();
  }
  array.reverse();
  return array;
}
