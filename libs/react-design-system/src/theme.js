import Color from "color";

export const palette = {
  blue: [
    "#EFF6FF",
    "#DBEAFE",
    "#BFDBFE",
    "#93C5FD",
    "#60A5FA",
    "#3B82F6",
    "#2563EB",
    "#1D4ED8",
    "#1E40AF",
    "#1E3A8A",
  ].map((c) => Color(c).hsl().string()),
  gray: [
    "#F9FAFB",
    "#F3F4F6",
    "#E5E7EB",
    "#D1D5DB",
    "#9CA3AF",
    "#6B7280",
    "#4B5563",
    "#374151",
    "#1F2937",
    "#111827",
  ].map((c) => Color(c).hsl().string()),
};

export const text = {
  xs: { fontSize: 0, lineHeight: 0 },
  sm: { fontSize: 1, lineHeight: 1 },
  base: { fontSize: 2, lineHeight: 2 },
  lg: { fontSize: 3, lineHeight: 3 },
  xl: { fontSize: 4, lineHeight: 3 },
  xl2: { fontSize: 5, lineHeight: 4 },
  xl3: { fontSize: 6, lineHeight: 5 },
  xl4: { fontSize: 7, lineHeight: 6 },
  xl5: { fontSize: 8, lineHeight: 7 },
  xl6: { fontSize: 9, lineHeight: 7 },
  xl7: { fontSize: 10, lineHeight: 7 },
  xl8: { fontSize: 11, lineHeight: 7 },
  xl9: { fontSize: 12, lineHeight: 7 },
};

export const theme = {
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

  button: {
    primary: {
      ...text.base,
      backgroundColor: "blue.5",
      border: "1px solid transparent",
      borderColor: "blue.5",
      borderRadius: "0.25rem",
      color: "white",
      paddingY: 4,
      paddingX: 7,
      transition:
        "color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
      verticalAlign: "middle",

      ":active:enabled": { backgroundColor: "blue.8" },

      ":disabled": { backgroundColor: "blue.0" },

      ":enabled": { cursor: "pointer" },

      ":focus": {
        backgroundColor: "blue.7",
        borderColor: "blue.8",
        boxShadow: "0 0 0 0.2rem rgba(38,143,255,.5)",
        outline: 0,
      },

      ":hover:enabled": { backgroundColor: "blue.7" },
    },
  },
};
