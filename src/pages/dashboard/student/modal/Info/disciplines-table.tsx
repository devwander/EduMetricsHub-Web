import { Typography } from "@mui/material";
import type { ReactElement } from "react";

import { Table as T } from "@/components";
import { Color } from "@/lib";
import { StudentHistoric } from "@/models";
import { disciplineStatus } from "@/utils/format";

interface Props {
  labels: string[];
  data: StudentHistoric;
}

export function DisciplinesTable({ labels, data }: Props): ReactElement {
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
            key={`${item.id_disciplina}--${item.ano}-${item.semestre}`}
          >
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
                {item.ano}
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
                {item.semestre}
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
                {disciplineStatus(item.status)}
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
                {item.nota}
              </Typography>
            </T.Column>
          </T.Row>
        ))}
      </T.Body>
    </T.Root>
  );
}
