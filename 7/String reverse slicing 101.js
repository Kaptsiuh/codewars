function reverseSlice(str) {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    let temp = [];
    for (let j = i; j < str.length; j++) {
      temp = [...temp, str.split("").reverse()[j]];
    }
    result = [...result, temp.join("")];
  }
  return result;
}
