function cubeChecker(volume, side) {
  return volume <= 0 ? false : side ** 3 === volume;
}
