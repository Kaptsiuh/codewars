function findEvenIndex(arr) {
  let index = -1;
  let firstPosition = 0;
  let lastPosition = 0;
  for (let i = 1; i < arr.length; i++) {
    firstPosition += arr[i];
  }
  for (let i = 0; i < arr.length - 1; i++) {
    lastPosition += arr[i];
  }
  if (firstPosition === 0) {
    return 0;
  }
  if (lastPosition === 0) {
    return arr.length - 1;
  }
  arr.reduce((acc, elem, i) => {
    acc += elem;
    let rigthSum = 0;
    for (let j = i + 2; j < arr.length; j++) {
      rigthSum += arr[j];
      if (j === arr.length - 1 && acc === rigthSum) {
        index = i + 1;
      }
    }
    return acc;
  }, 0);
  return index;
}
