function aliasGen() {
  return isNaN(+arguments["0"][0]) && isNaN(+arguments["1"][0])
    ? `${firstName[arguments["0"][0].toUpperCase()]} ${
        surname[arguments["1"][0].toUpperCase()]
      }`
    : "Your name must start with a letter from A - Z.";
}
