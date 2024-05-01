function shortForm(str) {
  let arr = str.split('');
  let first = arr.shift();
  let last = arr.pop();
  console.log(first);
  return first[0] + arr.join('').replace(/[aeiouAEIOU]/g, '') + last[0];
}
