import Color from 'color';

const gradientsData = {
  pink: ['#6b0f1a', '#b91372'],
  blue: ['#7f53ac', '#647dee'],
  red: ['#ee8c68', '#eb6b9d'],
  light: ['#d9e4f5', '#f5e3e6'],
  beige: ['#f1dfd1', '#f6f0ea'],
  danger: ['#eb4511', '#b02e0c'],
  buttonBlue: ['#045de9', '#09c6f9'],
};

export type GradientName = keyof typeof gradientsData;

const gradients: { [K in GradientName]: string } & { darken: { [K in GradientName]: string } } = Object.keys(
  gradientsData
).reduce<any>(
  (acc, name) => {
    const data = gradientsData[name as GradientName];
    acc[name] = `linear-gradient(315deg, ${data[0]} 0%, ${data[1]} 74%)`;
    acc.darken[name] = `linear-gradient(315deg, ${Color(data[0])
      .darken(0.3)
      .hex()} 0%, ${Color(data[1])
      .darken(0.2)
      .hex()} 74%)`;
    return acc;
  },
  {
    darken: {},
  }
);

export default gradients;
