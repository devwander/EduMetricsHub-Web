import { InputAdornment } from "@mui/material";
import type { IconProps } from "@phosphor-icons/react";
import { Eye, EyeSlash } from "@phosphor-icons/react";
import type { ReactElement } from "react";

interface Props extends Pick<IconProps, "onClick"> {
  visible: boolean;
}

export function PasswordAdornment({ visible, onClick }: Props): ReactElement {
  return (
    <InputAdornment position="start" sx={{ cursor: "pointer" }}>
      {!visible && <Eye size={22} onClick={onClick} />}
      {visible && <EyeSlash size={22} onClick={onClick} />}
    </InputAdornment>
  );
}
