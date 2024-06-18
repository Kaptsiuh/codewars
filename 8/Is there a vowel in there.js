function isVow(a) {
  const vowels = ["a", "e", "i", "o", "u"];
  return a.map((e) =>
    vowels.includes(String.fromCharCode(e)) === true ? String.fromCharCode(e) : e
  );
}
