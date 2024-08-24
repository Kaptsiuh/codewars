function sequence(x) {
  return [...Array(x + 1).keys()].slice(1, x + 1).sort();
}
