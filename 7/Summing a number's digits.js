function sumDigits(number) {
  if (String(number)[0] === "-") {
    number = String(number).split("");
    number.shift();
    number = +number.join("");
  }
  return String(number)
    .split("")
    .reduce((acc, e) => (acc += Number(e)), 0);
}
