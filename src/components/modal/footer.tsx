import type { StackProps } from "@mui/material";
import type { ReactElement } from "react";

import * as S from "./styles";

interface Props extends StackProps {}

export function Footer({ children, ...rest }: Props): ReactElement {
  return <S.Footer {...rest}>{children}</S.Footer>;
}
