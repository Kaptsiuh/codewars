function sortByValueAndIndex(array) {
  let newArr = array.map((e, i) => ({ value: e, newValue: e * (i + 1), index: i }));
  newArr.sort((a, b) => a.newValue - b.newValue);
  return newArr.map((e) => e.value);
}
