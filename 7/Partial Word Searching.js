function wordSearch(query, seq) {
  return seq.filter((e) => e.toLowerCase().includes(query.toLowerCase())).length === 0
    ? ["Empty"]
    : seq.filter((e) => e.toLowerCase().includes(query.toLowerCase()));
}
