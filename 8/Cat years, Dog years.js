var humanYearsCatYearsDogYears = function (humanYears) {
  const cat = [15, 9, 4];
  const dog = [15, 9, 5];
  if (humanYears === 1) {
    return [humanYears, cat[0], dog[0]];
  }
  if (humanYears === 2) {
    return [humanYears, cat[0] + cat[1], dog[0] + dog[1]];
  }
  if (humanYears > 2) {
    return [
      humanYears,
      cat[0] + cat[1] + cat[2] * (humanYears - 2),
      dog[0] + dog[1] + dog[2] * (humanYears - 2),
    ];
  }
};
