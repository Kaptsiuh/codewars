function isPangram(string) {
  return !'abcdefghijklmnopqrstuvwxyz'.replace(
    new RegExp('[' + string.toLowerCase().replace(/\s/g, '') + ']', 'g'),
    ''
  );
}
