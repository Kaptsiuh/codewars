function centroid(c) {
  let cx = 0;
  let cy = 0;
  let cz = 0;
  c.forEach((e) => {
    cx += e[0];
    cy += e[1];
    cz += e[2];
  });
  cx = (cx / c.length).toFixed(2);
  cy = (cy / c.length).toFixed(2);
  cz = (cz / c.length).toFixed(2);
  return [+cx, +cy, +cz];
}
