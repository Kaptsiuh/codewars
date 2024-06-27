function divCon(x) {
  let number = 0;
  let string = 0;
  x.forEach((e) => (typeof e === "number" ? (number += e) : (string += +e)));
  return number - string;
}
