import React, { ChangeEvent } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

type RadioButtonProps = {
  options: Array<object>;
  value: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const RadioButtonField: React.FC<RadioButtonProps> = ({
  options,
  value,
  onChange,
}) => {
  return (
    <>
      <RadioGroup name="radio" value={value} onChange={onChange}>
        {options.map((option: any) => (
          <FormControlLabel
            label={option.label}
            key={option.value}
            value={option.value}
            control={<Radio color="primary" />}
          />
        ))}
      </RadioGroup>
    </>
  );
};
