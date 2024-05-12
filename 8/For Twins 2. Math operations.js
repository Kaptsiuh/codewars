function iceBrickVolume(radius, bottleLength, rimLength) {
  return Math.round(
    Math.sqrt((radius * 2) ** 2 / 2) ** 2 * (bottleLength - rimLength)
  );
}
