function drawStairs(n) {
  let str = ''
  let space = '' 
  for(let i = 1; i < n; i++) {
    str = 'I\n' + space + str
    space += ' '
  }
  return str.split(' ').reverse().join(' ') + space + 'I'
}