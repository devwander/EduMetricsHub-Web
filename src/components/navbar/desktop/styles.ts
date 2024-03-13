import { Box, Button, styled } from "@mui/material";

import { Color } from "@/lib";

export const Root = styled(Box)(() => ({
  gap: "2.25rem",
  flexDirection: "row",
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  paddingTop: "0.5rem",
}));

export const DesktopLink = styled(Button)(() => ({
  display: "flex",
  flexDirection: "column",
  width: "102px",
  gap: "0.5rem",
  borderRadius: "10px",
  textTransform: "none",

  color: Color.NEUTRAL_02,
  border: "none",

  "&:hover": {
    color: Color.NEUTRAL_02,
    background: `linear-gradient(180deg, ${Color.GREEN_03} 0%, rgba(255,255,255,0) 100%)`,
  },

  "&.active": {
    color: Color.NEUTRAL_02,
    background: `linear-gradient(180deg, ${Color.GREEN_03} 0%, rgba(255,255,255,0) 100%)`,
  },

  "&.MuiButtonBase-root": {
    height: "auto",
  },
}));

export const DesktopButton = styled(Button)(() => ({
  display: "flex",
  flexDirection: "column",
  width: "102px",
  gap: "0.5rem",
  borderRadius: "10px",
  textTransform: "none",
  color: Color.NEUTRAL_02,
  border: "none",

  ":hover": {
    borderColor: Color.NEUTRAL_02,
    color: Color.NEUTRAL_02,
    background: `linear-gradient(180deg, ${Color.RED_02} 0%, rgba(255,255,255,0) 100%)`,
  },

  "&.MuiButtonBase-root": {
    height: "auto",
  },
}));
