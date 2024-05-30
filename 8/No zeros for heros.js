function noBoringZeros(n) {
  let isFirst = true;
  return +String(n)
    .split("")
    .reverse()
    .map((e, i) => {
      if (e === "0" && isFirst === true) {
        return "";
      } else {
        isFirst = false;
        return e;
      }
    })
    .reverse()
    .join("");
}
