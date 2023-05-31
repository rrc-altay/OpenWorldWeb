import { createGlobalStyle } from "styled-components";

const FontFace = createGlobalStyle`
  @font-face {
    font-family: "Lato";
    src: local("Lato Regular"), local("Lato-Regular"),
      url("/assets/fonts/Lato-Regular.woff2") format("woff2"),
      url("/assets/fonts/Lato-Regular.woff") format("woff"),
      url("/assets/fonts/Lato-Regular.ttf") format("truetype");
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: "Lato";
    src: local("Lato Semi Bold"), local("Lato-Semi-Bold"),
      url("/assets/fonts/Lato-Semibold.woff2") format("woff2"),
      url("/assets/fonts/Lato-Semibold.woff") format("woff"),
      url("/assets/fonts/Lato-Semibold.ttf") format("truetype");
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: "Lato";
    src: local("Lato Bold"), local("Lato-Bold"),
      url("/assets/fonts/Lato-Bold.woff2") format("woff2"),
      url("/assets/fonts/Lato-Bold.woff") format("woff"),
      url("/assets/fonts/Lato-Bold.ttf") format("truetype");
    font-weight: 700;
    font-style: normal;
  }
  //
  @font-face {
    font-family: "Lato";
    src: local("Lato Heavy"), local("Lato-Heavy"),
      url("/assets/fonts/Lato-Heavy.woff2") format("woff2"),
      url("/assets/fonts/Lato-Heavy.woff") format("woff"),
      url("/assets/fonts/Lato-Heavy.ttf") format("truetype");
    font-weight: 800;
    font-style: normal;
  }
`;

export default FontFace;
