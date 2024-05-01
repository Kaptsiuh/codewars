function firstReverseTry(arr) {
  if (arr.length === 0) {
    return [];
  }
  if (arr.length === 1) {
    return arr;
  }
  let first = arr.shift();
  let last = arr.pop();
  arr.push(first);
  arr.unshift(last);
  return arr;
}
