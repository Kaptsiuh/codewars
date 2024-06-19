function pickIt(arr) {
  var odd = [],
    even = [];
  for (let i = 0; i < arr.length; i++) {
    arr[i] % 2 ? odd.push(arr[i]) : even.push(arr[i]);
  }
  return [odd, even];
}
