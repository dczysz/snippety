export const ratios = [
  ['1.00', '1:1'],
  ['1.50', '3:2'],
  ['1.33', '4:3'],
  ['1.78', '16:9'],
];

export const checkRatio = ratio => {
  const match = ratios.filter(r => ratio === r[0]);
  return match.length ? match[0][1] : '';
};
