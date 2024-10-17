function isValidIP(str) {
    const array = str.split('.')
    if (array.length !== 4) {
      return false
    }
    return array.every(e => /^[0-9]+$/.test(e) && !isNaN(e) && e.length > 0 && +e >= 0 && +e <= 255 && (e.length === 1 || e[0] !== '0'))
  }