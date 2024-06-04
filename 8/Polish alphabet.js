function correctPolishLetters(string) {
  const pollishLetters = {
    ą: "a",
    ć: "c",
    ę: "e",
    ł: "l",
    ń: "n",
    ó: "o",
    ś: "s",
    ź: "z",
    ż: "z",
  };
  return string
    .split("")
    .map((e) =>
      Object.keys(pollishLetters).indexOf(e) >= 0 ? (e = pollishLetters[e]) : e
    )
    .join("");
}
