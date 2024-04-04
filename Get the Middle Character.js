function getMiddle(s) {
  const middleNumber = s.length / 2;
  return s.length % 2 === 0
    ? s[middleNumber - 1] + s[middleNumber]
    : s[Math.floor(middleNumber)];
}
