function blackAndWhite(arr) {
  if (Array.isArray(arr) === false) {
    return "It's a fake array";
  }
  return [...new Set(arr)].filter((e) => e === 5 || e === 13).length === 2
    ? "It's a black array"
    : "It's a white array";
}
