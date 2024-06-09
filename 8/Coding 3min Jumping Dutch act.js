function sc(floor) {
  let result = "";
  if (floor <= 1) return "";
  if (floor > 6) {
    for (let i = 0; i < floor; floor--) {
      floor === 1 ? (result += "Pa!") : (result += "Aa~ ");
    }
  } else {
    for (let i = 0; i < floor; floor--) {
      floor === 1 ? (result += "Pa! Aa!") : (result += "Aa~ ");
    }
  }
  return result;
}
