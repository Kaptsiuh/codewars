function highestRank(arr) {
  var obj = {};
  arr.forEach((item) => {
    for (let key in obj) {
      if (item == key) {
        return (obj[`+${item}`] = obj[key] + 1);
      }
    }
    return (obj[`+${item}`] = 1);
  });
  console.log(obj);
  let maxKey = 0;
  let maxValue = 0;
  for (let key in obj) {
    if (obj[key] > maxValue) {
      maxKey = +key;
      maxValue = +obj[key];
    }
  }
  return maxKey;
}
