function checkThreeAndTwo(array) {
  let objOfLetters = {
    a: 0,
    b: 0,
    c: 0,
  };
  for (let letter of array) {
    objOfLetters[letter] += 1;
  }
  const result = Object.values(objOfLetters)
    .filter((e) => e > 1)
    .sort();
  return result.length === 2 && result[1] === 3;
}
