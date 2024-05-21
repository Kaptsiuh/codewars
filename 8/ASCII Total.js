function uniTotal(string) {
  return string.split("").reduce((acc, e) => (acc += e.charCodeAt()), 0);
}
