splitMessage = function(message, count){
    if (count === 0 || count === null) {
      return null
    }
    if (message === null) {
      let ressultForNoMessage = []
      for (let i = 0; i < count; i++) {
        ressultForNoMessage.push('')
      }
      return ressultForNoMessage
    }
    let res = []
    for (let i = 0; i < count; i++) {
      res.push(message.split('').reduce((acc, e, index) => index % count === i ? acc += e : acc += '-',''))
    }
    return res.length === 0 ? null : res
  }