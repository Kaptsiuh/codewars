function duplicateCount(text) {
  const letters = {};
  for (let i = 0; i < text.length; i++) {
    !letters[text[i].toLowerCase()]
      ? (letters[text[i].toLowerCase()] = 1)
      : (letters[text[i].toLowerCase()] += 1);
  }
  return Object.values(letters).filter((l) => l !== 1).length;
}
