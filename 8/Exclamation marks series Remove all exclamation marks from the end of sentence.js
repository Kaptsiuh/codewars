function remove(string) {
  let markSwitch = true;
  return string
    .split("")
    .reverse()
    .map((e) => {
      return e === "!" && markSwitch === true ? "" : ((markSwitch = false), e);
    })
    .reverse()
    .join("");
}
