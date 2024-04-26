function monkeyCount(n) {
  const arr = [];
  let acc = 1;
  while (acc <= n) {
    arr.push(acc);
    acc++;
  }
  return arr;
}
