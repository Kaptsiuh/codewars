function takeUmbrella(weather, chance) {
  return weather === "sunny" && chance <= 0.5
    ? false
    : weather === "cloudy" && chance <= 0.2
    ? false
    : true;
}
