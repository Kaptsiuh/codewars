function datingRange(age) {
  let min;
  let max;
  if (age <= 14) {
    min = age - 0.1 * age;
    max = age + 0.1 * age;
  } else {
    min = age / 2 + 7;
    max = (age - 7) * 2;
  }
  return Math.floor(min) + "-" + Math.floor(max);
}
