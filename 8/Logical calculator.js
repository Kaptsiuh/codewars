function logicalCalc(array, op) {
  let result = array[0];
  for (let i = 1; i < array.length; i++) {
    op === "AND"
      ? (result = result && array[i])
      : op === "OR"
      ? (result = result || array[i])
      : (result = result != array[i]);
  }
  return result;
}
