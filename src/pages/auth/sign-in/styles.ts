import { Box, Container, Stack, styled } from "@mui/material";

export const Layout = styled(Container)(() => ({
  height: "inherit",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap: "3.125rem",
  overflow: "hidden",
  userSelect: "none",
}));

export const BorderTop = styled(Stack)(() => ({
  position: "absolute",
  top: "-2.5rem",
  left: "0",
}));

export const BorderBottom = styled(Stack)(() => ({
  position: "absolute",
  bottom: "-2.5rem",
  right: "0",
}));

export const Form = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  maxWidth: "35rem",
  width: "100%",
}));
