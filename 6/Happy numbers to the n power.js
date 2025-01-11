function isHappy(n, pow, arr = [n]) {
  let newNumber = String(n)
    .split("")
    .reduce((acc, e) => (acc += e ** pow), 0);
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) !== i) {
      return arr.slice(arr.indexOf(arr[i]), i + 1);
    }
  }
  if (newNumber === 1) {
    return [1];
  } else if (newNumber === arr[0]) {
    arr.push(newNumber);
    return arr;
  } else {
    arr.push(newNumber);
    return isHappy(newNumber, pow, arr);
  }
}
