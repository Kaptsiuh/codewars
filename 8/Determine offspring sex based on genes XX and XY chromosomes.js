function chromosomeCheck(sperm) {
  return sperm.split("").indexOf("Y") !== -1
    ? "Congratulations! You're going to have a son."
    : "Congratulations! You're going to have a daughter.";
}
