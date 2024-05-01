function DNAStrand(dna) {
  const dnaArr = dna.split('');
  for (let i = 0; i < dnaArr.length; i++) {
    dnaArr[i] === 'A' ? (dnaArr[i] = 'T') : dnaArr[i] === 'T' ? (dnaArr[i] = 'A') : 0;
    dnaArr[i] === 'C' ? (dnaArr[i] = 'G') : dnaArr[i] === 'G' ? (dnaArr[i] = 'C') : 0;
  }
  return dnaArr.join('');
}
