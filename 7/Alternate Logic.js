function alternate(items) {
  return items.length === 0
    ? null
    : items.reduce(
        (acc, e) => (e === false && acc === false ? (acc = false) : (acc = true)),
        false
      );
}
