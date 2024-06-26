function spot(s1, s2) {
  return s1.split("").reduce((acc, e, i) => (e !== s2[i] ? [...acc, i] : acc), []);
}
