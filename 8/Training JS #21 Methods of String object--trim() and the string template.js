function fiveLine(s) {
  let init = s.trim();
  let step = "\n" + init;
  let res = init;
  for (let i = 0; i < 4; i++) {
    step += init;
    res += step;
  }
  return res;
}
