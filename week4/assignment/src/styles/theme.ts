const color = {
  black: "#141414",
  gray: "#A9A9A9",
  white: "#FFFFFF",
  green: "#6B8A7A",
  deepGreen: "#254336",
  error: "red",
};

const fontSize = {
  small: "1.25rem",
  medium: "1.5rem",
  large: "2.4rem",
};

const fontWeight = {
  medium: 600,
  bold: 700,
};

export type ColorType = typeof color;
export type FontSizeType = typeof fontSize;
export type FontWeightType = typeof fontWeight;

const theme = { color, fontSize, fontWeight };

export default theme;
