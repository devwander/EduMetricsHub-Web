import type { ModalProps } from "@mui/material";
import { Modal } from "@mui/material";
import type { ReactElement, ReactNode } from "react";

import type { ModalKey } from "@/models";
import { modalStore } from "@/store";

import * as S from "./styles";

interface Props extends Omit<ModalProps, "children" | "onClose" | "open"> {
  children: ReactNode;
  modalId: ModalKey;
}

export function Root({ children, modalId, ...rest }: Props): ReactElement {
  const { close, isOpen, key } = modalStore();

  return (
    <Modal
      disablePortal
      disableEnforceFocus
      disableAutoFocus
      open={isOpen && key === modalId}
      onClose={close}
      sx={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
      }}
      {...rest}
    >
      <S.Root>{children}</S.Root>
    </Modal>
  );
}
