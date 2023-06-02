import { createGlobalStyle } from "styled-components";
import { Breakpoints } from "@/styles/breakpoints";

export const GosUslugiStyles = createGlobalStyle`
  #js-show-iframe-wrapper {
    border-radius: 15px;
    overflow: hidden;
    
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-width: 200px;
    max-width: 100%;
    background: linear-gradient(138.4deg, #38bafe 26.49%, #2d73bc 79.45%);
    color: #fff;
    cursor: pointer;
    
    @media(max-width: ${Breakpoints.BIG_TABLET}px) {
      border-radius: 30px;
    }
  }
  #js-show-iframe-wrapper .pos-banner-fluid * {
    box-sizing: border-box;
  }
  #js-show-iframe-wrapper .pos-banner-fluid .pos-banner-btn_2 {
    display: block;
    width: 240px;
    min-height: 56px;
    font-size: 18px;
    line-height: 24px;
    cursor: pointer;
    background: #0d4cd3;
    color: #fff;
    border: none;
    border-radius: 8px;
    outline: 0;
  }
  #js-show-iframe-wrapper .pos-banner-fluid .pos-banner-btn_2:hover {
    background: #1d5deb;
  }
  #js-show-iframe-wrapper .pos-banner-fluid .pos-banner-btn_2:focus {
    background: #2a63ad;
  }
  #js-show-iframe-wrapper .pos-banner-fluid .pos-banner-btn_2:active {
    background: #2a63ad;
  }
  @-webkit-keyframes fadeInFromNone {
    0% {
      display: none;
      opacity: 0;
    }
    1% {
      display: block;
      opacity: 0;
    }
    100% {
      display: block;
      opacity: 1;
    }
  }
  @keyframes fadeInFromNone {
    0% {
      display: none;
      opacity: 0;
    }
    1% {
      display: block;
      opacity: 0;
    }
    100% {
      display: block;
      opacity: 1;
    }
  }
  @font-face {
    font-family: LatoWebLight;
    src: url(https://pos.gosuslugi.ru/bin/fonts/Lato/fonts/Lato-Light.woff2)
    format("woff2"),
    url(https://pos.gosuslugi.ru/bin/fonts/Lato/fonts/Lato-Light.woff)
    format("woff"),
    url(https://pos.gosuslugi.ru/bin/fonts/Lato/fonts/Lato-Light.ttf)
    format("truetype");
    font-style: normal;
    font-weight: 400;
  }
  @font-face {
    font-family: LatoWeb;
    src: url(https://pos.gosuslugi.ru/bin/fonts/Lato/fonts/Lato-Regular.woff2)
    format("woff2"),
    url(https://pos.gosuslugi.ru/bin/fonts/Lato/fonts/Lato-Regular.woff)
    format("woff"),
    url(https://pos.gosuslugi.ru/bin/fonts/Lato/fonts/Lato-Regular.ttf)
    format("truetype");
    font-style: normal;
    font-weight: 400;
  }
  @font-face {
    font-family: LatoWebBold;
    src: url(https://pos.gosuslugi.ru/bin/fonts/Lato/fonts/Lato-Bold.woff2)
    format("woff2"),
    url(https://pos.gosuslugi.ru/bin/fonts/Lato/fonts/Lato-Bold.woff)
    format("woff"),
    url(https://pos.gosuslugi.ru/bin/fonts/Lato/fonts/Lato-Bold.ttf)
    format("truetype");
    font-style: normal;
    font-weight: 400;
  }
  @font-face {
    font-family: RobotoWebLight;
    src: url(https://pos.gosuslugi.ru/bin/fonts/Roboto/Roboto-Light.woff2)
    format("woff2"),
    url(https://pos.gosuslugi.ru/bin/fonts/Roboto/Roboto-Light.woff)
    format("woff"),
    url(https://pos.gosuslugi.ru/bin/fonts/Roboto/Roboto-Light.ttf)
    format("truetype");
    font-style: normal;
    font-weight: 400;
  }
  @font-face {
    font-family: RobotoWebRegular;
    src: url(https://pos.gosuslugi.ru/bin/fonts/Roboto/Roboto-Regular.woff2)
    format("woff2"),
    url(https://pos.gosuslugi.ru/bin/fonts/Roboto/Roboto-Regular.woff)
    format("woff"),
    url(https://pos.gosuslugi.ru/bin/fonts/Roboto/Roboto-Regular.ttf)
    format("truetype");
    font-style: normal;
    font-weight: 400;
  }
  @font-face {
    font-family: RobotoWebBold;
    src: url(https://pos.gosuslugi.ru/bin/fonts/Roboto/Roboto-Bold.woff2)
    format("woff2"),
    url(https://pos.gosuslugi.ru/bin/fonts/Roboto/Roboto-Bold.woff)
    format("woff"),
    url(https://pos.gosuslugi.ru/bin/fonts/Roboto/Roboto-Bold.ttf)
    format("truetype");
    font-style: normal;
    font-weight: 400;
  }
  @font-face {
    font-family: ScadaWebRegular;
    src: url(https://pos.gosuslugi.ru/bin/fonts/Scada/Scada-Regular.woff2)
    format("woff2"),
    url(https://pos.gosuslugi.ru/bin/fonts/Scada/Scada-Regular.woff)
    format("woff"),
    url(https://pos.gosuslugi.ru/bin/fonts/Scada/Scada-Regular.ttf)
    format("truetype");
    font-style: normal;
    font-weight: 400;
  }
  @font-face {
    font-family: ScadaWebBold;
    src: url(https://pos.gosuslugi.ru/bin/fonts/Scada/Scada-Bold.woff2)
    format("woff2"),
    url(https://pos.gosuslugi.ru/bin/fonts/Scada/Scada-Bold.woff)
    format("woff"),
    url(https://pos.gosuslugi.ru/bin/fonts/Scada/Scada-Bold.ttf)
    format("truetype");
    font-style: normal;
    font-weight: 400;
  }
  @font-face {
    font-family: Geometria;
    src: url(https://pos.gosuslugi.ru/bin/fonts/Geometria/Geometria.eot);
    src: url(https://pos.gosuslugi.ru/bin/fonts/Geometria/Geometria.eot?#iefix)
    format("embedded-opentype"),
    url(https://pos.gosuslugi.ru/bin/fonts/Geometria/Geometria.woff)
    format("woff"),
    url(https://pos.gosuslugi.ru/bin/fonts/Geometria/Geometria.ttf)
    format("truetype");
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: Geometria-ExtraBold;
    src: url(https://pos.gosuslugi.ru/bin/fonts/Geometria/Geometria-ExtraBold.eot);
    src: url(https://pos.gosuslugi.ru/bin/fonts/Geometria/Geometria-ExtraBold.eot?#iefix)
    format("embedded-opentype"),
    url(https://pos.gosuslugi.ru/bin/fonts/Geometria/Geometria-ExtraBold.woff)
    format("woff"),
    url(https://pos.gosuslugi.ru/bin/fonts/Geometria/Geometria-ExtraBold.ttf)
    format("truetype");
    font-weight: 900;
    font-style: normal;
  }
  #js-show-iframe-wrapper .bf-2 {
    position: relative;
    display: grid;
    grid-template-columns: var(--pos-banner-fluid-2_grid-template-columns);
    grid-template-rows: var(--pos-banner-fluid-2_grid-template-rows);
    width: 100%;
    max-width: 1060px;
    font-family: LatoWeb, sans-serif;
    box-sizing: border-box;
  }
  #js-show-iframe-wrapper .bf-2__decor {
    grid-column: var(--pos-banner-fluid-2_decor-grid-column);
    grid-row: var(--pos-banner-fluid-2_decor-grid-row);
    padding: var(--pos-banner-fluid-2_decor-padding);
    background: var(--pos-banner-fluid-2_bg-url)
    var(--pos-banner-fluid-2_bg-position) no-repeat;
    background-size: var(--pos-banner-fluid-2_bg-size);
  }
  #js-show-iframe-wrapper .bf-2__logo-wrap {
    position: absolute;
    top: var(--pos-banner-fluid-2_logo-wrap-top);
    bottom: var(--pos-banner-fluid-2_logo-wrap-bottom);
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: var(--pos-banner-fluid-2_logo-wrap-padding);
    background: #2d73bc;
    border-radius: var(--pos-banner-fluid-2_logo-wrap-border-radius);
  }
  #js-show-iframe-wrapper .bf-2__logo {
    width: 128px;
  }
  #js-show-iframe-wrapper .bf-2__slogan {
    font-family: LatoWebBold, sans-serif;
    font-size: var(--pos-banner-fluid-2_slogan-font-size);
    line-height: var(--pos-banner-fluid-2_slogan-line-height);
    color: #fff;
  }
  #js-show-iframe-wrapper .bf-2__content {
    padding: var(--pos-banner-fluid-2_content-padding);
  }
  #js-show-iframe-wrapper .bf-2__description {
    display: flex;
    flex-direction: column;
    margin-bottom: 24px;
  }
  #js-show-iframe-wrapper .bf-2__text {
    margin-bottom: 12px;
    font-size: 24px;
    line-height: 32px;
    font-family: LatoWebBold, sans-serif;
    color: #fff;
  }
  #js-show-iframe-wrapper .bf-2_text_small {
    margin-bottom: 0;
    font-size: 16px;
    line-height: 24px;
    font-family: LatoWeb, sans-serif;
  }
  #js-show-iframe-wrapper .bf-2__btn-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
