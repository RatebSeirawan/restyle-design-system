import { createTheme } from "@shopify/restyle";
import { FontWeight } from "./types";

const palette = {
  purpleLight: "#8C6FF7",
  purplePrimary: "#5A31F4",
  purpleDark: "#3F22AB",

  greenLight: "#56DCBA",
  greenPrimary: "#0ECD9D",
  greenDark: "#0A906E",

  grey: "rgba(222,222,222)",

  black: "#0B0B0B",
  white: "#FFFFFF",
};

const theme = createTheme({
  fontSize: {
    h1: 20,
    h2: 18,
    p: 16,
  },
  fontWeight: {
    bold: "bold" as FontWeight,
    normal: "500" as FontWeight,
    light: "400" as FontWeight,
  },
  colors: {
    mainBackground: palette.white,
    cardPrimaryBackground: palette.purplePrimary,
    grey: palette.grey,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
});

export type Theme = typeof theme;
export default theme;
