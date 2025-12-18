export const parseNum = (v) => {
  const n = parseFloat((v || "").toString().replace(/,/g, ""));
  return isNaN(n) ? 0 : n;
};

export const calcOldSlabTax = (taxable, age) => {
  let slabs =
    age === "Below 60"
      ? [
          [250000, 0],
          [500000, 0.05],
          [1000000, 0.2],
          [Infinity, 0.3],
        ]
      : age === "60 - 80"
      ? [
          [300000, 0],
          [500000, 0.05],
          [1000000, 0.2],
          [Infinity, 0.3],
        ]
      : [
          [500000, 0],
          [1000000, 0.2],
          [Infinity, 0.3],
        ];

  let tax = 0,
    prev = 0;

  slabs.forEach(([limit, rate]) => {
    if (taxable > prev) {
      tax += (Math.min(limit, taxable) - prev) * rate;
      prev = limit;
    }
  });

  return tax;
};

export const calcNewSlabTax = (taxable) => {
  const slabs = [
    [400000, 0],
    [800000, 0.05],
    [1200000, 0.1],
    [1600000, 0.15],
    [2000000, 0.2],
    [2400000, 0.25],
    [Infinity, 0.3],
  ];

  let tax = 0,
    prev = 0;

  slabs.forEach(([limit, rate]) => {
    if (taxable > prev) {
      tax += (Math.min(limit, taxable) - prev) * rate;
      prev = limit;
    }
  });

  return tax;
};
