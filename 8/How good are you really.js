function betterThanAverage(classPoints, yourPoints) {
  return (
    classPoints.reduce((acc, e) => (acc += e)) / classPoints.length < yourPoints
  );
}
