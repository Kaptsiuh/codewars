const intDiff = (arr, n) => {
  let res = 0;
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] - arr[i] === n) {
        res += 1;
        continue;
      }
    }
  }
  return res;
};
