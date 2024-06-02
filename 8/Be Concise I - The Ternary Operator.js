let describeAge = (a) => {
  let t = "You're a(n) ";
  return a <= 12
    ? t + "kid"
    : a >= 13 && a <= 17
    ? t + "teenager"
    : a >= 18 && a <= 64
    ? t + "adult"
    : t + "elderly";
};
