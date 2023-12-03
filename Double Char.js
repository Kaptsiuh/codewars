function doubleChar(str) {
  return str
    .split('')
    .map((e) => e.repeat(2))
    .join('');
}
