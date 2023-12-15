Array.prototype.remove_ = function (integer_list, values_list) {
  let res = [...integer_list];
  for (let i = 0; i < values_list.length; i++) {
    res = res.filter((e) => e !== values_list[i]);
  }
  return res;
};
