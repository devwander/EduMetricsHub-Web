import { BarChart } from "@mui/x-charts/BarChart";

type progressItem = {
  label: string;
  value: number;
};

type BarChartProps = {
  dataset: progressItem[];
  labelX: string;
};

export default function ProgressChar({ dataset, labelX }: BarChartProps) {
  return (
    <BarChart
      dataset={dataset}
      yAxis={[{ scaleType: "band", dataKey: "label" }]}
      xAxis={[{ scaleType: "linear", dataKey: "value", label: labelX }]}
      series={[{ dataKey: "value", label: labelX }]}
      width={900}
      height={500}
      layout="horizontal"
      sx={{
        padding: "0 0 5rem 0",
      }}
      // {...chartSetting}
    />
  );
}
