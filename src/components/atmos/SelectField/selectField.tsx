import React, { useState } from "react";
import './selectField.scss'
interface SelectBoxProps {
  options?:any;
  defaultValue?: string;
  onChange?: (value: string) => void;
  className?: string;
}

export const SelectField: React.FC<SelectBoxProps> = ({
  options,
  defaultValue = '',
  onChange,
  className = 'select-box'
}) => {
  
  const [selectedValue, setSelectedValue] = useState(defaultValue || "");

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedValue(value);
    if (onChange) {
      onChange(value);
    }
  };

  return (
   <>
    <select value={selectedValue} className={className} onChange={handleSelectChange}>
      {options?.map((option:any) => (
        <option key={option.id} value={option.value}>
          {option.value}
        </option>
      ))}
    </select>
   </>
  );
};
