function testit(act, s) {
  return act
    .map((e, i) => (s[i] === "_" && e === "jump" ? "x" : s[i] === "|" && e === "run" ? "/" : s[i]))
    .join("");
}
