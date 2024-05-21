function squareOrSquareRoot(array) {
  return array.map((e) =>
    Math.sqrt(e) === Math.floor(Math.sqrt(e)) ? Math.sqrt(e) : e ** 2
  );
}
