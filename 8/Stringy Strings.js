function stringy(size) {
  const arr = [];
  let i = 0;
  while (size > i) {
    i % 2 === 0 ? arr.push("1") : arr.push("0");
    i++;
  }
  return arr.join("");
}
