import { IconButton } from "@mui/material";
import { List as MenuIcon } from "@phosphor-icons/react";
import type { ReactElement } from "react";

import { Color } from "@/lib";
import { menuStore } from "@/store";

export function MenuButton(): ReactElement {
  const { toggle } = menuStore();

  return (
    <IconButton
      color="inherit"
      aria-label="open drawer"
      edge="start"
      onClick={toggle}
      sx={{ display: { md: "none" } }}
    >
      <MenuIcon weight="bold" color={Color.GREEN_01} />
    </IconButton>
  );
}
