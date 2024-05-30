function cookie(x) {
  let who = "the dog";
  switch (true) {
    case typeof x === "number":
      who = "Monica";
      break;
    case typeof x === "string":
      who = "Zach";
      break;
  }
  return `Who ate the last cookie? It was ${who}!`;
}
