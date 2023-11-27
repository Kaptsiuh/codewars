function getCount(str) {
  return str.replace(/[bcdfghjklmnpqrstvwxyz ]/g, '').length;
}
