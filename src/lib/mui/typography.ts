import type { TypographyOptions } from "@mui/material/styles/createTypography";

import { Color } from ".";

export const Typography: TypographyOptions = {
  fontFamily: ["Roboto", "sans-serif"].join(","),
  allVariants: {
    color: Color.NEUTRAL_02,
  },
};
