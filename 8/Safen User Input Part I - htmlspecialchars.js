function htmlspecialchars(formData) {
  const characters = {
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "&": "&amp;",
  };
  return formData
    .split("")
    .map((e) => {
      return e
        .replace(/&/g, characters["&"])
        .replace(/>/g, characters[">"])
        .replace(/"/g, characters['"'])
        .replace(/</g, characters["<"]);
    })
    .join("");
}
