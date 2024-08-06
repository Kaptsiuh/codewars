function riders(stations) {
  let result = 1;
  stations.reduce((acc, e) => (acc + e > 100 ? ((result += 1), (acc = e)) : (acc += e)), 0);
  return result;
}
