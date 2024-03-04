import InfoIcon from "@mui/icons-material/Info";
import { Box, Typography } from "@mui/material";
import type { ReactElement } from "react";

import { Color } from "@/lib";

interface Props {
  value: string;
}

export function InfoContainer({ value }: Props): ReactElement {
  return (
    <Box
      sx={{
        color: Color.NEUTRAL_02,
        backgroundColor: Color.NEUTRAL_12,
        padding: "0.5rem",
        borderRadius: "10px",
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        maxWidth: "calc(100% - 20rem)",
      }}
    >
      <InfoIcon />
      <Typography>{value}</Typography>
    </Box>
  );
}
