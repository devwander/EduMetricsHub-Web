import { Student } from "@/models";
import { useStudentPaginateQuery } from "@/query";
import { Box, Typography } from "@mui/material";
import type { ReactElement } from "react";

export function Student(): ReactElement {
  const { data: students, isSuccess } = useStudentPaginateQuery({});

  return (
    <Box>
      <Typography>ESTUDANTES</Typography>
      {isSuccess && (
        <ul>
          {students.map((student: Student) => (
            <li key={student.id}>{student.nome}</li>
          ))}
        </ul>
      )}
    </Box>
  );
}
