import type { TableProps } from "@mui/material";
import { Paper, Table, TableContainer } from "@mui/material";
import type { ReactElement } from "react";

interface RootProps extends TableProps {}

export function Root({ children, ...rest }: RootProps): ReactElement {
  return (
    <TableContainer
      component={Paper}
      sx={{
        marginTop: "2rem",
        boxShadow: "none",
        borderRadius: "1.5rem 1.5rem 0rem 0rem",
        background: "transparent",
      }}
    >
      <Table aria-label="collapsible table" size="small" {...rest}>
        {children}
      </Table>
    </TableContainer>
  );
}
