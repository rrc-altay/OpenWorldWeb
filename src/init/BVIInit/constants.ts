import { BVIConfig } from "./types";

export enum BVI_SETTINGS {
  JS = "/modules/bvi/js/bvi.js",
  CSS = "/modules/bvi/css/bvi.css",
  TARGET = "bvi-open",
}

export const BVI_CONFIG: BVIConfig = {
  target: "." + BVI_SETTINGS.TARGET,
  speech: false,
  panelHide: false,
  panelFixed: false,
};

export enum BVI_CLASS {
  HIDE = "bvi-hide",
  SHOW = "bvi-show",
  SPEECH = "bvi-speech",
  NO_STYLE = "bvi-no-styles",
}
