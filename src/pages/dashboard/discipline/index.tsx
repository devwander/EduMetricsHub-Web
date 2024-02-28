import { Discipline } from "@/models";
import { useDisciplinePaginateQuery } from "@/query";
import { Box, Typography } from "@mui/material";
import type { ReactElement } from "react";

export function Discipline(): ReactElement {
  const { data: disciplines, isSuccess } = useDisciplinePaginateQuery({});
  return (
    <Box>
      <Typography>DISCIPLINAS</Typography>
      {isSuccess && (
        <ul>
          {disciplines.map((discipline: Discipline) => (
            <li key={discipline.id}>{discipline.nome}</li>
          ))}
        </ul>
      )}
    </Box>
  );
}
