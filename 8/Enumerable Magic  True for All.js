function all(arr, fun) {
  let result = true;
  for (let number of arr) {
    if (fun(number) === 0) {
      return false;
    }
    result ? (result = fun(number)) : result;
  }
  return result;
}
