function validateHello(greetings) {
  const res = new RegExp("hello|ciao|salut|hallo|hola|ahoj|czesc", "i");
  return res.test(greetings);
}
