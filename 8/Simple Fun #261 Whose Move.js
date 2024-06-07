function whoseMove(lastPlayer, win) {
  let temp = "";
  lastPlayer === "black" ? (temp = "white") : (temp = "black");
  return (lastPlayer === "black" && win) || (lastPlayer === "white" && win) ? lastPlayer : temp;
}
