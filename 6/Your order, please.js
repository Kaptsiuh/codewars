function order(words) {
  let result = [];
  words.split(" ").forEach((e) => (result[+e.replace(/[a-z]/gi, "") - 1] = e));
  return result.join(" ");
}
