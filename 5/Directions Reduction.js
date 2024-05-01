function dirReduc(arr) {
  const newArr = [];
  const n = 'NORTH';
  const s = 'SOUTH';
  const w = 'WEST';
  const e = 'EAST';
  arr.map((item, i) => {
    if (item === e && newArr[newArr.length - 1] === w) {
      newArr.pop();
    } else if (item === w && newArr[newArr.length - 1] === e) {
      newArr.pop();
    } else if (item === s && newArr[newArr.length - 1] === n) {
      newArr.pop();
    } else if (item === n && newArr[newArr.length - 1] === s) {
      newArr.pop();
    } else if (newArr.length >= 1) {
      newArr.push(item);
    } else {
      newArr.length < 1 ? newArr.push(item) : 0;
    }
  });
  return newArr;
}
