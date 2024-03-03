import { SvgIconTypeMap } from "@mui/material";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Box from "@mui/material/Box";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import React, { createElement } from "react";

interface ButtonsOptionsProps {
  onChange: (value: string) => void;
  list: ListElement[];
}

export type ListElement = {
  label: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  value: string;
};

export default function ButtonsOptions({
  list,
  onChange,
}: ButtonsOptionsProps) {
  const [value, setValue] = React.useState(0);

  return (
    <Box>
      <BottomNavigation
        sx={{ borderRadius: "20px" }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          console.log(newValue);
          setValue(newValue);
          if (onChange) {
            onChange(newValue);
          }
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