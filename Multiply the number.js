function multiply(number) {
  const raised = String(Math.abs(number)).length;
  return number * 5 ** raised;
}
