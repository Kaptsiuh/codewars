function hollowTriangle(n) {
  let result = [];
  for (let i = 0; i < n; i++) {
    if (i === 0) {
      result.push("_".repeat(n - 1) + "#" + "_".repeat(n - 1));
    } else if (i + 1 === n) {
      result.push("#".repeat(n + n - 1));
    } else if (i === 1) {
      result.push("_".repeat(n - i - 1) + "#" + "_" + "#" + "_".repeat(n - i - 1));
    } else {
      result.push("_".repeat(n - i - 1) + "#" + "_".repeat(i + i - 1) + "#" + "_".repeat(n - i - 1));
    }
  }
  return result;
}
