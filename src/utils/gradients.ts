const gradientsData = {
  pink: ['#6b0f1a', '#b91372'],
  blue: ['#7f53ac', '#647dee'],
  red: ['#ee8c68', '#eb6b9d'],
  light: ['#d9e4f5', '#f5e3e6'],
  beige: ['#f1dfd1', '#f6f0ea'],
};

export type GradientName = keyof typeof gradientsData;

const gradients: { [K in GradientName]: string } & { reversed: { [K in GradientName]: string } } = Object.keys(
  gradientsData
).reduce<any>(
  (acc, name) => {
    const data = gradientsData[name];
    acc[name] = `linear-gradient(315deg, ${data[0]} 0%, ${data[1]} 74%)`;
    acc.reversed[name] = `linear-gradient(315deg, ${data[1]} 0%, ${data[0]} 74%)`;
    return acc;
  },
  {
    reversed: {},
  }
);

export default gradients;
