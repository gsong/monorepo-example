import { text } from "../theme/tokens";

export const variants = {
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
};
