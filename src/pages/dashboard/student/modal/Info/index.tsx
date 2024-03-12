import { InfoContainer, ListElement, Modal } from "@/components";
import ButtonsOptions from "@/components/buttons-options";
import ProgressChar from "@/components/progress-chart";
import { Color } from "@/lib";
import { StudentProgress } from "@/models";
import {
  useStudentHistoricQuery,
  useStudentProgressQuery,
  useStudentShowQuery,
} from "@/query";
import { useStudentMenuStore } from "@/store";
import { modalStore } from "@/store/modal.store";
import BarChartIcon from "@mui/icons-material/BarChart";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import { Box, Typography } from "@mui/material";
import { ReactElement } from "react";
import { DisciplinesTable } from "./disciplines-table";

const list: ListElement[] = [
  {
    icon: BarChartIcon,
    label: "Progresso",
    value: "progress",
  },
  {
    icon: TextSnippetIcon,
    label: "Histórico",
    value: "historic",
  },
];

const formatDataProgress = (data: StudentProgress) => {
  return [
    {
      label: "Concluiu",
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

  const currentScreen = useStudentMenuStore(
    (state: any) => state.currentScreen
  );

  const { data: studentData, isSuccess: isSuccessStudent } =
    useStudentShowQuery(Number(dataId));

  const { data: studentProgressData, isSuccess: isSuccessStudentProgress } =
    useStudentProgressQuery(Number(dataId));

  const { data: studentHistoricData, isSuccess: isSuccessStudentHistoric } =
    useStudentHistoricQuery(Number(dataId));

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

        {currentScreen === "progress" &&
          isSuccessStudentProgress &&
          studentProgressData && (
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
                Progresso do aluno
              </Typography>
              <InfoContainer
                value={
                  "Este gráfico tem como objetivo indicar o progresso do estudante."
                }
              />
              <ProgressChar
                labelX="Disciplinas"
                dataset={formatDataProgress(studentProgressData)}
              />
            </Box>
          )}

        <Box>
          {currentScreen === "historic" &&
            isSuccessStudentHistoric &&
            studentHistoricData && (
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
                  Histórico do aluno
                </Typography>
                <InfoContainer
                  value={
                    "A tabela abaixo lista as disciplinas cursadas pelo aluno."
                  }
                />
                <Box
                  sx={{
                    height: "20rem",
                    overflow: "auto",
                    marginTop: ".5rem",
                  }}
                >
                  <DisciplinesTable
                    data={studentHistoricData}
                    labels={["Nome", "Ano", "Semestre", "Status", "Nota"]}
                  />
                </Box>
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
