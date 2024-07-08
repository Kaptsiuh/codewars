function diff(a, b) {
  return [
    ...new Set([...a.filter((e) => b.indexOf(e) < 0), ...b.filter((e) => a.indexOf(e) < 0)]),
  ].sort();
}
