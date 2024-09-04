function sumOfIntegersInString(s) {
  return s.replace(".", "w").match(/-?\d+(\.\d+)?/g)
    ? s
        .replace(".", "w")
        .match(/-?\d+(\.\d+)?/g)
        .reduce((acc, e) => (acc += +e), 0)
    : 0;
}
