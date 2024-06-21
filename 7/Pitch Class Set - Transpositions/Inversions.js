function operate(pcSet, operation) {
  const operator = operation[operation.length - 1] === "I";
  const number = +operation.replace(/[a-z]/gi, "");
  const arr = pcSet.map((e) => (!operator ? (e + number) % 12 : (12 - e + number) % 12));
  return arr.sort((a, b) => a - b);
}
