class Hex {
  constructor(value) {
    this.value = value;
  }

  toString() {
    return "0x" + this.value.toString(16).toUpperCase();
  }

  toJSON() {
    return this.toString();
  }

  valueOf() {
    return this.value;
  }

  equals(otherHex) {
    return this.value === otherHex.valueOf();
  }

  plus(other) {
    return new Hex(this.value + other.valueOf());
  }

  minus(other) {
    return new Hex(this.value - other.valueOf());
  }

  static parse(hexString) {
    return parseInt(hexString, 16);
  }
}
