function validateCode(code) {
  return String(code).length !== String(code).replace(/^[123]/, "").length;
}
