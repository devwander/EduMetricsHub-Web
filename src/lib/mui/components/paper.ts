import type { Components, Theme } from "@mui/material";

type MuiPaperProps = Components<Omit<Theme, "components">>["MuiPaper"];

export const MuiPaper: MuiPaperProps = {
  styleOverrides: {},
};
