function well(x) {
  const result = x.reduce((acc, e) => {
    if (e === "good") {
      return acc + 1;
    }
    return acc;
  }, 0);
  if (result === 0) {
    return "Fail!";
  } else if (result === 1 || result === 2) {
    return "Publish!";
  } else {
    return "I smell a series!";
  }
}
