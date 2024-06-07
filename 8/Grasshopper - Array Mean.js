var findAverage = function (nums) {
  return nums.reduce((acc, a) => (acc += a)) / nums.length;
};
