function longestWord(stringOfWords) {
  return stringOfWords.split(" ").reduce((acc, e) => (acc.length <= e.length ? (acc = e) : acc));
}
