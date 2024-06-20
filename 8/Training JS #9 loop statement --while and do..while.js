function padIt(str, n) {
  let star = "";
  let i = 0;
  while (i < n) {
    star += "*";
    i++;
  }
  let left = star
    .split("")
    .slice(0, Math.ceil(n / 2))
    .join("");
  let right = star
    .split("")
    .slice(Math.ceil(n / 2), n)
    .join("");
  return left + str + right;
}
