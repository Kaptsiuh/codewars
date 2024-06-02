function gooseFilter(birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  let arr = [...birds];
  for (let i = 0; i < geese.length; i++) {
    arr = arr.filter((b) => b !== geese[i]);
  }
  return arr;
}
