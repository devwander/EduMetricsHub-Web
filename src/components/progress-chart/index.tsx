import { BarChart } from "@mui/x-charts/BarChart";

const chartSetting = {
  xAxis: [
    {
      label: "Alunos",
    },
  ],
  width: 900,
  height: 500,
};

type progressItem = {
  label: string;
  value: number;
};

type BarChartProps = {
  dataset: progressItem[];
};

export default function ProgressChar({ dataset }: BarChartProps) {
  return (
    <BarChart
      dataset={dataset}
      yAxis={[{ scaleType: "band", dataKey: "label" }]}
      series={[{ dataKey: "value", label: "Alunos" }]}
      layout="horizontal"
      sx={{
        padding: "0 0 5rem 0",
      }}
      {...chartSetting}
    />
  );
}
