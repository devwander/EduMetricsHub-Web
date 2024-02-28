import { Box, Drawer } from "@mui/material";
import type { ReactElement } from "react";

import { menuStore } from "@/store";

import { Navbar } from "../navbar";

interface Props {
  window?: () => Window;
}

const DRAWER_WIDTH = 240;

export function DrawerMenu({ window }: Props): ReactElement {
  const container: (() => HTMLElement) | undefined =
    window !== undefined
      ? (): HTMLElement => window().document.body
      : undefined;

  const { toggle, open } = menuStore();

  return (
    <Drawer
      container={container}
      component="aside"
      variant="temporary"
      open={open}
      onClose={toggle}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      sx={{
        display: { sm: "block", md: "none" },
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: DRAWER_WIDTH,
        },
      }}
    >
      <Box onClick={toggle} sx={{ textAlign: "center" }}>
        <Navbar.Mobile />
      </Box>
    </Drawer>
  );
}
