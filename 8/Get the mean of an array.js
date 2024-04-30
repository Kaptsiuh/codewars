function getAverage(marks) {
  return Math.floor(marks.reduce((acc, e) => (acc += e)) / marks.length);
}
