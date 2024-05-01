function printerError(s) {
  return `${s.replace(/[a-mA-M]/g, '').length}/${s.length}`;
}
