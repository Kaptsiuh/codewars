function arrayMadness(a, b) {
  return (
    a.reduce((acc, e) => (acc += e ** 2), 0) >
    b.reduce((acc, e) => (acc += e ** 3), 0)
  );
}
