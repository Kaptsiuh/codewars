function count(string) {
  const result = {};
  string.split('').forEach(e => {
    result.hasOwnProperty(`${e}`) === true ? 
      result[e] += 1 : result[e] = 1
  })
  return result;
}