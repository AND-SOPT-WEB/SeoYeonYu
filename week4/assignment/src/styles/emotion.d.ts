import "@emotion/react";
import { ColorType, FontSizeType, FontWeightType } from "./theme";

declare module "@emotion/react" {
  export interface Theme {
    color: ColorType;
    fontSize: FontSizeType;
    fontWeight: FontWeightType;
  }
}
