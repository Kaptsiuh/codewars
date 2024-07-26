function divisibleByLast(n) {
  return String(n)
    .split("")
    .reduce(
      (acc, e, i, arr) =>
        i === 0 ? [...acc, false] : e % arr[i - 1] === 0 ? [...acc, true] : [...acc, false],
      []
    );
}
