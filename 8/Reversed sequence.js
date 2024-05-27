const reverseSeq = (n) => {
  const arr = [];
  while (n > 0) {
    arr.push(n);
    n--;
  }
  return arr;
};
