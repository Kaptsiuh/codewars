function isTuringEquation(s) {
  const arr = s
    .split("+")
    .reduce((acc, e) => [...acc, ...e.split("=")], [])
    .map((e) => e.split("").reverse().join(""));
  return +arr[0] + +arr[1] === +arr[2];
}
