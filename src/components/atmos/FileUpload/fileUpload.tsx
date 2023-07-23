import Box from "@mui/material/Box";
import React, { LegacyRef } from "react";
import "./fileUpload.scss";
import AddIcon from "@mui/icons-material/Add";
/**
 * InputField Compoent Props
 */
type InputFieldProps = {
  id?: string;
  name?: string;
  type?: string;
  value?: string;
  className?: string;
  onChange?: any;
};

export const FileUpload = React.memo(
  React.forwardRef(
    (
      {
        id = "",
        name = "",
        type = "text",
        value = "",
        className = "file_upload",
        onChange = () => {},
      }: InputFieldProps,
      ref: LegacyRef<HTMLInputElement>
    ) => {
      return (
        <>
          <label htmlFor="contained-button-file" onChange={onChange} className="label">
            <Box
              sx={{
                width: "100%",
                height: "100%",
                backgroundColor: "#ECECEC",
                "&:hover": {
                  opacity: [0.9, 0.8, 0.7],
                },
                
                padding: "25px"
              }}
            >
              <input
                id={"contained-button-file"}
                name={name}
                type={"file"}
                value={ref ? undefined : value}
                className={className}
                ref={ref}
                hidden
              />

              <AddIcon className="add_icon" />
            </Box>
          </label>
        </>
      );
    }
  )
);
