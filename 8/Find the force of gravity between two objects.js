solution = (arr_val, arr_unit) => {
  const mass = {
    kg: 1,
    g: 1e-3,
    mg: 1e-6,
    μg: 1e-9,
    lb: 0.453592,
  };
  const distance = {
    m: 1,
    cm: 1e-2,
    mm: 1e-3,
    μm: 1e-6,
    ft: 0.3048,
  };
  const [m1, m2, r] = arr_val;
  const [v1, v2, d] = arr_unit;
  const m1_kg = m1 * mass[v1];
  const m2_kg = m2 * mass[v2];
  const d_m = r * distance[d];
  return (force = (6.67e-11 * m1_kg * m2_kg) / Math.pow(d_m, 2));
};
