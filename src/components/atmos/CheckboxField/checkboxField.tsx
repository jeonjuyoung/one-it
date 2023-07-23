import React, { FC } from 'react';
import Checkbox from '@mui/material/Checkbox';

interface CheckboxProps {
  name?:string;
  id?:string;
  label: string;
  checked: boolean;
  onChange: (isChecked: boolean) => void;
  className?: string;
}

export const CheckboxField: FC<CheckboxProps> =  ({
  id = "",
  name = "",
  label="",
  checked = false,
  className = "checkbox",
  onChange = () => {},
}: CheckboxProps) => {

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

  return (
    <label>
      <Checkbox name={name} id={id} className={className} checked={checked} onChange={handleChange} />
      {label}
    </label>
  );
};
