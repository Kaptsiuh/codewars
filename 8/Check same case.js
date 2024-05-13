function sameCase(a, b) {
  const result = `${a}${b}`.replace(/[a-z]/g, "");
  if (`${a}${b}`.replace(/[a-z]/gi, "").length > 0) {
    return -1;
  }
  return result.length === 2 || result.length === 0 ? 1 : 0;
}
