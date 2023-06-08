/* eslint-disable */
// @ts-nocheck

import { useEffect, useState } from "react";
import { useBigTablet } from "@/hooks/useAdaptive";

const FORM_ID = 235629;

export const useGUInit = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const isBigTablet = useBigTablet();

  useEffect(() => {
    if (isActive) {
      onLoad();
    }
  }, [isBigTablet]);

  function onLoad() {
    (function () {
      "use strict";
      function ownKeys(e, t) {
        const o = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          let n = Object.getOwnPropertySymbols(e);
          if (t)
            n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            });
          o.push.apply(o, n);
        }
        return o;
      }
      function objectSpread(e) {
        for (let t = 1; t < arguments.length; t++) {
          var o = null != arguments[t] ? arguments[t] : {};
          if (t % 2)
            ownKeys(Object(o), true).forEach(function (t) {
              _defineProperty(e, t, o[t]);
            });
          else if (Object.getOwnPropertyDescriptors)
            Object.defineProperties(e, Object.getOwnPropertyDescriptors(o));
          else
            ownKeys(Object(o)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(o, t),
              );
            });
        }
        return e;
      }
      function _defineProperty(e, t, o) {
        if (t in e)
          Object.defineProperty(e, t, {
            value: o,
            enumerable: true,
            configurable: true,
            writable: true,
          });
        else e[t] = o;
        return e;
      }
      const POS_PREFIX_2 = "--pos-banner-fluid-2_",
        posOptionsInitial = {
          "grid-template-columns": "100%",
          "grid-template-rows": "310px auto",
          "decor-grid-column": "initial",
          "decor-grid-row": "initial",
          "decor-padding": "30px 30px 0 30px",
          "bg-url":
            "url('https://pos.gosuslugi.ru/bin/banner-fluid/2/banner-fluid-bg-2-small.svg')",
          "bg-position": "calc(10% + 64px) calc(100% - 20px)",
          "bg-size": "cover",
          "content-padding": "0 30px 30px 30px",
          "slogan-font-size": "20px",
          "slogan-line-height": "32px",
          "logo-wrap-padding": "20px 30px 30px 40px",
          "logo-wrap-top": "0",
          "logo-wrap-bottom": "initial",
          "logo-wrap-border-radius": "0 0 0 80px",
        },
        setStyles = function (e, t) {
          Object.keys(e).forEach(function (o) {
            t.style.setProperty(POS_PREFIX_2 + o, e[o]);
          });
        },
        removeStyles = function (e, t) {
          Object.keys(e).forEach(function (e) {
            t.style.removeProperty(POS_PREFIX_2 + e);
          });
        };
      function changePosBannerOnResize() {
        const e = document.documentElement,
          t = objectSpread({}, posOptionsInitial),
          o = document.getElementById("js-show-iframe-wrapper"),
          n = o ? o.offsetWidth : document.body.offsetWidth;
        if (n > 405)
          (t["slogan-font-size"] = "24px"),
            (t["logo-wrap-padding"] = "30px 50px 30px 70px");
        if (n > 500)
          (t["grid-template-columns"] = "min-content 1fr"),
            (t["grid-template-rows"] = "100%"),
            (t["decor-grid-column"] = "2"),
            (t["decor-grid-row"] = "1"),
            (t["decor-padding"] = "30px 30px 30px 0"),
            (t["content-padding"] = "30px"),
            (t["bg-position"] = "0% calc(100% - 70px)"),
            (t["logo-wrap-padding"] = "30px 30px 24px 40px"),
            (t["logo-wrap-top"] = "initial"),
            (t["logo-wrap-bottom"] = "0"),
            (t["logo-wrap-border-radius"] = "80px 0 0 0");
        if (n > 585) t["bg-position"] = "0% calc(100% - 6px)";
        if (n > 800)
          (t["bg-url"] =
            "url('https://pos.gosuslugi.ru/bin/banner-fluid/2/banner-fluid-bg-2.svg')"),
            (t["bg-position"] = "0% center");
        if (n > 1020)
          (t["slogan-font-size"] = "32px"),
            (t["line-height"] = "40px"),
            (t["logo-wrap-padding"] = "30px 30px 24px 50px");
        setStyles(t, e);
      }
      changePosBannerOnResize(),
        window.addEventListener("resize", changePosBannerOnResize),
        (window.onunload = function () {
          const e = document.documentElement;
          window.removeEventListener("resize", changePosBannerOnResize),
            removeStyles(posOptionsInitial, e);
        });
    })();

    window.Widget("https://pos.gosuslugi.ru/form", FORM_ID);
    setIsActive(true);
  }

  return {
    onLoad,
  };
};
