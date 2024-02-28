import { Typography } from "@mui/material";
import { SignOut } from "@phosphor-icons/react";
import type { ReactElement } from "react";

import { authStore } from "@/store";

import { Color } from "@/lib";
import * as S from "./styles";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export function LogoutButton(): ReactElement {
  const { logout } = authStore();
  const navigate = useNavigate();

  return (
    <S.DesktopButton
      onClick={() => {
        logout();
        navigate("/sign-in");
        toast.success("Logout efetuado com successo!");
      }}
      sx={{
        ":hover": {
          "& .MuiTypography-root": {
            color: Color.NEUTRAL_02,
          },
        },
      }}
    >
      <SignOut size={36} weight="light" />
      <Typography>Sair</Typography>
    </S.DesktopButton>
  );
}
