function digitalRoot(n) {
  const result = String(n)
    .split("")
    .reduce((acc, n) => {
      return acc + +n;
    }, 0);
  if (String(result).length > 1) {
    return digitalRoot(result);
  } else {
    return result;
  }
}
