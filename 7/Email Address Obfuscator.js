obfuscate = function (email) {
  return email.replace(/@/g, " [at] ").replace(/[.]/g, " [dot] ");
};
