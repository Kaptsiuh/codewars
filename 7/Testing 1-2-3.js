var number = function (array) {
  array.map((item, i) => {
    array[i] = `${i + 1}: ${item}`;
  });
  return array;
};
