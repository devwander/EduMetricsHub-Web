import { useDisciplineMenuStore } from "@/store";
import { SvgIconTypeMap } from "@mui/material";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Box from "@mui/material/Box";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { createElement, useEffect } from "react";

interface ButtonsOptionsProps {
  list: ListElement[];
}

export type ListElement = {
  label: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  value: string;
};

export default function ButtonsOptions({ list }: ButtonsOptionsProps) {
  const currentScreen = useDisciplineMenuStore(
    (state: any) => state.currentScreen
  );
  const setCurrentScreen = useDisciplineMenuStore(
    (state: any) => state.setCurrentScreen
  );

  useEffect(() => {
    if (list[0].value) {
      setCurrentScreen(list[0].value);
    }
  }, [list]);

  return (
    <Box>
      <BottomNavigation
        sx={{ borderRadius: "20px" }}
        showLabels
        value={currentScreen}
        onChange={(_, newValue) => {
          setCurrentScreen(newValue);
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
