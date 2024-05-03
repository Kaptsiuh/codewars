function contamination(text, char) {
  return text
    .split("")
    .map((c) => (c = char))
    .join("");
}
