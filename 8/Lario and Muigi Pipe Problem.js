function pipeFix(numbers) {
  const arr = [];
  for (let i = numbers[0]; i <= numbers[numbers.length - 1]; i++) {
    arr.push(i);
  }
  return arr;
}
