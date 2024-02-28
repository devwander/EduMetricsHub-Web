import type { Components, Theme } from "@mui/material";
import { toolbarClasses } from "@mui/material";

import { Color } from "../colors";

type MuiAppBarProps = Components<Omit<Theme, "components">>["MuiAppBar"];

export const MuiAppBar: MuiAppBarProps = {
  styleOverrides: {
    root: {
      backgroundColor: Color.NEUTRAL_14,
      zIndex: 100,
      boxShadow: "0px 0px 2px 0px rgba(0, 0, 0, 0.15)",

      [`& .${toolbarClasses.root}`]: {
        paddingLeft: 0,
        paddingRight: 0,
      },
    },
  },
};
