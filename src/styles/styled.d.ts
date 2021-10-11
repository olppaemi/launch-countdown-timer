import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    fonts: {
      basic: string;
    };
    palette: {
      grayishBlue: string;
      softRed: string;
      white: string;
      darkDesaturatedBlue: string;
      veryDarkBlue: string;
      veryBlackBlue: string;
    };
  }
}
