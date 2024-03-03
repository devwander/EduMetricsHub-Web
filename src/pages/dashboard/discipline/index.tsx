import { useDisciplinePaginateQuery } from "@/query";
import { disciplineFilterStore } from "@/store";
import { Box, Pagination, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import type { ReactElement } from "react";

export function Discipline(): ReactElement {
  const { append, params } = disciplineFilterStore();

  const { data: disciplines, isSuccess } = useDisciplinePaginateQuery({
    ...params,
  });
  return (
    <Box>
      <Typography>DISCIPLINAS</Typography>

      {isSuccess && disciplines.data.length > 0 && (
        <>
          <Stack sx={{ padding: "0 0.5rem" }}>
            {disciplines.data.map((discipline: any) => (
              <Typography key={discipline.id}>{discipline.nome}</Typography>
            ))}
          </Stack>

          {disciplines.meta.total > disciplines.meta.perPage && (
            <Stack
              sx={{
                alignItems: "center",
                padding: "2.5rem 0.5rem 0 0.5rem",
                justifyItems: "center",
                width: "100%",
              }}
            >
              <Pagination
                shape="rounded"
                count={disciplines.meta.lastPage}
                page={disciplines.meta.currentPage}
                color="primary"
                onChange={(_, page): void => append({ ...params, page })}
              />
            </Stack>
          )}
        </>
      )}
    </Box>
  );
}
