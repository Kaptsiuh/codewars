function strCount(str, letter) {
  let res = new RegExp('[^' + letter + ']', 'g');
  return str.replace(res, '').length;
}
