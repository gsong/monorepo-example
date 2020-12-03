import * as button from "../Button/theme";
import palette from "./palette";

const theme = {
  colors: { ...palette },

  fontSizes: [
    "0.75rem",
    "0.875rem",
    "1rem",
    "1.125rem",
    "1.25rem",
    "1.5rem",
    "1.875rem",
    "2.25rem",
    "3rem",
    "3.75rem",
    "4.5rem",
    "6rem",
    "8rem",
  ],

  lineHeights: [
    "1rem",
    "1.25rem",
    "1.5rem",
    "1.75rem",
    "2rem",
    "2.25rem",
    "2.5rem",
    1,
  ],

  space: [0, 1, 2, 4, 6, 8, 10, 12, 14, 15, 20, 24, 28, 32, 36, 40],

  styles: {
    root: {
      // Needed to override theme-ui default of
      // `body.background-color: background`
      bg: "unset",

      fontFamily: [
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ].join(","),
    },
  },

  button: { ...button.variants },
};

export default theme;
