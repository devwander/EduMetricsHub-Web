import { Box, IconButton, Stack, styled } from "@mui/material";

import { Color } from "@/lib";

export const Root = styled(Box)(() => ({
  padding: "1rem",
  backgroundColor: Color.NEUTRAL_14,
  borderRadius: "10px",
  maxWidth: "calc(100vw - 4rem)",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  maxHeight: "calc(100vh - 4rem)",
}));

export const Header = styled(Stack)(() => ({
  flex: 1,
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "space-between",
}));

export const CloseButton = styled(IconButton)(() => ({
  color: Color.NEUTRAL_02,
  padding: 0,
}));

export const Body = styled(Stack)(() => ({
  overflowY: "auto",
  flex: 1,
  padding: "1rem",
}));

export const Footer = styled(Stack)(() => ({
  flex: 1,
}));
