function atomicNumber(num) {
  let level = 1;
  const result = [];
  for (let i = num; i > 0; ) {
    let electrons = 2 * level ** 2;
    if (i > electrons) {
      result.push(electrons);
      i -= electrons;
    } else {
      result.push(i);
      i = 0;
    }
    level++;
  }
  return result;
}
