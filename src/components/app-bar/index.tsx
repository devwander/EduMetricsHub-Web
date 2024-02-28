import { Container, AppBar as MuiAppBar, Toolbar } from "@mui/material";
import type { ReactElement } from "react";
import { Fragment } from "react";

import { Navbar } from "../navbar";

import { DrawerMenu } from "./drawer-menu";
import { MenuButton } from "./menu-button";

export function AppBar(): ReactElement {
  return (
    <Fragment>
      <MuiAppBar position="fixed" color="default">
        <Container maxWidth="md">
          <Toolbar sx={{ padding: 0 }}>
            <MenuButton />
            <Navbar.Desktop />
          </Toolbar>
        </Container>
      </MuiAppBar>

      <DrawerMenu />
    </Fragment>
  );
}
