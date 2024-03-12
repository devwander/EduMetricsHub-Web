import type { ReactElement } from "react";
import { NavLink } from "react-router-dom";

import { Routes } from "../routes";

import { Color } from "@/lib";
import { Box } from "@mui/material";
import { LinkButton } from "./link-button";
import { LogoutButton } from "./logout-button";
import * as S from "./styles";

export function Desktop(): ReactElement {
  return (
    <S.Root
      component="nav"
      sx={{
        display: { xs: "none", sm: "none", md: "flex" },
        justifyContent: "space-between",
        flexDirection: "row",
        width: "100%",
        "& .MuiTypography-root": {
          color: Color.NEUTRAL_02,
        },
      }}
    >
      <img src="/logo.svg" />

      <Box sx={{ display: "flex", gap: ".5rem" }}>
        {Routes.map((route) => (
          <LinkButton
            component={NavLink}
            key={route.pathname}
            to={`/${route.pathname}`}
            route={route}
          />
        ))}
      </Box>

      <LogoutButton />
    </S.Root>
  );
}
