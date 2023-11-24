function isLeapYear(year) {
  if (year % 400 === 0) {
    return true;
  }
  return year % 100 !== 0 && year % 4 === 0 ? true : false;
}
