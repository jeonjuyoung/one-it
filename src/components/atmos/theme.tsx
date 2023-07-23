import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    /* 기본 */
    primary: {
      light: "#56C2BA",
      main: "#05B6A9",
      contrastText: "#FFF",
    },
    /* disabled */
    secondary: {
      main: "#9EA3A2",
      contrastText: "#FFF",
    },
    /* 회원 가입 */
    info: {
      main: "#4376E3",
      contrastText: "#FFF",
    },
  },
  typography: {
    fontFamily: ["Nanum Gothic", "sans-serif"].join(","),
  },
});
