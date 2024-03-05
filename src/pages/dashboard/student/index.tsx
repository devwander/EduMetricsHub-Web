import { InputSearch } from "@/components";
import { useStudentPaginateQuery } from "@/query";
import { searchStore, studentFilterStore } from "@/store";
import { Box, Grid, Pagination, Stack } from "@mui/material";
import type { ReactElement } from "react";
import { Table } from "./table";

export function Student(): ReactElement {
  const { search } = searchStore();
  const { append, params } = studentFilterStore();

  const { data: students, isSuccess: isSuccessList } = useStudentPaginateQuery({
    ...params,
    search,
  });

  return (
    <Grid container spacing={2} sx={{ width: "100%", height: "100%" }}>
      <Grid item xs={12}>
        <InputSearch placeholder="Pesquise por nome" />
      </Grid>

      <Grid item xs={12}>
        {isSuccessList && (
          <Box>
            <Stack>
              <Table
                labels={["Nome", "CPF", "Arg", "Ano de entrada", ""]}
                data={students.data}
              />
            </Stack>

            {students.meta.total > students.meta.perPage && (
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
                  count={students.meta.lastPage}
                  page={students.meta.currentPage}
                  color="primary"
                  onChange={(_, page): void => append({ ...params, page })}
                />
              </Stack>
            )}
          </Box>
        )}
      </Grid>
      {/* <Modal.Info /> */}
    </Grid>
  );
}
