import { Button, styled } from "@mui/material";

import { Color } from "@/lib";

export const MobileLink = styled(Button)(() => ({
  display: "flex",
  justifyContent: "flex-start",
  width: "100%",
  gap: "1rem",
  borderRadius: 0,
  borderRight: "3px solid",
  textTransform: "none",
  flex: 1,
  borderColor: "transparent",
  color: Color.NEUTRAL_02,

  "&.active": {
    color: Color.GREEN_01,
    borderColor: Color.GREEN_01,
    background: `linear-gradient(180deg, ${Color.GREEN_02} 0%, rgba(255,255,255,0) 100%)`,
  },
}));

export const MobileButton = styled(Button)(() => ({
  display: "flex",
  justifyContent: "flex-start",
  width: "100%",
  gap: "1rem",
  borderRadius: 0,
  borderRight: "3px solid",
  textTransform: "none",
  flex: 1,
  borderColor: "transparent",
  color: Color.NEUTRAL_02,

  ":hover": {
    color: Color.RED_01,
    borderColor: Color.RED_01,
  },
}));
