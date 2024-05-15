String.prototype.digit = function () {
  return (
    this.valueOf().trim() !== "" &&
    this.valueOf() < 10 &&
    this.valueOf() >= 0 &&
    this.valueOf().length < 2
  );
};
