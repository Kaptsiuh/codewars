function guessBlue(blueStart, redStart, bluePulled, redPulled) {
  const curentRedBag = redStart - redPulled;
  const curentBlueBag = blueStart - bluePulled;
  return curentBlueBag / (curentBlueBag + curentRedBag);
}
