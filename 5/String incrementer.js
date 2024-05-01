function incrementString(strng) {
  try {
    if (
      strng.match(/\d+$/)[0].toString().length > (+strng.match(/\d+$/)[0] + 1).toString().length
    ) {
      return (
        strng.slice(0, -(+strng.match(/\d+$/)[0] + 1).toString().length) +
        (+strng.match(/\d+$/)[0] + 1).toString()
      );
    } else if (
      strng.match(/\d+$/)[0].toString().length === (+strng.match(/\d+$/)[0] + 1).toString().length
    ) {
      return strng.replace(/\d+$/, '') + (+strng.match(/\d+$/)[0] + 1).toString();
    }
    return (
      strng.slice(0, -(+strng.match(/\d+$/)[0] + 1).toString().length + 1) +
      (+strng.match(/\d+$/)[0] + 1).toString()
    );
  } catch (err) {
    return strng + '1';
  }
}
