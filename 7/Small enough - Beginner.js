function smallEnough(a, limit) {
  return a.filter((e) => e <= limit).length === a.length;
}
