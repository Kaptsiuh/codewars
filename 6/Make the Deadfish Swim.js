function parse( data ){
    let res = [];
    let acc = 0;
    data.split('').forEach(e => {
      e === 'i' ? 
      acc++ :
      e === 'd' ?
      acc-- :
      e === 's' ?
      acc = Math.pow(acc, 2) :
      e === 'o' ?
      res.push(acc) :
      acc
    })
    return res
  }