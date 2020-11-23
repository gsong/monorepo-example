/** @jsxRuntime classic */
/** @jsx jsx */
import * as React from "react";
import { ThemeProvider, jsx, useThemeUI } from "theme-ui";

import { text, theme } from "./theme.js";

const App = () => (
  <ThemeProvider theme={theme}>
    <p sx={text.xl5}>Hello</p>
    <ThemePrinter />
  </ThemeProvider>
);

const ThemePrinter = () => {
  const { theme } = useThemeUI();

  return (
    <React.Fragment>
      <h2 sx={text.xl2}>Theme Specification</h2>
      <pre>{JSON.stringify(theme, null, 2)}</pre>
    </React.Fragment>
  );
};

export default App;
