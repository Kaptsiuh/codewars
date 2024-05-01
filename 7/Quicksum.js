function quicksum(packet) {
  const alphabetObject = {};
  const alphabet = ' ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  for (let i = 0; i < alphabet.length; i++) {
    const letter = alphabet[i];
    alphabetObject[letter] = i;
  }
  let skip = false;
  return packet.split('').reduce((acc, e, i) => {
    if (alphabetObject.hasOwnProperty(e) && skip === false) {
      return (acc += alphabetObject[e] * (i + 1));
    } else {
      skip = true;
      return (acc = 0);
    }
  }, 0);
}
