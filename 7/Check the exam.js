function checkExam(array1, array2) {
  let result = array1.reduce(
    (acc, e, i) =>
      e === array2[i] ? acc + 4 : e !== array2[i] && array2[i] !== "" ? acc - 1 : acc,
    0
  );
  return result < 0 ? 0 : result;
}
