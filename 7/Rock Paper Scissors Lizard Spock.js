function rpsls(pl1, pl2) {
  const game = {
    scissors: ["paper", "lizard"],
    paper: ["rock", "spock"],
    rock: ["scissors", "lizard"],
    lizard: ["paper", "spock"],
    spock: ["scissors", "rock"],
  };
  return game[pl1].includes(pl2)
    ? "Player 1 Won!"
    : game[pl2].includes(pl1)
    ? "Player 2 Won!"
    : "Draw!";
}
