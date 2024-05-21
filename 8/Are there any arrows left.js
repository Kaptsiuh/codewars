function anyArrows(arrows) {
  return arrows.some((e) => e.damaged === undefined || e.damaged === false);
}
