function flickSwitch(arr) {
  let isTrue = true;
  const newArr = [];
  arr.forEach((e) => {
    e === "flick" ? (isTrue = !isTrue) : null;
    newArr.push(isTrue);
  });
  return newArr;
}
