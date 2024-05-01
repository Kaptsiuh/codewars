function rounders(value) {
  let acc = 0;
  const arr = String(value).split("");
  return +arr
    .reverse()
    .map((e, i) => {
      if (i === 0) {
        if (+e >= 5) {
          acc = 1;
          return (e = 0);
        } else {
          acc = 0;
          return (e = 0);
        }
      } else if (i < arr.length - 1) {
        e = +e + acc;
        if (+e >= 5) {
          acc = 1;
          return (e = 0);
        } else {
          acc = 0;
          return (e = 0);
        }
      } else {
        e = +e + acc;
        return e;
      }
    })
    .reverse()
    .join("");
}
