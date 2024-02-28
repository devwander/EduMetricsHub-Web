import { Box, Container, Paper } from "@mui/material";
import type { ReactElement } from "react";
import { Outlet } from "react-router-dom";

import { AppBar } from "@/components";
import { Color } from "@/lib";

export function Dashboard(): ReactElement {
  return (
    <Box
      sx={{
        paddingTop: "5.1875rem",
        backgroundColor: Color.NEUTRAL_13,
      }}
    >
      <AppBar />
      <Container
        maxWidth="xl"
        component="section"
        sx={{
          flex: 1,
          minHeight: "calc(100vh - 5.1875rem)",
          padding: "2rem 0",
          overflowX: "hidden",
        }}
      >
        <Box
          component={Paper}
          sx={{
            backgroundColor: Color.NEUTRAL_14,

            padding: "2rem",
            borderRadius: "1rem",
            boxShadow: "none",
          }}
        >
          <Outlet />
        </Box>
      </Container>
    </Box>
  );
}
