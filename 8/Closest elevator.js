function elevator(left, right, call) {
  if (left === right) {
    return "right";
  }
  if (left < right && left < call) {
    return "right";
  }
  if (left < right && left > call) {
    return "left";
  }
  if (left > right && left <= call) {
    return "left";
  }
  if (left > right && left > call) {
    return "right";
  }
  return "left";
}
