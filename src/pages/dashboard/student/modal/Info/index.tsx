import { InfoContainer, ListElement, Modal } from "@/components";
import ButtonsOptions from "@/components/buttons-options";
import { Color } from "@/lib";
import { useStudentShowQuery } from "@/query";
import { useStudentMenuStore } from "@/store";
import { modalStore } from "@/store/modal.store";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import BarChartIcon from "@mui/icons-material/BarChart";
import { Box, Typography } from "@mui/material";
import { ReactElement } from "react";

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

export function Info(): ReactElement {
  const { dataId } = modalStore();

  const currentScreen = useStudentMenuStore(
    (state: any) => state.currentScreen
  );

  const { data: studentData, isSuccess: isSuccessStudent } =
    useStudentShowQuery(Number(dataId));

  return (
    <Modal.Root modalId="student-info">
      <Modal.Header />
      <Modal.Body>
        <Typography
          sx={{ fontWeight: "500", alignSelf: "center", fontSize: "1.5rem" }}
        >
          Informações
        </Typography>

        {isSuccessStudent && (
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
              <span style={{ fontWeight: "500" }}>Id:</span> {studentData.id}
            </Typography>
            <Typography>
              <span style={{ fontWeight: "500" }}>CPF:</span> {studentData.cpf}
            </Typography>
            <Typography>
              <span style={{ fontWeight: "500" }}>Arg:</span>{" "}
              {studentData.arg_class}
            </Typography>
            <Typography>
              <span style={{ fontWeight: "500" }}>Nome:</span>{" "}
              {studentData.nome}
            </Typography>
            <Typography>
              <span style={{ fontWeight: "500" }}>Ano de entrada:</span>{" "}
              {studentData.ano_entrada}
            </Typography>
          </Box>
        )}

        <ButtonsOptions list={list} persist="students" />

        {currentScreen === "progress" && (
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
            {/* <ProgressChar
              dataset={formatDataProgress(disciplineProgressData)}
            /> */}
          </Box>
        )}

        <Box>
          {currentScreen === "demand" && (
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
              {/* <BasicScatterChart data={disciplineOfferData} /> */}
            </Box>
          )}
          {currentScreen === "demand" && (
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
                }}
              >
                Demanda
              </Typography>
              <InfoContainer value={"Informa a demanda da máteria."} />
              <Typography
                sx={{
                  fontSize: "2rem",
                  backgroundColor: Color.NEUTRAL_11,
                  borderRadius: "10px",
                  padding: "1rem",
                  marginTop: "0.5rem",
                  fontWeight: "500",
                  color: Color.GREEN_FINAL_01,
                }}
              >
                {/* {disciplineDemandData.demanda} alunos */}
              </Typography>
            </Box>
          )}
        </Box>
      </Modal.Body>
    </Modal.Root>
  );
}