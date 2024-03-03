import type { StackProps } from "@mui/material";
import { Typography } from "@mui/material";
import { X } from "@phosphor-icons/react";
import type { ReactElement } from "react";

import { modalStore } from "@/store";

import * as S from "./styles";

interface Props extends StackProps {
  title?: string;
}

export function Header({ title = "", ...rest }: Props): ReactElement {
  const { close } = modalStore();
  return (
    <S.Header {...rest}>
      <Typography variant="h5">{title}</Typography>
      <S.CloseButton onClick={close}>
        <X size={26} weight="bold" />
      </S.CloseButton>
    </S.Header>
  );
}
