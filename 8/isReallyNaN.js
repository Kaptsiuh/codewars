const isReallyNaN = (val) => {
  return isNaN(val) && val !== val;
};
