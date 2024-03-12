import { StudentHoursPerSemester } from "@/models";
import { BarChart as Chart } from "@mui/x-charts/BarChart";

type BarChartProps = {
  dataset: StudentHoursPerSemester;
};

export default function BarChart({ dataset }: BarChartProps) {
  const sortedDataset = dataset.slice().sort((a, b) => {
    if (a.ano < b.ano) return -1;
    if (a.ano > b.ano) return 1;
    if (a.semestre < b.semestre) return -1;
    if (a.semestre > b.semestre) return 1;
    return 0;
  });

  const formattedDataset = sortedDataset.map(
    ({ ano, semestre, horas_cursadas }) => {
      const label = `${ano.toString().padStart(4, "0")}-${semestre}`;
      return { label, value: horas_cursadas };
    }
  );

  return (
    <Chart
      dataset={formattedDataset}
      xAxis={[{ scaleType: "band", dataKey: "label" }]}
      series={[{ dataKey: "value" }]}
      width={500}
      height={300}
    />
  );
}
