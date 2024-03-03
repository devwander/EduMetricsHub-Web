import type { StackProps } from "@mui/material";
import type { ReactElement } from "react";

import * as S from "./styles";

interface Props extends StackProps {}

export function Body({ children, ...rest }: Props): ReactElement {
  return <S.Body {...rest}>{children}</S.Body>;
}
