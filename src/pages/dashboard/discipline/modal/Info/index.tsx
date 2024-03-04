import { InfoContainer, ListElement, Modal } from "@/components";
import BasicScatterChart from "@/components/basic-scatter-chart";
import ButtonsOptions from "@/components/buttons-options";
import ProgressChar from "@/components/progress-chart";
import { Color } from "@/lib";
import { DisciplineProgress } from "@/models";
import {
  useDisciplineOfferQuery,
  useDisciplineProgressQuery,
  useDisciplineShowQuery,
} from "@/query";
import { modalStore } from "@/store/modal.store";
import { disciplineType } from "@/utils/format";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import BarChartIcon from "@mui/icons-material/BarChart";
import { Box, Typography } from "@mui/material";
import { ReactElement, useState } from "react";

const list: ListElement[] = [
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

const formatDataProgress = (data: DisciplineProgress) => {
  return [
    {
      label: "Estudaram",
      value: data.num_studied,
    },
    {
      label: "Estudando",
      value: data.num_studying,
    },
    {
      label: "Pendente (Obrigatório)",
      value: data.num_missing_mandatory,
    },
    {
      label: "Pendente (Eletiva)",
      value: data.num_missing_elective,
    },
  ];
};

export function Info(): ReactElement {
  const { dataId } = modalStore();
  const [part, setPart] = useState("progress");

  const { data: disciplineData, isSuccess: isSuccessDiscipline } =
    useDisciplineShowQuery(Number(dataId));

  const {
    data: disciplineProgressData,
    isSuccess: isSuccessDisciplineProgress,
  } = useDisciplineProgressQuery(Number(dataId));

  const { data: disciplineOfferData, isSuccess: isSuccessDisciplineOffer } =
    useDisciplineOfferQuery(Number(dataId));

  return (
    <Modal.Root modalId="discipline-info">
      <Modal.Header />
      <Modal.Body>
        <Typography
          sx={{ fontWeight: "500", alignSelf: "center", fontSize: "1.5rem" }}
        >
          Informações
        </Typography>

        {isSuccessDiscipline && (
          <Box
            sx={{
              backgroundColor: Color.GREEN_FINAL_03,
              borderRadius: "10px",
              padding: "1rem",
              margin: "1rem auto",
              display: {
                xl: "grid",
                lg: "grid",
                md: "grid",
                sm: "flex",
                xs: "flex",
              },
              flexDirection: "column",
              gridTemplateColumns: "repeat(3, 1fr)",
              gridTemplateRows: "repeat(2, 1fr)",

              rowGap: "1rem",
              columnGap: "2rem",

              "& > p": {
                fontSize: "1.2rem",
              },
            }}
          >
            <Typography>
              <span style={{ fontWeight: "500" }}>Id:</span> {disciplineData.id}
            </Typography>
            <Typography>
              <span style={{ fontWeight: "500" }}>Carga horária:</span>{" "}
              {disciplineData.carga_horaria}
            </Typography>
            <Typography>
              <span style={{ fontWeight: "500" }}>Código:</span>{" "}
              {disciplineData.codigo}
            </Typography>
            <Typography>
              <span style={{ fontWeight: "500" }}>Nome:</span>{" "}
              {disciplineData.nome}
            </Typography>

            <Typography>
              <span style={{ fontWeight: "500" }}>Crédito:</span>{" "}
              {disciplineData.credito}
            </Typography>
            <Typography>
              <span style={{ fontWeight: "500" }}>Tipo:</span>{" "}
              {disciplineType(disciplineData.tipo)}
            </Typography>
          </Box>
        )}

        <ButtonsOptions list={list} onChange={setPart} />

        {part === "progress" && isSuccessDisciplineProgress && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
            }}
          >
            <Typography
              sx={{
                fontWeight: "500",
                padding: "1rem 0 0 0",
                fontSize: "1.5rem",
                marginTop: "1.5rem",
              }}
            >
              Progresso da cadeira
            </Typography>
            <InfoContainer
              value={
                "Este gráfico tem como objetivo indicar o progresso da máteria."
              }
            />
            <ProgressChar
              dataset={formatDataProgress(disciplineProgressData)}
            />
          </Box>
        )}

        {part === "demand" && isSuccessDisciplineOffer && (
          <Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "500",
                  padding: "1rem 0 0 0",
                  fontSize: "1.5rem",
                  marginTop: "1.5rem",
                }}
              >
                Oferta
              </Typography>
              <InfoContainer
                value={
                  "Este gráfico tem como objetivo indicar a frequência de oferta da máteria."
                }
              />
              <BasicScatterChart data={disciplineOfferData} />
            </Box>
          </Box>
        )}
      </Modal.Body>
    </Modal.Root>
  );
}
