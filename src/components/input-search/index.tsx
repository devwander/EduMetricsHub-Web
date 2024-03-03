import type { TextFieldProps } from "@mui/material";
import { InputAdornment, TextField } from "@mui/material";
import { MagnifyingGlass } from "@phosphor-icons/react";
import type { ReactElement } from "react";
import { useRef } from "react";

import { Color } from "@/lib";
import { searchStore } from "@/store";

interface Props extends Pick<TextFieldProps, "placeholder"> {}

export function InputSearch({ ...rest }: Props): ReactElement {
  const searchInputRef = useRef<HTMLInputElement>(null);

  const { setSearch } = searchStore();

  return (
    <TextField
      onKeyUp={(e) => {
        e.key === "Enter" &&
          setSearch(searchInputRef.current?.value ?? undefined);
      }}
      size="small"
      fullWidth
      inputRef={searchInputRef}
      sx={{
        svg: {
          cursor: "pointer",
        },
        "& fieldset": {
          border: "none",
        },
        backgroundColor: Color.NEUTRAL_13,
      }}
      onChange={(e) => {
        if (e.target.value === "") {
          setSearch(undefined);
          return;
        }
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment
            position="end"
            onClick={() =>
              setSearch(searchInputRef.current?.value ?? undefined)
            }
          >
            <MagnifyingGlass size={20} weight="bold" />
          </InputAdornment>
        ),
      }}
      {...rest}
    />
  );
}
