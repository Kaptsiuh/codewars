function bulbMaze(maze) {
  return !maze
    .split("")
    .map((e, i) => {
      if (i === 0 || i % 2 === 0) {
        return e === "x" || e === " ";
      } else {
        return e === "o" || e === " ";
      }
    })
    .includes(false);
}
