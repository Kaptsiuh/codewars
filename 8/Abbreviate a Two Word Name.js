function abbrevName(name) {
  const names = name.split(" ");
  return `${names[0][0].toUpperCase()}.${names[1][0].toUpperCase()}`;
}
