function calculateYears(principal, interest, tax, desired) {
  for (let i = 0; i < 666; i++) {
    if (principal >= desired) {
      return i;
    }
    principal += principal * interest - principal * interest * tax;
  }
}
