import { TableHead, type TableHeadProps } from "@mui/material";
import type { ReactElement } from "react";

interface HeadProps extends TableHeadProps {}

export function Head({ children, ...rest }: HeadProps): ReactElement {
  return <TableHead {...rest}>{children}</TableHead>;
}
