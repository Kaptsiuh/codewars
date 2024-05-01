function solution(string) {
  const arr = [];
  let arrSollution = string.split('');
  for (let i = 0; i < string.length; i++) {
    string[i] === string[i].toUpperCase() ? arr.push(i) : 0;
  }
  arr.map((item) => (arrSollution[item] = ` ${arrSollution[item]}`));
  return arrSollution.join('');
}
