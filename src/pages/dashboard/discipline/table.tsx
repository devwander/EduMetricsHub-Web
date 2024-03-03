import { IconButton, Typography } from "@mui/material";
import type { ReactElement } from "react";

import { Table as T } from "@/components";
import { Color } from "@/lib";
import { Discipline } from "@/models";
import { modalStore } from "@/store/modal.store";
import { disciplineType } from "@/utils/format";
import { Stack } from "@mui/material";
import { ClipboardText } from "@phosphor-icons/react";

interface Props {
  labels: string[];
  data: Discipline[];
}

export function Table({ labels, data }: Props): ReactElement {
  const { open } = modalStore();

  return (
    <T.Root>
      <T.Head>
        <T.Row>
          {labels.map((label, index) => (
            <T.Column key={`${label}_${index}`}>
              <Typography sx={{ fontWeight: "500", fontSize: "1.2rem" }}>
                {label}
              </Typography>
            </T.Column>
          ))}
        </T.Row>
      </T.Head>
      <T.Body>
        {data.map((item) => (
          <T.Row
            sx={{
              ":hover": {
                backgroundColor: Color.NEUTRAL_13,
              },
              height: "3rem",
            }}
            key={item.id}
          >
            <T.Column sx={{ minWidth: 400 }}>
              <Typography
                sx={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: "1",
                  WebkitBoxOrient: "vertical",
                }}
              >
                {item.nome}
              </Typography>
            </T.Column>
            <T.Column>
              <Typography
                sx={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: "1",
                  WebkitBoxOrient: "vertical",
                }}
              >
                {item.codigo}
              </Typography>
            </T.Column>
            <T.Column>
              <Typography
                sx={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: "1",
                  WebkitBoxOrient: "vertical",
                }}
              >
                {disciplineType(item.tipo)}
              </Typography>
            </T.Column>
            <T.Column>
              <Typography
                sx={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: "1",
                  WebkitBoxOrient: "vertical",
                }}
              >
                {item.credito}
              </Typography>
            </T.Column>
            <T.Column>
              <Typography
                sx={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: "1",
                  WebkitBoxOrient: "vertical",
                }}
              >
                {item.carga_horaria}
              </Typography>
            </T.Column>
            <T.Column
              sx={{
                minWidth: 50,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Stack
                sx={{
                  gap: 1,
                  flexDirection: "row",
                  justifyContent: "flex-end",

                  svg: {
                    fill: Color.GREEN_FINAL_01,

                    ":hover": {
                      cursor: "pointer",
                    },
                  },
                }}
              >
                <IconButton
                  onClick={() =>
                    open({
                      key: "discipline-info",
                      dataId: item.id,
                    })
                  }
                >
                  <ClipboardText size={20} weight="bold" />
                </IconButton>
              </Stack>
            </T.Column>
          </T.Row>
        ))}
      </T.Body>
    </T.Root>
  );
}
