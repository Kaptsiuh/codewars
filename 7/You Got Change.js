function giveChange(amount) {
  const bills = [100, 50, 20, 10, 5, 1];
  const result = [];
  for (let i = 0; i < bills.length; i++) {
    result[i] = Math.floor(amount / bills[i]);
    amount %= bills[i];
  }
  return result.reverse();
}
