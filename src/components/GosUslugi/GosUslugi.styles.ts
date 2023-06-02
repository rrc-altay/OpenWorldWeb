import { createGlobalStyle } from "styled-components";
export const GosUslugiStyles = createGlobalStyle`
  :root {
    --pos-banner-fluid-2__grid-template-columns: 100%;
    --pos-banner-fluid-2__grid-template-rows: 310px auto;
    --pos-banner-fluid-2__decor-grid-column: initial;
    --pos-banner-fluid-2__decor-grid-row: initial;
    --pos-banner-fluid-2__decor-padding: 30px 30px 0 30px;
    --pos-banner-fluid-2__bg-url: url(https://pos.gosuslugi.ru/bin/banner-fluid/2/banner-fluid-bg-2-small.svg);
    --pos-banner-fluid-2__bg-position: calc(10% + 64px) calc(100% - 20px);
    --pos-banner-fluid-2__bg-size: cover;
    --pos-banner-fluid-2__content-padding: 0 30px 30px 30px;
    --pos-banner-fluid-2__slogan-font-size: 20px;
    --pos-banner-fluid-2__slogan-line-height: 32px;
    --pos-banner-fluid-2__logo-wrap-padding: 20px 30px 30px 40px;
    --pos-banner-fluid-2__logo-wrap-top: 0;
    --pos-banner-fluid-2__logo-wrap-bottom: initial;
    --pos-banner-fluid-2__logo-wrap-border-radius: 0 0 0 80px;
  }
  
  
  #js-show-iframe-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-width: 293px;
    max-width: 100%;
    background: linear-gradient(138.4deg, #38bafe 26.49%, #2d73bc 79.45%);
    color: #fff;
    cursor: pointer;
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
    grid-template-rows: var(--pos-banner-fluid-2grid-template-rows);
    width: 100%;
    max-width: 1060px;
    font-family: LatoWeb, sans-serif;
    box-sizing: border-box;
  }
  #js-show-iframe-wrapper .bf-2decor {
    grid-column: var(--pos-banner-fluid-2decor-grid-column);
    grid-row: var(--pos-banner-fluid-2decor-grid-row);
    padding: var(--pos-banner-fluid-2decor-padding);
    background: var(--pos-banner-fluid-2bg-url)
      var(--pos-banner-fluid-2bg-position) no-repeat;
    background-size: var(--pos-banner-fluid-2bg-size);
  }
  #js-show-iframe-wrapper .bf-2logo-wrap {
    position: absolute;
    top: var(--pos-banner-fluid-2logo-wrap-top);
    bottom: var(--pos-banner-fluid-2logo-wrap-bottom);
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: var(--pos-banner-fluid-2logo-wrap-padding);
    background: #2d73bc;
    border-radius: var(--pos-banner-fluid-2logo-wrap-border-radius);
  }
  #js-show-iframe-wrapper .bf-2logo {
    width: 128px;
  }
  #js-show-iframe-wrapper .bf-2slogan {
    font-family: LatoWebBold, sans-serif;
    font-size: var(--pos-banner-fluid-2slogan-font-size);
    line-height: var(--pos-banner-fluid-2slogan-line-height);
    color: #fff;
  }
  #js-show-iframe-wrapper .bf-2content {
    padding: var(--pos-banner-fluid-2content-padding);
  }
  #js-show-iframe-wrapper .bf-2description {
    display: flex;
    flex-direction: column;
    margin-bottom: 24px;
  }
  #js-show-iframe-wrapper .bf-2text {
    margin-bottom: 12px;
    font-size: 24px;
    line-height: 32px;
    font-family: LatoWebBold, sans-serif;
    color: #fff;
  }
  #js-show-iframe-wrapper .bf-2text_small {
    margin-bottom: 0;
    font-size: 16px;
    line-height: 24px;
    font-family: LatoWeb, sans-serif;
  }
  #js-show-iframe-wrapper .bf-2_btn-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
