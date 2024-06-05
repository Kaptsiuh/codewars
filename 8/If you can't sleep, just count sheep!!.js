var countSheep = function (num){
  if (num === 0) {
    return ''
  }
  return (num === 1) ? `${num} sheep...` : (countSheep(num - 1) + `${num} sheep...`)
}