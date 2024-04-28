String.prototype.isUpperCase = function () {
  let str = "";
  for (let i = 0; i < this.length; i++) {
    str += this[i];
  }
  return this.toUpperCase() === str;
};
