function isValid(formula) {
  let material1and2 = false;
  let material3and4 = false;
  let material5and6 = true;
  let material7and8 = false;
  for (let i = 0; i < formula.length; i++) {
    if (
      (formula[i] === 1 && formula.includes(2)) ||
      (formula[i] === 2 && formula.includes(1))
    ) {
      material1and2 = true;
    } else if (
      (formula[i] === 3 && formula.includes(4)) ||
      (formula[i] === 4 && formula.includes(3))
    ) {
      material3and4 = true;
    } else if (
      (formula[i] === 5 && !formula.includes(6)) ||
      (formula[i] === 6 && !formula.includes(5))
    ) {
      material5and6 = false;
    } else if (formula[i] === 7 || formula[i] === 8) {
      material7and8 = true;
    }
  }
  return !material1and2 && !material3and4 && material5and6 && material7and8;
}
