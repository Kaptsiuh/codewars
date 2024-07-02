var isAnagram = function (test, original) {
  if (test.length !== original.length) {
    return false;
  }
  const testArr = test.toLowerCase().split("");
  original
    .toLowerCase()
    .split("")
    .forEach((e) => {
      if (testArr.findIndex((x) => x === e) >= 0) {
        testArr[testArr.findIndex((x) => x === e)] = "";
      }
    });
  return testArr.filter((e) => e !== "").length === 0;
};
