"use client";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

type RadioOption = {
  value: string;
  label: string;
};

type RadioGroupFieldProps = {
  label: string;
  value: string;
  options: RadioOption[];
  onChange: (value: string) => void;
};

export default function RadioGroupField({
  label,
  value,
  options,
  onChange,
}: RadioGroupFieldProps) {
  return (
    <FormControl sx={{ alignItems: "flex-start" }}>
  <RadioGroup
    value={value}
    onChange={(e) => onChange(e.target.value)}
  >
    {options.map((opt) => (
      <FormControlLabel
        key={opt.value}
        value={opt.value}
        label={opt.label} 
        control={
          <Radio
            sx={{
              color: "white",         
              "&.Mui-checked": {
                color: "white",       
              },
            }}
          />
        }
      />
    ))}
  </RadioGroup>
</FormControl>

  );
}
