import type { Components, Theme } from "@mui/material";
import { inputAdornmentClasses, inputBaseClasses } from "@mui/material";

import { Color } from "../colors";

type MuiTextFieldProps = Components<Omit<Theme, "components">>["MuiTextField"];

export const MuiTextField: MuiTextFieldProps = {
  styleOverrides: {
    root: {
      backgroundColor: Color.NEUTRAL_12,
      minHeight: 52,
      borderRadius: "10px",

      [`& .${inputBaseClasses.root}`]: {
        minHeight: 52,
        borderRadius: "10px",

        [`& .${inputBaseClasses.input}`]: {
          color: Color.NEUTRAL_02,
        },
      },

      [`& .${inputBaseClasses.error}`]: {
        [`& .${inputAdornmentClasses.root}`]: {
          color: Color.RED_01,
        },
      },
    },
  },
};
