function removeEveryOther(arr) {
  return arr.filter((e, i) => (i % 2 === 0 ? e : ""));
}
