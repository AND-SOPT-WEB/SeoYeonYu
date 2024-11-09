import { css } from "@emotion/react";
import reset from "./reset";

const globalStyle = css`
  ${reset}
  * {
    box-sizing: border-box;
  }

  html,
  body {
    font-size: 62.5%;
    width: 100%;
    scroll-behavior: smooth;
  }

  body {
    background-color: whitesmoke;
  }

  button {
    border: none;
    outline: none;
  }
`;

export default globalStyle;
