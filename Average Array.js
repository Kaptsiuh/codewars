function avgArray(arr) {
  const newArr = [];
  for (let i = 0; i < arr[1].length; i++) {
    let result = 0;
    for (let j = 0; j < arr.length; j++) {
      result += arr[j][i];
    }
    result /= arr.length;
    newArr.push(result);
  }
  return newArr;
}
