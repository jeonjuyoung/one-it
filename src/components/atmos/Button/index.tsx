import * as React from "react";
import { Button as MuiButton, ButtonProps } from "@mui/material";

type buttonProps = {
  // readonly color?: "primary" | "secondary" | undefined;
  // readonly backgroundColor?: string;
  // readonly size?: "small" | "medium" | "large";h
  // // readonly type?: "text" | "default" | "primary" | undefined;
  // height?: number;
  // width?: number;
  // disabled?: boolean;
  sx?: {};
  children?: React.ReactNode;
  color?: "primary" | "secondary" | "info" | undefined;
  size?: "small" | "medium" | "large";
  onClick?: () => void;
};

export const Button = ({
  // color = "primary",
  // size = "medium",
  children,
  // height = 50,
  // width = 150,
  // disabled,
  color = "primary",
  size = "large",
  sx = {},
  onClick,
}: buttonProps) => {
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    console.log(event.target);
  };
  return (
    <MuiButton
      variant="contained"
      color={color}
      size={size}
      onClick={(e) => handleClick(e)}
      sx={sx}
    >
      {children}
    </MuiButton>
  );
};
