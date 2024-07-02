function appleBoxes(k) {
  let result = 0;
  for (let i = 1; i <= k; i++) {
    i % 2 === 0 ? (result += i * i) : (result -= i * i);
  }
  return result;
}
