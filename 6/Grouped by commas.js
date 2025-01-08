function groupByCommas(n) {
    return n.toString().split('').reverse().reduce((acc, e, i) => i % 3 === 0 && i !== 0 ? acc += ',' + e : acc += e).split('').reverse().join('')
  }