function high(x) {
  let arr = x.split(' ');
  const sum = {};
  96;
  arr.forEach((item, pos) => {
    let acc = 0;
    for (let i = 0; i < item.length; i++) {
      acc += item[i].charCodeAt() - 96;
      if (i === item.length - 1) {
        sum[pos] = acc;
      }
    }
  });
  return arr[Object.entries(sum).sort(([, a], [, b]) => b - a)[0][0]];
}
