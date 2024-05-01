function tribonacci(signature, n) {
  if (n <= signature.length && signature.length <= 3) {
    return signature.slice(0, n);
  } else if (n > 3) {
    signature.push(
      signature[signature.length - 1] +
        signature[signature.length - 2] +
        signature[signature.length - 3]
    );
    return tribonacci(signature, n - 1);
  }
  return signature;
}
