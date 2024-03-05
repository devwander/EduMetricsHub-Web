import { useDisciplineMenuStore, useStudentMenuStore } from "@/store";
import { SvgIconTypeMap } from "@mui/material";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Box from "@mui/material/Box";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { createElement, useEffect } from "react";

interface ButtonsOptionsProps {
  list: ListElement[];
  persist: string;
}

export type ListElement = {
  label: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  value: string;
};

export default function ButtonsOptions({ list, persist }: ButtonsOptionsProps) {
  let option;
  let setOption: (value: string) => void;

  if (persist === "disciplines") {
    option = useDisciplineMenuStore((state: any) => state.currentScreen);

    setOption = useDisciplineMenuStore((state: any) => state.setCurrentScreen);
  }

  if (persist === "students") {
    option = useStudentMenuStore((state: any) => state.currentScreen);

    setOption = useStudentMenuStore((state: any) => state.setCurrentScreen);
  }

  useEffect(() => {
    if (list[0].value) {
      setOption(list[0].value);
    }
  }, [list]);

  return (
    <Box>
      <BottomNavigation
        sx={{ borderRadius: "20px" }}
        showLabels
        value={option}
        onChange={(_, newValue) => {
          setOption(newValue);
        }}
      >
        {list.map((item, index) => (
          <BottomNavigationAction
            key={index}
            label={item.label}
            icon={createElement(item.icon)}
            value={item.value}
          />
        ))}
      </BottomNavigation>
    </Box>
  );
}
