function howMuchWater(water, load, clothes) {
  if (load * 2 <= clothes) {
    return "Too much clothes";
  }
  if (load > clothes) {
    return "Not enough clothes";
  }
  return +(water * 1.1 ** (clothes - load)).toFixed(2);
}
