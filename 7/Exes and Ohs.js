function XO(str) {
  let x = 0;
  let o = 0;
  str.split('').forEach((e) => {
    if (e.toLowerCase() === 'x') {
      x += 1;
    }
    if (e.toLowerCase() === 'o') {
      o += 1;
    }
  });
  return x === o;
}
