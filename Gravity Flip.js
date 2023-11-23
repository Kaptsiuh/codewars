const flip = (d, a) => {
  const sortArr = (i, y) => {
    return i - y;
  };
  return d === 'L' ? a.sort(sortArr).reverse() : a.sort(sortArr);
};
