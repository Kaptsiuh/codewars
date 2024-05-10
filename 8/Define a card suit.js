function defineSuit(card) {
  const cards = {
    "♣": "clubs",
    "♦": "diamonds",
    "♥": "hearts",
    "♠": "spades",
  };
  return cards[card[card.length - 1]];
}
