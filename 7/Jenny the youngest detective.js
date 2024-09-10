function missingWord(nums, str) {
  const res = nums.sort((a, b) => a - b).map((e) => (e = str.replace(/\s/g, "")[e]));
  return res.includes(undefined) ? "No mission today" : res.join("").toLowerCase();
}
