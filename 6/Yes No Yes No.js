function yesNo(arr, result = [], toggler = true) {
  if (arr.length === 0) {
    return result;
  }
  if (toggler) {
    toggler = arr.length % 2 === 0;
    arr.forEach((e, i) => (i % 2 === 0 ? result.push(e) : e));
    arr = arr.filter((e, i) => i % 2 !== 0);
  } else {
    toggler = arr.length % 2 !== 0;
    arr.forEach((e, i) => (i % 2 === 0 ? e : result.push(e)));
    arr = arr.filter((e, i) => i % 2 === 0);
  }
  return yesNo(arr, result, toggler);
}
