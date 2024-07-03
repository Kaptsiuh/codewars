function sliding(nums, k) {
  let result = [];
  let arr = [];
  for (let i = 0; i < nums.length - k + 1; i++) {
    arr = [];
    let position = i;
    for (let j = 0; j < k; j++) {
      arr.push(nums[position]);
      position++;
    }
    result.push(Math.max(...arr));
  }
  return result;
}
