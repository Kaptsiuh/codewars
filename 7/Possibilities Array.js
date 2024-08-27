function isAllPossibilities(x) {
  const newSet = [...new Set(x)];
  return (
    newSet.sort((a, b) => a - b)[newSet.length - 1] === x.length - 1 &&
    newSet.length === x.length &&
    newSet.sort()[0] >= 0
  );
}
