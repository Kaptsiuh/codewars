const sequenceSum = (begin, end, step) => {
  let acc = begin;
  let result = acc;
  if (begin > end) {
    return 0;
  }
  while (acc + step <= end) {
    acc += step;
    result += acc;
  }
  return result;
};
