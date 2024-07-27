function deEmojify(emojiString) {
  const emoji = {
    ":)": 0,
    ":D": 1,
    ">(": 2,
    ">:C": 3,
    ":/": 4,
    ":|": 5,
    ":O": 6,
    ";)": 7,
    "^.^": 8,
    ":(": 9,
  };
  return emojiString
    .split("  ")
    .map((e) => e.split(" ").reduce((acc, emo) => (acc += emoji[emo]), ""))
    .map((e) => String.fromCharCode(e))
    .join("");
}
