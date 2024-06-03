function none(arr, fun) {
  return !arr.map(fun).includes(true);
}
