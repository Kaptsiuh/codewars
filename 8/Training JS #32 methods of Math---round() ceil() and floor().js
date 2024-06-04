function roundIt(n) {
  return n.toFixed(0).length > String(n).length - n.toFixed(0).length - 1
    ? Math.floor(n)
    : n.toFixed(0).length === String(n).length - n.toFixed(0).length - 1
    ? Math.round(n)
    : Math.ceil(n);
}
