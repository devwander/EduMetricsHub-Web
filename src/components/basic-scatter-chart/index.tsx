import { ScatterChart } from "@mui/x-charts/ScatterChart";

interface BasicScatterChartProps {
  data: DataBar[];
}

type DataBar = {
  ano: number;
  semestre: number;
};

export default function BasicScatterChart({ data }: BasicScatterChartProps) {
  return (
    <ScatterChart
      width={600}
      height={300}
      series={[
        {
          label: "Ofertas",
          data: data.map((item) => ({
            x: item.ano,
            y: item.semestre,
            id: `${item.ano}-${item.semestre}`,
          })),
        },
      ]}
    />
  );
}
