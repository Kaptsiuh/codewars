function validateUsr(username) {
  const res = /^[a-z0-9_]+$/.test(username);
  return username.length >= 4 && username.length <= 16 ? res : false;
}
