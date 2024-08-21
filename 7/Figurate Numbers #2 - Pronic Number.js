function isPronic(n) {
  let result = false;
  let pron = 0;
  for (let i = 0; pron <= n; i++) {
    const newPron = i * (i + 1);
    pron = newPron;
    if (newPron === n) {
      result = true;
    }
  }
  return result;
}
