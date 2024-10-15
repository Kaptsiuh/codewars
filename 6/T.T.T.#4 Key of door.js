function findKey(nums){
    let result = []
    const arr = []
    for (let i = 0; i < String(nums[0]).length; i++) {
    arr.push([])
    nums.forEach(e => arr[i] = [...arr[i], String(e)[i]])
    result.push(arr[i].filter(item => arr[i].indexOf(item) === arr[i].lastIndexOf(item)))
    }
    return result.join('')
  }