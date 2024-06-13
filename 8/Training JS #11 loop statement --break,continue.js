function grabDoll(dolls) {
  var bag = [];
  for (let i = 0; dolls.length > i; i++) {
    if (dolls[i] === "Hello Kitty" || dolls[i] === "Barbie doll") {
      bag.push(dolls[i]);
    } else {
      continue;
    }
    if (bag.length === 3) {
      break;
    }
  }
  return bag;
}
