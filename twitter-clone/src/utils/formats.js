export const numberFormat = (value) => {
  let config = {};
  if (value > 9999) {
    config = {
      notation: "compact",
      maximumFractionDigits: 1,
      compactDisplay: "long",
    };
  }
  return Intl.NumberFormat("tr", config).format(value);
};
