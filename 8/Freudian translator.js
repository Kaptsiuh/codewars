function toFreud(string) {
  return string
    .split(" ")
    .map((e) => (e !== "" ? "sex" : ""))
    .join(" ");
}
