import React from "react";
import Button from "@mui/material/Button";
import "./buttonField.scss";

/**
 * CheckBoxField Compoent Props
 */
type ButtonProps = {
  id?: string;
  name?: string;
  btnName?: string;
  className?: string;
  onClick?: () => void;
};
/**
 * CheckBox Component
 */
export const ButtonField = React.memo(
  ({
    id = "",
    name = "",
    btnName = "확인",
    className = "btn",
    onClick = () => {},
  }: ButtonProps) => {
    return (
      <>
        <button id={id} name={name} className={className} onClick={onClick}>
          <span> {btnName}</span>
        </button>
      </>
    );
  }
);
