import { ListElement } from "@/components";
import ButtonsOptions from "@/components/buttons-options";
import { useDisciplinePaginateQuery } from "@/query";
import { disciplineFilterStore } from "@/store";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import BarChartIcon from "@mui/icons-material/BarChart";
import ListIcon from "@mui/icons-material/List";
import { Grid, Pagination, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { useState, type ReactElement } from "react";

export function Discipline(): ReactElement {
  const { append, params } = disciplineFilterStore();
  const [part, setPart] = useState("list");

  const { data: disciplines, isSuccess: isSuccessList } =
    useDisciplinePaginateQuery({
      ...params,
    });

  const list: ListElement[] = [
    {
      icon: ListIcon,
      label: "Listagem",
      value: "list",
    },
    {
      icon: BarChartIcon,
      label: "Progresso",
      value: "progress",
    },
    {
      icon: AutorenewIcon,
      label: "Demanda",
      value: "demand",
    },
  ];

  return (
    <Grid container spacing={2} sx={{ width: "100%", height: "100%" }}>
      <Grid item xs={12}>
        {/* <BasicList list={list} /> */}
        <ButtonsOptions list={list} onChange={setPart} />
      </Grid>

      <Grid item xs={12}>
        {part === "list" && isSuccessList && disciplines.data.length > 0 && (
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
      </Grid>
    </Grid>
  );
}
