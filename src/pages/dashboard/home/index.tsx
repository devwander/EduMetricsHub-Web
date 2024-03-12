import { Box, Typography } from "@mui/material";
import type { ReactElement } from "react";

export function Home(): ReactElement {
  return (
    <Box>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "2rem",
        }}
      >
        <img
          src={"/logo.svg"}
          alt="EduMetricsHub Logo"
          style={{ width: "400px" }}
        />
      </Box>

      <Typography
        variant="h4"
        sx={{ textAlign: "center", marginBottom: "2rem" }}
      >
        Quem somos?
      </Typography>
      <Typography variant="body1" paragraph textAlign="justify">
        O EduMetricsHub é muito mais do que uma simples plataforma; é um recurso
        essencial para os coordenadores da Universidade de Pernambuco (UPE),
        campus Caruaru. Imagine ter acesso a uma vasta gama de dados dos
        estudantes, meticulosamente compilados e analisados para oferecer
        insights valiosos sobre o desempenho acadêmico e o funcionamento das
        disciplinas.
      </Typography>

      <Typography variant="body1" paragraph textAlign="justify">
        Nossa missão é transformar esses dados em informações tangíveis e úteis
        que possam guiar as decisões dos coordenadores de forma mais informada e
        eficaz. Por meio de análises detalhadas, gráficos informativos e
        ferramentas interativas, os coordenadores podem explorar tendências,
        identificar áreas de melhoria e implementar estratégias para otimizar o
        ambiente educacional na UPE, campus Caruaru.
      </Typography>

      <Typography variant="body1" paragraph textAlign="justify">
        Ao navegar pelo EduMetricsHub, os coordenadores têm acesso a uma
        variedade de recursos, desde relatórios de desempenho individual dos
        alunos até análises comparativas entre disciplinas. Por exemplo, eles
        podem examinar a taxa de aprovação em uma determinada disciplina ao
        longo do tempo, identificando possíveis obstáculos ao aprendizado. Além
        disso, podem explorar padrões de desempenho entre diferentes grupos de
        alunos, destacando áreas que podem exigir intervenção ou suporte
        adicional.
      </Typography>
      <Typography variant="body1" paragraph textAlign="justify">
        Nosso compromisso é com o sucesso acadêmico e a experiência educacional
        dos alunos na UPE, campus Caruaru. Ao fornecer ferramentas poderosas
        para a tomada de decisões fundamentadas, estamos capacitando os
        coordenadores a promover um ambiente de aprendizado mais inclusivo,
        eficiente e gratificante. Junte-se a nós nessa jornada de aprimoramento
        contínuo e excelência educacional.
      </Typography>

      <Box
        sx={{
          margin: "0 auto",
          width: "100%",
          display: "flex",
          alignContent: "center",
        }}
      >
        <img
          style={{ margin: "0 auto" }}
          src="https://www.upe.br/images/industrix/project/caruaru2.png"
          alt="Logo UPE, campus Caruaru"
        />
      </Box>
    </Box>
  );
}
