function generateShape(integer) {
  return `${"+".repeat(integer)}\n`.repeat(integer).slice(0, -1);
}
