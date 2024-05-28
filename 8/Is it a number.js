function isDigit(s) {
  return s.trim() === "" ? false : !Number.isNaN(s * 1);
}
