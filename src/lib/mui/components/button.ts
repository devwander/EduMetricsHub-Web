import type { Components, Theme } from "@mui/material";

import { Color } from "../colors";

type MuiButtonProps = Components<Omit<Theme, "components">>["MuiButton"];

export const MuiButton: MuiButtonProps = {
  styleOverrides: {
    root: {
      borderRadius: 14,
      textTransform: "none",
      boxShadow: "none",
      minHeight: 52,

      "&:hover": {
        boxShadow: "none",
      },
    },

    contained: {
      color: Color.NEUTRAL_14,
    },
  },
};
