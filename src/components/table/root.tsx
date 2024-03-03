import type { TableProps } from "@mui/material";
import { Paper, Table, TableContainer } from "@mui/material";
import type { ReactElement } from "react";

interface RootProps extends TableProps {}

export function Root({ children, ...rest }: RootProps): ReactElement {
  return (
    <TableContainer
      component={Paper}
      sx={{
        boxShadow: "none",
        borderRadius: "10px",
        background: "transparent",
      }}
    >
      <Table aria-label="collapsible table" size="small" {...rest}>
        {children}
      </Table>
    </TableContainer>
  );
}
