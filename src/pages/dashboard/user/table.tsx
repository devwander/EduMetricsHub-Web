import { Typography } from "@mui/material";
import type { ReactElement } from "react";

import { Table as T } from "@/components";
import { Color } from "@/lib";
import { User } from "@/models";

interface Props {
  labels: string[];
  data: User[];
}

export function Table({ labels, data }: Props): ReactElement {
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
                {item.name}
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
                {item.email}
              </Typography>
            </T.Column>
          </T.Row>
        ))}
      </T.Body>
    </T.Root>
  );
}
