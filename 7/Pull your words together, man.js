function sentencify(words) {
  return words.join(" ").charAt(0).toUpperCase() + words.join(" ").slice(1) + ".";
}
