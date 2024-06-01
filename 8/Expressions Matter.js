function expressionMatter(a, b, c) {
  const first = a * (b + c);
  const second = a * b * c;
  const third = a + b * c;
  const fourth = (a + b) * c;
  const fifth = a + b + c;
  return Math.max(first, second, third, fourth, fifth);
}
