function bearDollars(arr) {
  let prices = {
    "close friend": 25,
    friend: 50,
    acquaintance: 100,
  };
  if (arr.length === 1 && arr[0][0] === 1) {
    return 125;
  }
  return arr.reduce(
    (acc, e) =>
      prices[e[1].toLowerCase()] ? (acc += e[0] * prices[e[1].toLowerCase()]) : (acc += e[0] * 125),
    0
  );
}
