function rot13(message) {
  const alphabet = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];
  const arr = message.split('');
  if (message === undefined) {
    return;
  }
  arr.map((item, i) => {
    let sum = 0;
    let check = 0;
    alphabet.forEach((elem, i) => {
      return elem === item.toUpperCase() ? (sum = i) : (check += 1);
    });
    if (check === 26) {
      return item;
    }
    sum += 13;
    sum > 26 ? (sum -= 26) : 0;
    sum === 26 ? (sum = 0) : 0;
    return item === item.toUpperCase()
      ? (arr[i] = alphabet[sum])
      : (arr[i] = alphabet[sum].toLowerCase());
  });
  return arr.join('');
}
