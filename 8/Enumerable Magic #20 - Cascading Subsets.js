function eachCons(array, n) {
  const result = [];
  if (array.length < n) {
    return [];
  }
  for (let i = 0; i + n <= array.length; i++) {
    const innerArray = [];
    for (let j = i; j < i + n; j++) {
      innerArray.push(array[j]);
    }
    result.push(innerArray);
  }
  return result;
}
