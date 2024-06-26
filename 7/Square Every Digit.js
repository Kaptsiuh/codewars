function squareDigits(num) {
  return +String(num)
    .split("")
    .map((e) => Math.pow(e, 2))
    .join("");
}
