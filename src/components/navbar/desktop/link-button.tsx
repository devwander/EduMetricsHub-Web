import type { ButtonProps } from "@mui/material";
import { Typography } from "@mui/material";
import type { ReactElement } from "react";

import type { Route } from "@/models";

import * as S from "./styles";

interface Props extends ButtonProps {
  route: Route;
  to: string;
}

export function LinkButton({ route, ...rest }: Props): ReactElement {
  return (
    <S.DesktopLink {...rest}>
      <route.icon size={36} weight="light" />
      <Typography>{route.label}</Typography>
    </S.DesktopLink>
  );
}
