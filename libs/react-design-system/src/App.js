/** @jsxRuntime classic */
/** @jsx jsx */
import * as React from "react";
import { ThemeProvider, jsx, useThemeUI } from "theme-ui";

import Button from "./Button";
import theme from "./theme";
import { text } from "./theme/tokens";

const App = () => (
  <ThemeProvider theme={theme}>
    <Button>Hi</Button>
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
