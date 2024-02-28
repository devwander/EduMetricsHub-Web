import type { Components, Theme } from "@mui/material";

type MuiCssBaselineProps = Components<
  Omit<Theme, "components">
>["MuiCssBaseline"];

export const MuiCssBaseline: MuiCssBaselineProps = {
  styleOverrides: {
    ":root": {
      "@media (max-width: 1090px)": {
        fontSize: "87.5%",
      },
      margin: 0,
      padding: 0,

      boxSizing: "border-box",
    },
  },
};
