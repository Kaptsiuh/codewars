function combineStrings(...args) {
  if (!args.length) {
    return "";
  }
  args = args.map((e) => String(e));
  const maxLength = Math.max(...args.map((e) => e.length));
  let result = "";
  for (let j = 0; j < maxLength; j++) {
    for (let i = 0; i < args.length; i++) {
      if (args[i][j] !== undefined) {
        result += args[i][j];
      }
    }
  }
  return result;
}
