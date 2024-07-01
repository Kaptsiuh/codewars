function trigrams(phrase) {
  let result = "";
  for (let i = 0; i < phrase.length - 1; i++) {
    if (i === 0) {
      phrase[i] === " " ? (result += "_") : (result += phrase[i]);
      phrase[i + 1] === " " ? (result += "_") : (result += phrase[i + 1]);
      phrase[i + 2] === " " ? (result += "_") : (result += phrase[i + 2]);
      i++;
    } else {
      result += " ";
      phrase[i - 1] === " " ? (result += "_") : (result += phrase[i - 1]);
      phrase[i] === " " ? (result += "_") : (result += phrase[i]);
      phrase[i + 1] === " " ? (result += "_") : (result += phrase[i + 1]);
    }
  }
  return phrase.length < 3 ? "" : result;
}
