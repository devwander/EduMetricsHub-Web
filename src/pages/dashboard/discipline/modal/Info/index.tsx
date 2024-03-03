import { ListElement, Modal } from "@/components";
import ButtonsOptions from "@/components/buttons-options";
import { modalStore } from "@/store/modal.store";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import BarChartIcon from "@mui/icons-material/BarChart";
import { Typography } from "@mui/material";
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

export function Info(): ReactElement {
  const { dataId } = modalStore();
  const [part, setPart] = useState("progress");

  return (
    <Modal.Root modalId="discipline-info">
      <Modal.Header />
      <Modal.Body>
        <ButtonsOptions list={list} onChange={setPart} />
        {part === "progress" && <Typography>{dataId}</Typography>}
      </Modal.Body>
    </Modal.Root>
  );
}
