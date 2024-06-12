function cutIt(arr) {
  let length = 1000;
  arr.forEach((e) => (e.length < length ? (length = e.length) : e));
  return arr.map((e) => e.slice(0, length));
}
