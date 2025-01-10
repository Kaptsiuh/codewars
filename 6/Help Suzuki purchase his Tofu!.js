function buyTofu(cost, box) {
  let mon = box.split(" ").filter((m) => m === "mon").length;
  let monme = box.split(" ").filter((m) => m === "monme").length;
  const value = mon + monme * 60;
  const result = [mon, monme, value];
  let minCoins = 0;
  while (monme && cost >= 60) {
    cost -= 60;
    monme--;
    minCoins++;
  }
  while (mon && cost > 0) {
    cost -= 1;
    mon--;
    minCoins++;
  }
  if (cost > 0) {
    return "leaving the market";
  }
  return [...result, minCoins];
}
