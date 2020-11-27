/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";

const Button = ({ variant = "primary", ...props }) => (
  <button sx={{ variant: `button.${variant}` }} {...props} />
);

export default Button;
