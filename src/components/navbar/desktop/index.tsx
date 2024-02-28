import type { ReactElement } from "react";
import { NavLink } from "react-router-dom";

import { Routes } from "../routes";

import { Color } from "@/lib";
import { LinkButton } from "./link-button";
import { LogoutButton } from "./logout-button";
import * as S from "./styles";

export function Desktop(): ReactElement {
  return (
    <S.Root
      component="nav"
      sx={{
        display: { xs: "none", sm: "none", md: "flex" },
        flexDirection: "row",
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
    </S.Root>
  );
}
