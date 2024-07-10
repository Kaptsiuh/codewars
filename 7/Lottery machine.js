function lottery(str) {
  return str.replace(/[a-z]/gi, "").length === 0
    ? "One more run!"
    : [...new Set(str.replace(/[a-z]/gi, "").split(""))].join("");
}
