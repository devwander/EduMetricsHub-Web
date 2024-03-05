import { InputSearch } from "@/components";
import { useDisciplinePaginateQuery } from "@/query";
import { disciplineFilterStore, searchStore } from "@/store";
import { Box, Grid, Pagination } from "@mui/material";
import { Stack } from "@mui/system";
import { type ReactElement } from "react";
import { Modal } from "./modal";
import { Table } from "./table";

export function Discipline(): ReactElement {
  const { search } = searchStore();
  const { append, params } = disciplineFilterStore();

  const { data: disciplines, isSuccess: isSuccessList } =
    useDisciplinePaginateQuery({
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
                labels={[
                  "Nome",
                  "Código",
                  "Tipo",
                  "Créditos",
                  "Carga Horária",
                  "",
                ]}
                data={disciplines.data}
              />
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
          </Box>
        )}
      </Grid>
      <Modal.Info />
    </Grid>
  );
}
