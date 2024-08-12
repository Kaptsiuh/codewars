function sumNoDuplicates(numList) {
  const obj = {};
  let result = 0;
  numList.forEach((e, i) => (obj[e] !== undefined ? (obj[e] = obj[e] + 1) : (obj[e] = 1)));
  for (let x in obj) {
    obj[x] === 1 ? (result += +x) : result;
  }
  return result;
}
