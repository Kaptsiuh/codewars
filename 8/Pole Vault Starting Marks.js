function startingMark(bodyHeight) {
  // Remember: Body height of 1.52 m --> starting mark: 9.45 m
  //           Body height of 1.83 m --> starting mark: 10.67 m
  // All other starting marks are based on these guidelines!
  const height = 1.83 - 1.52;
  const starting = 10.67 - 9.45;
  let coef = starting / height;
  return Math.round((9.45 + coef * (bodyHeight - 1.52)) * 100) / 100;
}
