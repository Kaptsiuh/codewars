function findNeedle(haystack) {
  let acc = -1;
  let res = haystack.filter((e, i) => {
    if (e === 'needle') {
      return (acc = i);
    }
  });
  return acc <= 0 ? `Your function didn't return anything` : `found the needle at position ${acc}`;
}
