function getLargerNumbers(a, b) {
  let result = [];
  for (let i = 0; i < a.length; i++) {
    a[i] >= b[i] ? (result = [...result, a[i]]) : (result = [...result, b[i]]);
  }
  return result;
}
