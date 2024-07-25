function tailSwap(arr) {
  const temp1 = arr[0];
  const temp2 = arr[1];
  arr[0] = arr[0].replace(/:.*/, "") + ":" + arr[1].replace(/.*:/, "");
  arr[1] = temp2.replace(/:.*/, "") + ":" + temp1.replace(/.*:/, "");
  return arr;
}
