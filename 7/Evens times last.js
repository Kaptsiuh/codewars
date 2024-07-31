function evenLast(numbers) {
  return numbers.length === 0
    ? 0
    : numbers.reduce((acc, e, i) => (i % 2 === 0 ? (acc += e) : acc), 0) *
        numbers[numbers.length - 1];
}
