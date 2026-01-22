"use client";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

type TextboxProps = {
  label?: string;
  width?: number | string;
  multiline?: boolean;
  rows?: number;
};

export default function Textbox({
  label = "Input your task here",
  width = "25ch",
  multiline = false,
  rows = 1,
}: TextboxProps) {
  return (
    <Box component="form" noValidate autoComplete="off">
      <TextField
        label={label}
        variant="outlined"
        sx={{
        width,
        m: 1,

        // label color
        "& .MuiInputLabel-root": { color: "white" },
        "& .MuiInputLabel-root.Mui-focused": { color: "white" },

        // input text color
        "& .MuiInputBase-input": { color: "white" },

        // border color
        "& .MuiOutlinedInput-root fieldset": { borderColor: "white" },
        "& .MuiOutlinedInput-root:hover fieldset": { borderColor: "white" },
        "& .MuiOutlinedInput-root.Mui-focused fieldset": { borderColor: "white" },
      }}
        multiline={multiline}
        rows={multiline ? rows : undefined}
      />
    </Box>
  );
}
