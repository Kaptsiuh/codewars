function isOpposite(s1, s2) {
  let toggle = true;
  if (s1.length !== s2.length || s1.length === 0) {
    return false;
  }
  for (let i = 0; i < s1.length; i++) {
    const upper =
      s1[i].toUpperCase() === s1[i] && s2[i].toLowerCase() === s2[i];
    const lower =
      s1[i].toLowerCase() === s1[i] && s2[i].toUpperCase() === s2[i];
    toggle === false ? "" : upper || lower ? "" : (toggle = false);
  }
  return toggle;
}
