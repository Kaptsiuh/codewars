function BrailleReader(braille) {
  const brailleObj = {
    100000: "A",
    110000: "B",
    100100: "C",
    100110: "D",
    100010: "E",
    110100: "F",
    110110: "G",
    110010: "H",
    "010100": "I",
    "010110": "J",
    101000: "K",
    111000: "L",
    101100: "M",
    101110: "N",
    101010: "O",
    111100: "P",
    111110: "Q",
    111010: "R",
    "011100": "S",
    "011110": "T",
    101001: "U",
    111001: "V",
    "010111": "W",
    101101: "X",
    101111: "Y",
    101011: "Z",
    "000000": " ",
  };
  const arr = braille.map((e) => e.split(""));
  const result = [];
  let string = "";
  for (let i = 0; i < braille[0].length; i += 2) {
    string = braille[0][i] + braille[1][i] + braille[2][i] + braille[0][i + 1] + braille[1][i + 1] + braille[2][i + 1];
    string = string.split("").map((e) => (e === "0" ? 1 : 0));
    result.push(string);
  }
  return result.map((e) => brailleObj[e.join("")].toLowerCase()).join("");
}
