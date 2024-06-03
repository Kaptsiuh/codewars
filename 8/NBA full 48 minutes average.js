function pointsPer48(ppg, mpg) {
  if (mpg === 0) return 0;
  return +((48 / mpg) * ppg).toFixed(1);
}
