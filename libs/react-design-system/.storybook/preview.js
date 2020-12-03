/** @jsxRuntime classic */
/** @jsx jsx */
import { addDecorator } from "@storybook/react";
import { ThemeProvider, jsx } from "theme-ui";

import theme from "../src/theme";

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};
