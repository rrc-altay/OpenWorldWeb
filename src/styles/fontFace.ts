import { css } from "styled-components";

const fontFace = css`
  @font-face {
    font-family: Lato;
    src: url("/assets/fonts/Lato-Regular.woff2") format(woff2),
      url("/assets/fonts/Lato-Regular.woff") format(woff);
    font-weight: 400;
    font-style: normal;
    font-stretch: normal;
    font-variant: normal;
  }

  @font-face {
    font-family: Lato;
    src: url("/assets/fonts/Lato-SemiBold.woff2") format(woff2),
      url("/assets/fonts/Lato-SemiBold.woff") format(woff);
    font-weight: 600;
    font-style: normal;
    font-stretch: normal;
    font-variant: normal;
  }

  @font-face {
    font-family: Lato;
    src: url("/assets/fonts/Lato-Bold.woff2") format(woff2),
      url("/assets/fonts/Lato-Bold.woff") format(woff);
    font-weight: 700;
    font-style: normal;
    font-stretch: normal;
    font-variant: normal;
  }

  @font-face {
    font-family: Lato;
    src: url("/assets/fonts/Lato-ExtraBold.woff2") format(woff2),
      url("/assets/fonts/Lato-ExtraBold.woff") format(woff);
    font-weight: 800;
    font-style: normal;
    font-stretch: normal;
    font-variant: normal;
  }
`;

export default fontFace;
