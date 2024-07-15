function flyTime(dist, train, fly) {
  return train ? (dist / (train * 2)) * fly : null;
}
