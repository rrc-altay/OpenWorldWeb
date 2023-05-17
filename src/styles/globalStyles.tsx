import { createGlobalStyle } from "styled-components";
import ColorScheme from "@/styles/theme/colorScheme";
import fontFace from "@/styles/fontFace";

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${ColorScheme.MAIN};
    color: ${ColorScheme.GRAY};
    
    font-family: Lato, sans-serif;
    font-size: 14px;
    font-weight: 400;
  }
  
  *, *:after, *:before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  #__next {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    
    & > main {
      flex-grow: 1;
    }
  }
  
  .container {
    width: 100%;
    max-width: 1920px;
    
    margin: 0 auto;
  }
  
  
  ul,li {
    list-style-type: none;
  }
  
  button {
    font-family: inherit;
    border: 0;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
  
  ${fontFace}
`;
