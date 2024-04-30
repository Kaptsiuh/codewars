const cannonsReady = (gunners) => {
  return Object.values(gunners).reduce((acc, e) => {
    return e === "nay" ? (acc += 1) : acc;
  }, 0) === 0
    ? "Fire!"
    : "Shiver me timbers!";
};
