function toCsvText(array) {
  return array.reduce((acc, e, i) => {
    return array.length - 1 !== i
      ? (acc += `${e.join()}\n`)
      : (acc += `${e.join()}`);
  }, "");
}
