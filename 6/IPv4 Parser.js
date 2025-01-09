function ipv4Parser(ip, mask) {
  let ipArr = ip.split(".");
  let ipBinary = ipArr.map((e) => Number(e).toString(2).padStart(8, "0")).map((e) => e.split(""));
  let maskArr = mask.split(".");
  let maskBinary = maskArr.map((e) => Number(e).toString(2).padStart(8, "0")).map((e) => e.split(""));
  let resultBinary = [];
  for (let i = 0; i < ipArr.length; i++) {
    let tempBinary = "";
    for (let j = 0; j < ipBinary[i].length; j++) {
      tempBinary += Number(ipBinary[i][j]) & Number(maskBinary[i][j]);
    }
    resultBinary.push(tempBinary);
  }
  const result1 = resultBinary.map((e) => parseInt(e, 2));
  const result2 = ipArr.map((e, i) => +e - result1[i]);
  return [result1.join("."), result2.join(".")];
}
