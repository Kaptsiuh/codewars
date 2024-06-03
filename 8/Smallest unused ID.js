function nextId(ids) {
  for (let i = 0; ids.length >= i; i++) {
    if (ids.includes(i) !== true) {
      return i;
    }
  }
}
