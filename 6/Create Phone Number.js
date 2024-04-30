function createPhoneNumber(numbers) {
  numbers.splice(6, 0, "-");
  numbers.splice(3, 0, " ");
  numbers.splice(3, 0, ")");
  numbers.unshift("(");
  return numbers.join("");
}
