import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { SearchIcon } from "public/icons";
import { Input } from "@mui/material";
import { BiSearch } from "react-icons/bi";

const CustomButton = styled(Button)({
  // your custom styles go here
}) as typeof Button;

/**
 * Filename: InputSearch.js
 * Description: Input 옆에 검색 버튼이 함께 있는 컴포넌트
 */

const Wrapper = styled("div")({
  display: "inline-flex",
  border: "2px solid #D1D1D1",
  width: 220,
  height: 40,
  borderRadius: 19,
  "& .css-19217pc-MuiInputBase-root-MuiInput-root:before": {
    borderBottom: "none",
    // textDecoration: "underline",
  },
  "&:hover ": {
    borderColor: "#a7c1f7",
  },
  "& .MuiInput-root": {
    padding: "0 20px",
    borderBottom: "none !important",
  },
  "& .MuiInput-root:before": {
    borderBottom: "none !important",
  },
  "& .MuiInput-root:after": {
    borderBottom: "none !important",
  },
  "& button": {
    margin: -11,
  },
});

export default function InputSearch() {
  return (
    <Wrapper>
      <Input />
      <Button
        className="search__button"
        // disabled={disabled}
        // onClick={onClickButton}
      >
        <BiSearch color="#000" />
      </Button>
    </Wrapper>
  );
}
