function fuelPrice(litres, pricePerLitre) {
  const discounts = [
    [2, 5],
    [4, 10],
    [6, 15],
    [8, 20],
    [10, 25],
  ];
  return +(
    (pricePerLitre * 100 * litres -
      discounts.reduce((acc, e) => (litres >= e[0] ? (acc = e[1]) : acc), 0) *
        litres) *
    0.01
  ).toFixed(2);
}
