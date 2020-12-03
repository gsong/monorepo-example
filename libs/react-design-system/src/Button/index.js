//@flow strict
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";

import type { Node } from "react";

type Props = { variant: string, ... };

const Button = ({ variant = "primary", ...props }: Props): Node => (
  <button sx={{ variant: `button.${variant}` }} {...(props: mixed)} />
);

export default Button;
