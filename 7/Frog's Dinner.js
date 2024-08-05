function frogContest(n) {
  let chris = 0;
  for (let i = n; i > 0; i--) {
    chris += i;
  }
  let tom = 0;
  for (let i = Math.floor(chris / 2); i > 0; i--) {
    tom += i;
  }
  let cat = 0;
  for (let i = tom + chris; i > 0; i--) {
    cat += i;
  }
  return `Chris ate ${chris} flies, Tom ate ${tom} flies and Cat ate ${cat} flies`;
}
