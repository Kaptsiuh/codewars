function neutralise(s1, s2) {
  return s1
    .split("")
    .map((e, i) => (e !== s2.split("")[i] ? "0" : e))
    .join("");
}
