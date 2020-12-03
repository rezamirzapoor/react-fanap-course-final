import React from "react";
import { create } from "jss";
import rtl from "jss-rtl";
import { StylesProvider, jssPreset } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

import VazirWebTTF from "fonts/VazirWeb.ttf";
import VazirWebEOT from "fonts/VazirWeb.eot";
import VazirWebWOFF from "fonts/VazirWeb.woff";
import VazirWebWOFF2 from "fonts/VazirWeb.woff2";

import ShabnamTTF from "fonts/Shabnam.ttf";
import ShabnamEOT from "fonts/Shabnam.eot";
import ShabnamWOFF from "fonts/Shabnam.woff";

import CssBaseline from "@material-ui/core/CssBaseline";
const vazirWeb = {
  fontFamily: "VazirWeb",
  fontStyle: "normal",
  fontDisplay: "swap",
  src: `
   url(${VazirWebTTF}) format('truetype'),
   url(${VazirWebEOT}) format('eot'),
   url(${VazirWebWOFF}) format('woff'),
   url(${VazirWebWOFF2}) format('woff2'),
 `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};

const shabnam = {
  fontFamily: "Shabnam",
  fontStyle: "normal",
  fontDisplay: "swap",
  src: `
   url(${ShabnamTTF}) format('truetype'),
   url(${ShabnamEOT}) format('eot'),
   url(${ShabnamWOFF}) format('woff'),
 `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
const theme = createMuiTheme({
  direction: "rtl",
  typography: {
    fontFamily: ['"Shabnam"', '"VazirWeb"'].join(","),
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [vazirWeb, shabnam],
      },
    },
  },
});

export default function RTL({ children }) {
  return (
    <StylesProvider jss={jss}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StylesProvider>
  );
}
