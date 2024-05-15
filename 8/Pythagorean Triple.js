function isPythagoreanTriple(integers) {
  const sortArr = integers.sort((a, b) => a - b);
  return (
    Math.pow(sortArr[0], 2) + Math.pow(sortArr[1], 2) ===
    Math.pow(sortArr[2], 2)
  );
}
