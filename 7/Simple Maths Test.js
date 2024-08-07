function numberProperty(n) {
  const isPrime = (n) => {
    for (let i = 2, s = Math.sqrt(n); i <= s; i++) {
      if (n % i === 0) return false;
    }
    return n > 1;
  };

  const isEven = (n) => {
    return n % 2 === 0;
  };

  const isMultiple = (n) => {
    return n % 10 === 0;
  };

  return [isPrime(n), isEven(n), isMultiple(n)];
}
