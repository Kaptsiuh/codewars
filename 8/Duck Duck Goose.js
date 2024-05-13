function duckDuckGoose(players, goose) {
  goose % players.length === 0
    ? (goose = players.length)
    : (goose = goose % players.length);
  return players[goose - 1].name;
}
