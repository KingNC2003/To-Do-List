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
    <FormControl>
      <FormLabel>{label}</FormLabel>

      <RadioGroup
        value={value}
        onChange={(e) => {
        const newValue = e.target.value;
        onChange(newValue === value ? "" : newValue);
        }}
      >
        {options.map((option) => (
            <FormControlLabel
                key={option.value}
                value={option.value}
                control={<Radio />}
                label={option.label}
                onClick={() => {
                onChange(option.value === value ? "" : option.value);
                }}
            />
            ))}
      </RadioGroup>
    </FormControl>
  );
}
