import { Theme } from "@emotion/react";

const color = {
  black: "#141414",
};

const fontSize = {
  small: "1rem",
  medium: "1.5rem",
  large: "2rem",
};

const fontWeight = {
  regular: 400,
  medium: 500,
  bold: 700,
};

export type ColorType = typeof color;
export type FontSizeType = typeof fontSize;
export type FontWeightType = typeof fontWeight;

const theme: Theme = {
  color,
  fontSize,
  fontWeight,
};

export default theme;
