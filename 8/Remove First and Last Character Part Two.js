function array(string) {
  const arr = string.split(",");
  return arr.length > 2 ? arr.slice(1, arr.length - 1).join(" ") : null;
}
