import { createGlobalStyle, css } from "styled-components";
import reset from "styled-reset";
import { rem } from "./utils";

const globalStyle = css`
  ${reset}
  *, 
  *::before, 
  *::after {
    box-sizing: border-box;
  }
  body {
    font-family: ${({ theme }) => theme.fonts.basic};
    font-size: ${rem(14)};
    font-weight: 700;
  }
  a {
    text-decoration: none;
    outline: none;
  }
  a:hover,
  a:active,
  a:visited {
    text-decoration: none;
  }
`;

const GlobalStyle = createGlobalStyle`
  ${globalStyle}
`;

export default GlobalStyle;
