function pak(s) {
  return s.trim() === ""
    ? ""
    : s
        .split(" ")
        .map((e, i) => (i === s.split(" ").length - 1 ? e : e + " pak"))
        .join(" ");
}
