import { InputSearch } from "@/components";
import { useUserPaginateQuery } from "@/query";
import { searchStore, userFilterStore } from "@/store";
import { Box, Grid, Pagination } from "@mui/material";
import { Stack } from "@mui/system";
import type { ReactElement } from "react";
import { Table } from "./table";

export function User(): ReactElement {
  const { search } = searchStore();
  const { append, params } = userFilterStore();

  const { data: usersData, isSuccess: isSuccessList } = useUserPaginateQuery({
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
              <Table labels={["Nome", "Email"]} data={usersData.data} />
            </Stack>

            {usersData.meta.total > usersData.meta.perPage && (
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
                  count={usersData.meta.lastPage}
                  page={usersData.meta.currentPage}
                  color="primary"
                  onChange={(_, page): void => append({ ...params, page })}
                />
              </Stack>
            )}
          </Box>
        )}
      </Grid>
    </Grid>
  );
}
