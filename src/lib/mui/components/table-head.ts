import type { Components, Theme } from "@mui/material";
import { tableCellClasses } from "@mui/material";

import { Color } from "../colors";

type MuiTableHeadProps = Components<Omit<Theme, "components">>["MuiTableHead"];

export const MuiTableHead: MuiTableHeadProps = {
  styleOverrides: {
    root: {
      backgroundColor: Color.GREEN_03,
      [`& .${tableCellClasses.root}`]: {
        paddingTop: "1rem",
      },
    },
  },
};
