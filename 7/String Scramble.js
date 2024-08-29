function scramble(str, arr) {
  let res = [];
  arr.forEach((e, i) => (res[e] = str[i]));
  return res.join("");
}
