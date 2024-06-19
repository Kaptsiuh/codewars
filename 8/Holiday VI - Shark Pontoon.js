function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {
  if (dolphin) {
    return pontoonDistance / youSpeed < sharkDistance / (sharkSpeed / 2) ? "Alive!" : "Shark Bait!";
  }
  return pontoonDistance / youSpeed < sharkDistance / sharkSpeed ? "Alive!" : "Shark Bait!";
}
