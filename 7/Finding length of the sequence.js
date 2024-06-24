var lengthOfSequence = function (arr, n) {
  const counts = arr.reduce((acc, e) => (e === n ? (acc += 1) : acc), 0);
  return counts !== 2 ? 0 : arr.findLastIndex((e) => e === n) - arr.findIndex((e) => e === n) + 1;
};
