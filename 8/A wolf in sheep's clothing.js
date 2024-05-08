function warnTheSheep(queue) {
  const wolf = queue.reverse().indexOf("wolf");
  return wolf === 0
    ? "Pls go away and stop eating my sheep"
    : `Oi! Sheep number ${wolf}! You are about to be eaten by a wolf!`;
}
