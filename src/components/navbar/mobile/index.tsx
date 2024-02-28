import { Box } from "@mui/material";
import type { ReactElement } from "react";
import { NavLink } from "react-router-dom";

import { Routes } from "../routes";

import { Color } from "@/lib";
import { LinkButton } from "./link-button";
import { LogoutButton } from "./logout-button";

export function Mobile(): ReactElement {
  return (
    <Box
      component="nav"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1,
        padding: "4rem 2rem",

        "& .MuiTypography-root": {
          color: Color.NEUTRAL_02,
        },
      }}
    >
      {Routes.map((route) => (
        <LinkButton
          component={NavLink}
          key={route.pathname}
          to={`/${route.pathname}`}
          route={route}
        />
      ))}

      <LogoutButton />
    </Box>
  );
}
