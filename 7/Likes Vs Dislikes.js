function likeOrDislike(buttons) {
  return buttons.length === 0
    ? "Nothing"
    : buttons.reduce((acc, e, i) => (i === 0 ? (acc = e) : acc !== e ? (acc = e) : "Nothing"));
}
