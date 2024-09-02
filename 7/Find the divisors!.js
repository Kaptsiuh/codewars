function divisors(integer) {
  let result = [];
  for (i = 2; i * 2 <= integer; i++) {
    if (integer % i === 0) result.push(i);
  }
  return result.length > 0 ? result : `${integer} is prime`;
}
