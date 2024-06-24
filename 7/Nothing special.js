function nothingSpecial(str) {
  return typeof str === "string"
    ? str.replace(/[!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]/g, "")
    : "Not a string!";
}
