function smaller(nums) {
  return nums.map(
    (e, i) =>
      (e = nums.reduce((acc, el, index) => (index < i ? acc : e > el ? (acc += 1) : acc), 0))
  );
}
